# RUNNING THE MICROSERVICES


You’ll now see that a new JAR file, cloudnative-requestresponse-0.0.1-SNAPSHOT.jar, has been created in the target subdirectory. This is what we call a fat jar—the Spring Boot application is completely self-contained, including a Tomcat container. There- fore, to run the application, you need only run Java, pointing to the JAR:

```sh
java -jar target/cloudnative-requestresponse-0.0.1-SNAPSHOT.jar
```
Buradan sonra ilgili bir servisi terminalden curl edebiliyoruz.


----

Property file name and the Client module service name spring.application.name=config-server-client should be exactly same, otherwise, properties will not be detected. Actually, Config Server exposes the properties in an end point of property file name, if you browse URL http://localhost:8888/config-server-client/development it will return all the dev environment values.


microservice git reposu içerisinden kendisine ait konfiürasyonları ismiyle uyuşan dosyadan alır. Yoksa bulamamz.