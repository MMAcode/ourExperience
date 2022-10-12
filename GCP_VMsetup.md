# to connect to GCP cli:
$ gcloud compute ssh --zone "us-central1-c" instance-1  --project "microvmforfree"


# add bash scripts to VM
copy file to VM: from root directory of this git project run:
$ gcloud compute scp --zone "us-central1-c" ./miroBash01 instance-1:~/

then in the GCP cli run:
$ echo ". ~/miroBash01" >>./.bashrc

to validate changes in GCP cli:
$ cat ~/miroBash01 (cat or vim or nano)



# nginx 
https://hub.docker.com/_/nginx
$ d run --name nginx80 -d -p 80:80 nginx