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