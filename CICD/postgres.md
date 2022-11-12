troubleshoot: https://stackoverflow.com/questions/24504680/connect-to-postgres-server-on-google-compute-engine/57863128#57863128


restart 
sudo systemctl restart postgresql


postgress files:
where are those: sudo -u postgres psql -c "SHOW hba_file" -c "SHOW config_file"
-->
 sudo vim /etc/postgresql/13/main/pg_hba.conf
 sudo vim /etc/postgresql/13/main/postgresql.conf

apt-get install netcat
my public ip: 51.155.208.218



# test prep for remote connection:
(35.209.120.231 = remote server ip adress)
# run on remote server:
sudo nmap 35.209.120.231  - for overview, main to use
nc -zv 35.209.120.231 5432

check if postgres is running at all:
sudo lsof -i -P -n | grep LISTEN
-->
postgres  361324 postgres    5u  IPv6 2070962      0t0  TCP [::1]:5432 (LISTEN)
postgres  361324 postgres    6u  IPv4 2070963      0t0  TCP 127.0.0.1:5432 (LISTEN)

nc -zv 35.209.120.231 5432
--> nc: connect to 35.209.120.231 port 5432 (tcp) failed: Connection refused
== Port open by firewall, but service either not listening or refusing connection.!!


netstat -nlt
-->
tcp        0      0 127.0.0.1:5432          0.0.0.0:*               LISTEN
tcp6       0      0 ::1:5432                :::*                    LISTEN
== asi: 0.0.0.0:*  only for local;


pg_lsclusters
--> 13  main    5432 online postgres /var/lib/postgresql/13/main /var/log/postgresql/postgresql-13-main.log

sudo systemctl restart postgresql
--> Nov 02 19:23:50 instance-1 systemd[1]: Starting PostgreSQL RDBMS...
Nov 02 19:23:50 instance-1 systemd[1]: Finished PostgreSQL RDBMS.

mm@instance-1 ~ % systemctl status postgresql
-->
● postgresql.service - PostgreSQL RDBMS
     Loaded: loaded (/lib/systemd/system/postgresql.service; enabled; vendor preset: enabled)
     Active: active (exited) since Wed 2022-11-02 19:23:50 UTC; 3min 55s ago
    Process: 361779 ExecStart=/bin/true (code=exited, status=0/SUCCESS)
   Main PID: 361779 (code=exited, status=0/SUCCESS)
        CPU: 1ms

Nov 02 19:23:50 instance-1 systemd[1]: Starting PostgreSQL RDBMS...
Nov 02 19:23:50 instance-1 systemd[1]: Finished PostgreSQL RDBMS.

psql --version
--> psql (PostgreSQL) 13.8 (Debian 13.8-0+deb11u1)

mm@instance-1 ~ % pg_lsclusters
-->
Ver Cluster Port Status Owner    Data directory              Log file
13  main    5432 online postgres /var/lib/postgresql/13/main /var/log/postgresql/postgresql-13-main.log

mm@instance-1 ~ % sudo pg_isready
-->
/var/run/postgresql:5432 - accepting connections

use this specific query to see is svc is up running: https://stackoverflow.com/a/73352124



TODO:
- create new user
- connect to postgres as new user remotely