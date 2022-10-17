

# Link VM to custom domain
https://cloud.google.com/dns/docs/tutorials/create-domain-tutorial


# Connect to various ports through browser:
http://35.209.120.231:8080/, 35.209.120.231:8080, 35.209.120.231
http://ourexperience.info

# Connect to GCP cli:
$ gcloud compute ssh --zone "us-central1-c" instance-1  --project "microvmforfree"
or $ ssh vm

# copy bash scripts to VM
copy file to VM: from root directory of this git project run:
$ gcloud compute scp --zone "us-central1-c" ~/projects/miro/ourExperience/CICD/GCP/miroScriptsFor_GCP_VM.sh instance-1:~/

then in the GCP cli run:
$ echo ". ~/miroScriptsFor_GCP_VM.sh" >>./.bashrc && cat ./.bashrc
to validate changes in GCP cli: $ mm




# apps (un)install
sudo apt update

sudo apt-get -y install certbot
sudo apt-get remove certbot
//to clean up mess:
sudo apt autoremove

# default sudo setup (if wanted)
https://stackoverflow.com/questions/35016795/get-root-password-for-google-cloud-engine-vm
https://unix.stackexchange.com/questions/15611/what-is-the-difference-between-su-and-su-root


((GCP CLI in local PC
To revert your CLI to the previously installed version, you may run:
$ gcloud components update --version 405.0.0))
