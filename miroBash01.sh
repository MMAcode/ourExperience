echo "miroBash01.sh initialised"
alias rt='. ~/.bashrc'
alias mm='cat ~/miroBash01.sh'

# Docker
alias d='sudo docker'
sh(){
  sudo docker container exec -it $1 sh
  }
