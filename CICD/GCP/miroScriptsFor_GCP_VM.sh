echo "miroScriptsFor_GCP_VM.sh initialised"
alias rt='. ~/.bashrc'
alias mm='cat ~/miroBash01.sh'

# Docker
alias d='sudo docker'
sh(){
  sudo docker container exec -it $1 sh
  }

swap1GB(){ # https://damonvjanis.medium.com/archive-phoenix-deployments-on-gcp-with-nginx-911730f84d3b
  set -e
  sudo fallocate -l 1G /swapfile
  sudo chmod 600 /swapfile
  sudo mkswap /swapfile
  sudo swapon /swapfile
  echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
  top
  #dashboard of the resource consumption on the server. You should see a line like the following: MiB Swap: 1024.0 total. Press ctrl+c to exit.
  set +e
}

installSoftware(){
  set -e
  sudo apt-get install elixir # https://elixir-lang.org/install.html
  sudo apt install nodejs npm
  sudo apt install postgresql postgresql-contrib
  set +e
}

#does not seem working:
updatePostgresPassword(){ #pass psw as argument
  sudo -u postgres psql -c "ALTER USER postgres PASSWORD '$1';"
history -c # to clear history of saved commands
history # check it was erased
}