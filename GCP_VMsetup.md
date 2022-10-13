

# Link VM to custom domain
https://cloud.google.com/dns/docs/tutorials/create-domain-tutorial


# Connect to various ports through browser:
http://35.226.57.36:8080/, 35.226.57.36:8080, 35.226.57.36

# Connect to GCP cli:
$ gcloud compute ssh --zone "us-central1-c" instance-1  --project "microvmforfree"

# add bash scripts to VM
copy file to VM: from root directory of this git project run:
$ gcloud compute scp --zone "us-central1-c" ./miroBash01.sh instance-1:~/

then in the GCP cli run:
$ echo ". ~/miroBash01.sh" >>./.bashrc
to validate changes in GCP cli: $ mm



