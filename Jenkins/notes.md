Jenkins slave creation

Master node icerisinde home page altinda manage jenkins basligina tikla.

manage nodes --> new node 

number# of executors ayni anda kac paralel job calisabilir 

remote root dir ? jenkins related dosyalarin slave node da nereye kaydolacagi (slave icinde master konflarin olacagi jnekins directorysi olustur.)

olusturunca pwd diyerek directoryi al. ornegin /home/huseyin/jenkins diye bir dosya olsutrudun. 
remote root directory ye pwd ile pathi alip ekle

label birden fazla makine ile entegre edeceksek ornegin windows tag i  veirsek labeli windows olanlarin hepsi o jobu calistiricak.

Usage: use as much as possible

launch method: bu kisim onemli , launch slave agents via ssh secenegi secilecek. 

buraya host name  eklenecek. ip ile yapiliyor videoda. fakat hostname kullanilabilir.
password ise bilgisayarin sifresi.

credentials kismin da add -> jenkins

kind username & password 

username makina adi, sifre makina sifresi 

simdi credentiali ekle

host key => manually trusted key verification strategy

require manual verification of initial con uncheck!!

availability keep agent online amap.

node properties -> env var secebilirsin

unchecked kalabilir.



--------------


Add nodes to Jenkins(jenkins slave)

# of executors ->> paralel koşabilecek iş sayısı. 

labels -> jobları çalıştırırken içinde ilgili label varsa o job o makinede çalıştırışacak. 



-------------


swap space

Virtual memory is a combination of RAM and disk space that running processes can use. Swap space is the portion of virtual memory that is on the hard disk, used when RAM is full.

