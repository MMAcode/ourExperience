#!/bin/bash
set -e # any error will stop the build/script

# cd ~/fromGithub/optimized_nginx_wrapper/optimized_nginx
# SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
cd ~/ourExperienceWrapper/our_experience

git fetch && git reset --hard origin/main #master # Update to latest version of code
MIX_ENV=prod mix deps.get

# Optional CI steps
# CI=true mix test
# mix credo --strict (credo is not used in example repo, commented out)

export MIX_ENV=prod && mix compile # Build phase -> Generates "our_experience app"

# npm and webpack were replaced for esbuild: https://hexdocs.pm/phoenix/asset_management.html
# npm install --prefix ./assets
# npm run deploy --prefix ./assets
mix assets.deploy # -> needed only in production, otherwise runs automatically; Generates "our_experience priv/static" folder

mix phx.digest # -> 'Check your digested files at "priv/static"'

now_in_unix_seconds=$(date +'%s')                     # eg 1668471165
mix release --path ../releases/${now_in_unix_seconds} # Create release

# Update env var file with latest release name

if [ ! -f ../env_vars ]; then touch ../env_vars && echo 'LATEST_RELEASE=' >../env_vars; fi
sed -i 's/LATEST_RELEASE=.*/LATEST_RELEASE='$now_in_unix_seconds'/g' ../env_vars # this command does not work on MAC systems with this -i flag!

# Find the port in use, and the available port
# curl --head localhost:4000
if $(curl --output /dev/null --silent --head --fail localhost:4000); then
  port_in_use=4000
  open_port=4001
else
  port_in_use=4001
  open_port=4000
fi
#!!! check with 'echo "$port_in_use $open_port"'

# Update release env vars with new port and set non-conflicting node name
echo "export PORT=${open_port}" >>../releases/${now_in_unix_seconds}/releases/0.1.0/env.sh
echo "export RELEASE_NAME=${open_port}" >>../releases/${now_in_unix_seconds}/releases/0.1.0/env.sh # sets the name of the node when Erlang boots up. We can’t have two nodes with the same name running simultaneously, so we just set the node name to the same value as the open port to avoid conflicts.

# requires systemd setup first, before running this script
sudo systemctl start our_experience@${open_port} # Start new instance of app; systemclt works only in linux systems

# Pause script till app is fully up
# curl localhost:$open_port
until $(curl --output /dev/null --silent --head --fail localhost:$open_port); do
  printf 'Waiting for app to boot...\n'
  sleep 1
done
# systemctl list-units --type=service  (to see status of all services started with systemctl)
# systemctl status our_experience@4000.service
# sudo systemctl stop our_experience@4000.service
mix ecto.migrate # Run migrations

sudo sed -i 's/server 127\.0\.0\.1\:.*/server 127.0.0.1:'$open_port\;'/g' /etc/nginx/sites-available/default # Update Nginx config to direct requests to new version of app
# sudo sed -i 's/server 127\.0\.0\.1\:.*/server 127.0.0.1:4000\;/g' /etc/nginx/sites-available/default

sudo systemctl reload nginx                       # Reload Nginx so it gracefully starts routing to new version of app
sudo systemctl stop our_experience@${port_in_use} # Stop previous version of app
set +e
echo "all seems to have gone well... ;-)"
# xxx
