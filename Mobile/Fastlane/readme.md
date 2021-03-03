## ruby installation fail (2.5)

brew ile indirdim daha sonra aşağıdakileri pathe ekledim. 

export PATH="/usr/local/opt/ruby@2.5/bin:$PATH"
sıradaki 2 tanesi compilerların görmesi için
export LDFLAGS="-L/usr/local/opt/ruby@2.5/lib"
export CPPFLAGS="-I/usr/local/opt/ruby@2.5/include"

bu ikisi de fatlane için zorunlu
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
------

# Android Versioning 

https://medium.com/@IlyaEremin/npm-version-for-gradle-android-9137a7dc273c


Add on top of app/build.gradle:
```
apply from: './versioning.gradle'
```


Sources of script
2. Run
./gradlew bumperInit -PbumperVersionName=1.0.0 -PbumperVersionCode=1
It creates file app/gradle.properties with following content:
appVersionName=1.0.0
appVersionCode=1


If such file exists then adds values to the end of file.
3. Inside app/build.gradle change
android {
  ...
  defaultConfig {
    versionCode 1
    versionName 1.0.0
    ...
  }
}
to
android {
 ...
 defaultConfig {
    versionCode appVersionCode.toInteger()
    versionName appVersionName
    ...
  }
}
how to use
Run
./gradlew bumperVersionPatch

---