# express js

büyük request bodyleri parse etmek gerekiyor. Bunun için middleware kullanılıyor. Request işlenmeden önce olacaklar gibi düşünebiliriz. body-parser kullanarak büyük bodyleri parse edip (üst limit vereebiliyoruz) requestimiz hangi metoda girecekse problemsiz giriyor. 


app.use(bodyParser.json({ limit: '40MB' }));

artık 40mb kadar parse edebiliyoruz

---
express.json other options
app.use(bodyParser.json({ limit: '40MB' }));
gibi kullanılıyor.
https://expressjs.com/en/api.html
![alt text](./img/exp.png "exp")

---

quick-db usess better-sqlite3. better-sqlite3 

----


## ssl sertifikası

https://flaviocopes.com/express-https-self-signed-certificate/


## install ipa from node server

https://stackoverflow.com/questions/23561370/download-and-install-an-ipa-from-self-hosted-url-on-ios/33997810

https://medium.com/@adrianstanecki/distributing-and-installing-non-market-ipa-application-over-the-air-ota-2e65f5ea4a46

manifesti yukarıdaki linklerdeki hrefe verilen actionla tetiklemek, manifest içinde de nereden appp alıncak onun bilgisi var



## Ecmascript tips

arr = [1, 2, 3, 4, 5];
arr.forEach(function (element) {
  console.log(element);
  
  if (element === 2) 
    return;
  
});

Konsolda 1 2  yazar diyenler dikkat, bu haber en çok sizi ilgilendiriyor. 



Burada diyor ki forEach metodunu bir adet callback fonksiyonuyla çağırıyoruz. Yani her eleman için callback fonksiyonu 1 kere çalıştırılacak. 

Yani aslında durum aşağıdaki gibi
const arr = [1, 2, 3, 4, 5];
const callback = function(element) {
    console.log(element);
    
    if (element === 2) 
      return;
}
for (let i = 0; i < array.length; i++) {
    callback(arr[i]);
}


Konsolda 1 2 3 4 5 yazacak. 

Eğer benzer şekilde döngünüze müdahale etmeniz gerekiyorsa dümdüz for kullanın diyorlar. 

Bu bilgiyi buradan edindim.  O da şuradan edinmiş. 