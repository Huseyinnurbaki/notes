
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