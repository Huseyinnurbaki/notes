mysql -h localhost -P 3306 -u root -p 


java -Dserver.port=8082  -Dspring.datasource.url=jdbc:mysql://localhost:3306/cookbook  -jar cloudnative-connections-0.0.1-SNAPSHOT.jar 

java -jar  cloudnative-connectionposts-0.0.1-SNAPSHOT.jar 
