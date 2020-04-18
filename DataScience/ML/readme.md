Machine learning algorithms:
- Supervised learning
Supervised Learning
“right answers” given
- Unsupervised learning
Regression: Predict continuous
valued output (price)
----

> Personal notes from machine Learning class of stanford's. Most of the notes are taken from his lecture slides.
https://www.coursera.org/learn/machine-learning/home/welcome

# Linear Regression

## Cost Function

![alt text](./img/cf.png "cf")

Difference between the predicted value and the actual value.

![alt text](./img/cf1.png "cf1")

Ɵ1,Ɵ2 -> ne kadar küçük seçersek costumuz o kadar düşer. 


![alt text](./img/cf2.png "cf1")

yukarıdaki soruda amacımız slope a olan uzaklığı bulmak aslında. 
cost function formulunu uyguladığımızda 
j(0) için, yani sarı çizdiğim kısım sklopeumu. oraya olan mesafeleri kullanacağım. cost functioon formülünü koyunce m=3 (toplam datamız)

1/6[(0-1)^2+(0-2)^2+(0-3)^2]

=14/6


# Contour Plot

![alt text](./img/cf4.png "cf4")

Contour plot (sağdaki) incelenirken amaç aslında yine aynı. Bu sefer 3 boyutlu bir grafiği x-y düzleminde görüyoruz. 

Özünde cost function en optimal slope u belirleyip (optimalden kasıt ona olan mesafenin minimize edilmesi), contour pltta da durum aynı. Merkeze yaklaşmak amaç. 3-4 data varken bu işler kolay ancak data büyüdükçe imkasnız bir hal alıyor. Burada yazılım devreye giriyor.

aşağıda merkeze yaklaşan bir örnek var ancak yukarıdaki slope, yani aslında hipotizimiz, merkeze daha yakın olduğu için cost function alttakine göre daha düşük. 

![alt text](./img/cf5.png "cf5")

# Linear Regression with single variable

## Gradient Descent Intuition

![alt text](./img/cf6.png "cf6")

alfa is learning rate. Eğer alfa çok küçük olursa küçük adımlarla ilerler çok zamna alır. 
eğer alttaki gibi büyük olursa çok fazla zıpplar optimumdan uzaklaşırız. 


Soru:

Eğer optimal noktadaysak bir sonraki gradient descent adımı bizi nereye götüreeck  ?

Slope 0 olduğu için sabit kalacağız. Formülde yerine koyunca türevi almaya çalıştığımızda 0 ı göreceğiz. 


![alt text](./img/cf7.png "cf6")


The point of all this is that if we start with a guess for our hypothesis and then repeatedly apply these gradient descent equations, our hypothesis will become more and more accurate.
![alt text](./img/cf7.png "cf6")


Tabi bu bir nevi brute force bir yöntem. Bundan daha hızlı ve verimli yöntem:
