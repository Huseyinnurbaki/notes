
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

# prosesin koştuu portu bulup prosesi öldürme

```sh
lsof -ti:8081 | xargs kill
```
---

# copy directory flags

-R recursive copy

-----


2 condition olacaksa (arasında operator olan )

if [ "${CONFIGURATION}" == "Debug"] || [ "${CONFIGURATION}" == "Release"   ]; then


şeklinde yazmak gerekiyor. yoksa condition çalışmaz. 


-----


code . ~/.bash_profile 

vscode da aç

alias k='kubectl'

sonra sourcela

source ~/.bash_profile

------


$KIALI_USERNAME=$(read -p 'Kiali Username: ' uval && echo -n $uval | base64)
$KIALI_PASSPHRASE=$(read -sp 'Kiali Passphrase: ' pval && echo -n $pval | base64)


terminalden değer alıp atama yapar.


------------


if true | openssl s_client -connect www.google.com.tr:443 2>/dev/null | \
  openssl x509 -noout -checkend 0; then
  echo "Certificate is not expired"
else
  echo "Certificate is expired"
fi


ssl sertifikası valid mi kontrol eder


----


search text in files mac terminal

sudo grep 192.168.1.1 * -verbose

* yerine dosya yazılabilir
ip aradığım text
-verbose ekstra görüntülemek için


----

ps -ax

tüm processleri gösterme


-----------

dosya bulma
mdfind <dosyaadı>

~ $ find . -type d | grep <dosyaadı>

------

# send multiple requests
 for i in `seq 1 100`; do curl -s -o /dev/null http://localhost/whoami; done

 
# get value inside curl reponse 

https://stackoverflow.com/questions/38906626/curl-to-return-http-status-code-along-with-the-response

-------

# Author Huseyin Nurbaki
# Create Date 13.06.2020

# helper function

function warn {
                ../killdev.sh
                clear
                echo "**********   This Took More Than Usual   **********" 
                echo ">>>>>>>>>>   Try running the command below inside "
                pwd
                echo "---------->   ./gradlew bootRun "
                exit 1
           }

clear
let startingSecond=$(date +%H)*3600+$(date +%M)*60+$(date +%S)

echo "Cleaning Running Servers..."
./killdev.sh
echo "----------------------------------"

##########################################
# start databases if script has db arg
if [ "$1" == "db" ]
then
cd service-stack/ocf/docker/infra/
docker-compose down
docker-compose up -d
sleep 15s
echo "waiting until databases are ready - do not quit"
cd ../../../../
fi
##########################################



#########################################################
################  SERVER BEGINNING ################
#########################################################
cd ./server
echo "______________Starting Server_____________"
echo "______________Takes around 8 seconds_____________"

./gradlew bootRun > /dev/null 2>&1 & 


for (( c=4; c<=12; c++ ))
do  
    cs=$(curl http://localhost:799777/health -o -I -L -s -w "%{http_code}")
    if [ "$cs" == "200" ]
    then
    echo ">>>>>>>>>>   Server Ready   <<<<<<<<<<<" 
    break
    else
    echo "Waiting $c more seconds..."
    sleep "$c"
    fi
    if [ "$c" == "12" ]
    then
    warn
    fi
done
cd ..
#########################################################
################ CONFIG SERVER END ######################
#########################################################

#########################################################

#########################################################
################  SERVER BEGINNING #############
#########################################################
cd ./-server
echo "______________Starting Server_____________"
echo "______________Takes around 15 seconds_____________"
./gradlew bootRun > /dev/null 2>&1 & 


for (( c=6; c<=15; c++ ))
do  
    ds=$(curl http://localhost:687678/health -o -I -L -s -w "%{http_code}")
    if [ "$ds" == "200" ]
    then
    echo ">>>>>>>>>>    Server Ready   <<<<<<<<<<<" 
    echo ">>>>>>>>>>   Opening    <<<<<<<<<<<" 
    # xdg-open http://localhost:687678 linux version
    open http://localhost:687678
    break
    else
    echo "Waiting $c more seconds..."
    sleep "$c"
fi
if [ "$c" == "15" ]
    then
    warn
    fi
done
cd ..
############################################################
################  SERVER END ######################
############################################################


let endingSecond=$(date +%H)*3600+$(date +%M)*60+$(date +%S)
echo "total duration: " $(expr $endingSecond - $startingSecond) "seconds"

echo "Happy Coding !"


------

> /dev/null 2>&1 &   backgroundda çalıştırma
let endingSecond=$(date +%H)*3600+$(date +%M)*60+$(date +%S) şu anısaniye cinsinden

exit 1 terminali kapatmadan scripti kırmak için

# beautify json

```bash
$ cat <someJson> | jq

```

# add dir to PATH

```bash
$ export PATH=$PWD/bin:$PATH
```

# zsh 
zsh: no matches found: -?
```bash
unsetopt nomatch
```

---

# check storage
```bash
 df -h
```

# check if installed

if [ ! "$(command -v girror)" ]; then
    echo "Please install girror from https://github.com/Huseyinnurbaki/homebrew-girror"
fi


---

## lookup dns authority

nslookup -type=SOA <domain>


## base64 encode decode file 

openssl base64 -in <infile> -out <outfile>

openssl base64 -d -in <infile> -out <outfile>
---


pass a var with string and extra vars

function test() {
    echo $1
}
TABLE_NAME=users


QUERY="select ${STH} from ${TABLE_NAME} where ID::text = $SOME_ID"


test "$QUERY" -> "" does the magic, otherwise echo will prompt <select >

