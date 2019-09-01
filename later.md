mysql -h localhost -P 3306 -u root -p 


java -Dserver.port=8082  -Dspring.datasource.url=jdbc:mysql://localhost:3306/cookbook  -jar cloudnative-connections-0.0.1-SNAPSHOT.jar 

java -jar  cloudnative-connectionposts-0.0.1-SNAPSHOT.jar 

-**********




kurulum yaparken gerekl versiyonlar


node v10.15.3
npm  6.4.1
xcode 10.3


------------------



Gradle cache locates at

On Windows: %USER_HOME%\.gradle/caches/
On Mac/Unix: $HOME/.gradle/caches/
You can browse to these directory and manually delete it or run

rm -rf $HOME/.gradle/caches/
on Unix system. Run this command will also force to download dependencies.

Update 2: Clear the Android build cache of current project

Note: Android Studio's File | Invalidate Caches/Restart doesn't clear the Android build cache, so you'll have to clean it separately.

On Windows:

gradlew cleanBuildCache
On Mac or Linux:

./gradlew cleanBuildCache


react native info env hakkinda bilgi  evriyor


=====

1- close the project
2- close android studio
3- delete the .idea directory
4- delete all .iml files
5- open android studio and import the projec