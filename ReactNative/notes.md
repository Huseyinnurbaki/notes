


react-native android calistirirken
unable to load script from assets index.android.bundle
try running the command:

```sh
adb reverse tcp:8081 tcp:8081
```
---------

Bununla beraber hakikaten assetslerle ilgili problem olabilir.
Bunun icin asagidaki adimlari izleyerek sorun cozulebilir.

https://medium.com/@impaachu/react-native-android-release-build-crash-on-device-14f2c9eacf18

----

yeni clonelanan rn projesinde android studioda module lerin listelenmesi gerekiyor. Gozukmuyorsa sync project with gradle files buttonuna basiyoruz. sag ustte filli icon.

-----

# ios build problemleri (shift+cmd+v)


macho linker -> eksik kutuphaneyi link etmek gerekiyor
--
versiyon uyusmazliklarindan kahynakli build problemlerinde alternatif olarak kontrol edilmesi gereken alanlardan biri commandline tools versiyonu.
---
xcode --> preferences --> command line tools 
---
uygulama baska makinede başka bir xcode versiyonunda başarılı bir şekilde çalışıyorsa alternatif olarak denemek için iyi bir opsiyon.


# ios export certificate with pk

EXPORTING THE CERTIFICATE
Open Keychain Access.
In Category panel, select Certificates.
Select the certificate you want to export (should be named something like: iPhone Distribution: [Original Developer Name]).
Highlight both the certificate and its private key.
Right-click and select Export 2 items.
Select location to save p12 file.
(Optional)Enter a password - this will be used to install it on the other machine.
Press Save.

*****


Android  android/build.gradle dizininde

def enableSeparateBuildPerCPUArchitecture = false
parametresi 2 apk oluşturup oluşturmama ayrımına yarar. true verilince arm ve x86 mimarili cihaz hedef alınarak 2 apk oluşturulur. Bu sayede 4mb kadar küçülür uygulama. apk içerisine gereksiz native kod eklenmemiş olur. 2 apk store a birlikte yüklenir. google play ve amazon bu şekilde uygulamayı kabul etmektedir. insanlar indirirken otomatik olarak cihazları için hangisi uygunsa kullanıcıya o gösterilir. apk lara özgü farklı şeyler yapılamamakta. arm olanları 5 tl ye satayım, x86 ları 7 tl ye satayım gibi kurnazlıklar da yapılamamakta . :)

---------

Ios ta pod install yaparken pod command not found için 

```sh
$ sudo gem install cocoapods
```

----

iOS notes

Argument list too long: recursive header expansion failed#1407


Ios/build folder sil

Xcodedan build yap

——————————————

Macho linker 


Proje — build phases — link binary with libraries de istenmeyen bir kutuphane kalmistir

--

POD REINSTALL

Pod deintegrate

pod cache clean --all

pod cache clean 'alamofire'

pod cache clean 'alamofire' --all


Pod install


-------

Android Duplicate resoursec problemi ve enteresan cozumu

https://github.com/facebook/react-native/issues/22234