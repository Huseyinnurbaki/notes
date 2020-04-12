# Circuit Breakers & timeout

ikisi biirlikte neden kullanılsın ? 

Örneğin para transferi servisi var. Fraud-control servisine gidip geliyor. fraud control servisiniz de diğer servislerle aynı makinede. Şimdi fraud control servisinde problem varsa ve  eğer 1 kullanıcı transfer yapıyorsa belli bir süre içerisinde, çok bir problem yok. Timeouta düşecek cevabıı alıcak, business nasılsa ilerleyecek veya ilerlemeyecek. Ama aynı anda birçok kullanıcı frud controlun timeoutunu beklemek zorunda kalacaksa buna cascading failure denir. Bu da şu anlama geliyor, her istek 1 thread demek. kaç kişi varsa sistemde yığılma olmaya sistem daha ge cevap vermeye başlıyor. Bunu önlemek için circuit breaker devreye giriyor. 


One of the big differences between in-memory calls and remote calls is that remote calls can fail, or hang without a response until some timeout limit is reached. What's worse if you have many callers on a unresponsive supplier, then you can run out of critical resources leading to cascading failures across multiple systems. Michael Nygard popularized the Circuit Breaker pattern to prevent this kind of catastrophic cascade.

https://martinfowler.com/bliki/CircuitBreaker.html

-----
