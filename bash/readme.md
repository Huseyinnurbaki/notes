
# GREP

icinde jenkins gecen yerleri getirir.

```sh
ps -ef| grep jenkins
```

beklenen output

```sh
jenkins    756     1  2 06:34 ?        00:00:11 /etc/alternatives/java -Dcom.sun.akuma.Daemon=daemonized -Djava.awt.headless=true -DJENKINS_HOME=/var/lib/jenkins -jar /usr/lib/jenkins/jenkins.war --logfile=/var/log/jenkins/jenkins.log --webroot=/var/cache/jenkins/war --daemon --httpPort=8080 --debug=5 --handlerCountMax=100 --handlerCountMaxIdle=20
ec2-user   869   837  0 06:40 pts/0    00:00:00 grep --color=auto jenkin
```

-------


Ilk shell script calstirma

cd /directory/with/executableFileName

chmod +x executableFileName     # only required if your file is not already executable

./executableFileName



----------

prosesin koştuu portu bulup prosesi öldürme

```sh
lsof -ti:8081 | xargs kill
```


copy directory flags

-R recursive copy