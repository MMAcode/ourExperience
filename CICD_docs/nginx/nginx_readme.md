# Nginx

https://help.dreamhost.com/hc/en-us/articles/216455077-Nginx-configuration-file-locations

# docker
https://hub.docker.com/_/nginx
$ d run --name nginx80 -d -p 80:80 nginx


use dockerfile to tweak settings:
https://stackoverflow.com/questions/30151436/how-to-run-nginx-docker-container-with-custom-config

settings basics:
http://nginx.org/en/docs/beginners_guide.html

html in
/usr/share/nginx/html/index.html
/etc/nginx/nginx.conf

# build custom image
(from nginx folder:)
$ gcloud compute scp --zone "us-central1-c" ./dockerfile instance-1:~/dockerMiro/
$ gcloud compute scp --zone "us-central1-c" ./index.html instance-1:~/dockerMiro/
in vm in ~/dockerMiro:
$ d build -t nginx_custom_html .

# run it
$ d run --name nginx02 -d -p 82:80 nginx_custom_html_02
$ d run --name nginx04 -d -p 80:80 nginx_custom_html_03_vim


# SSL certs
(for nginx)
((https://installati.one/debian/11/certbot/))
! https://certbot.eff.org/instructions?ws=nginx&os=debianbuster
!! with docker: https://eff-certbot.readthedocs.io/en/stable/install.html#running-with-docker
!!! https://pentacent.medium.com/nginx-and-lets-encrypt-with-docker-in-less-than-5-minutes-b4b8a60d3a71
? https://github.com/siilike/certbot-dns-standalone


using docker-compose file:
$ gcloud compute scp --zone "us-central1-c" ./docker-compose.yml instance-1:~/sslCertsMiro/
$ gcloud compute scp --zone "us-central1-c" ./data/app.conf instance-1:~/sslCertsMiro/data/

$ gcloud compute scp --zone "us-central1-c" ./init-letsencrypt.sh instance-1:~/sslCertsMiro/
chmod +x init-letsencrypt.sh &&
sudo ./init-letsencrypt.sh

https://faun.pub/setting-up-ssl-certificates-for-nginx-in-docker-environ-e7eec5ebb418
