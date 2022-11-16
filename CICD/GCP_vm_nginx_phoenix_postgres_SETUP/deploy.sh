#!/bin/bash
set -e

# Update to latest version of code
cd ~/fromGithub/optimized_nginx_wrapper/optimized_nginx
git fetch
git reset --hard origin/master
MIX_ENV=prod mix deps.get

# Optional CI steps
CI=true mix test
# mix credo --strict (credo is not used in example repo, commented out)

# Build phase
export MIX_ENV=prod
mix compile # -> Generates "my_app app"
npm install --prefix ./assets
npm run deploy --prefix ./assets
mix phx.digest # -> 'Check your digested files at "priv/static"'

# Create release
now_in_unix_seconds=$(date +'%s') # 1668471165 = $MMNOW
mix release --path ../releases/${now_in_unix_seconds}
# mix release --path ../releases/$MMNOW

# Update env var file with latest release name
sed -i 's/LATEST_RELEASE=.*/LATEST_RELEASE='$now_in_unix_seconds'/g' ../env_vars
# sed -i.bak 's/LATEST_RELEASE=.*/LATEST_RELEASE='$MMNOW'/g' ../env_vars

# Find the port in use, and the available port
if $(curl --output /dev/null --silent --head --fail localhost:4000); then
  port_in_use=4000
  open_port=4001
else
  port_in_use=4001
  open_port=4000
fi
# check with 'echo "$port_in_use $open_port"'

# Update release env vars with new port and set non-conflicting node name
# echo "export PORT=${open_port}" >>../releases/$MMNOW/releases/0.1.0/env.sh
echo "export PORT=${open_port}" >>../releases/${now_in_unix_seconds}/releases/0.1.0/env.sh
# echo "export RELEASE_NAME=${open_port}" >>../releases/$MMNOW/releases/0.1.0/env.sh # sets the name of the node when Erlang boots up. We can’t have two nodes with the same name running simultaneously, so we just set the node name to the same value as the open port to avoid conflicts.
echo "export RELEASE_NAME=${open_port}" >>../releases/${now_in_unix_seconds}/releases/0.1.0/env.sh # sets the name of the node when Erlang boots up. We can’t have two nodes with the same name running simultaneously, so we just set the node name to the same value as the open port to avoid conflicts.

# Start new instance of app
sudo systemctl start my_app@${open_port}

# Pause script till app is fully up
until $(curl --output /dev/null --silent --head --fail localhost:$open_port); do
  printf 'Waiting for app to boot...\n'
  sleep 1
done

# Run migrations
mix ecto.migrate

# Update Nginx config to direct requests to new version of app
sudo sed -i 's/server 127\.0\.0\.1\:.*/server 127.0.0.1:'$open_port\;'/g' /etc/nginx/sites-available/default

# Reload Nginx so it gracefully starts routing to new version of app
sudo systemctl reload nginx

# Stop previous version of app
sudo systemctl stop my_app@${port_in_use}
