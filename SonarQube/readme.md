
# Kurulum


```sh
$ docker pull sonarqube
$ docker run -d --name sonarqube -p 9000:9000 sonarqube
```

first login credentials: 

u: admin
p: admin


Projeye sonar-project.properties dosyası eklenir.
```sh

# must be unique in a given SonarQube instance
sonar.projectKey=mbl:mui
# this is the name and version displayed in the SonarQube UI. Was mandatory prior to SonarQube 6.1.
sonar.projectName=Mobile UI
sonar.projectVersion=1.0
sonar.host.url=http://localhost:9000
# Path is relative to the sonar-project.properties file. Replace "\" by "/" on Windows.
# This property is optional if sonar.modules is set. 
sonar.sources=app
# Where to find tests file, also src
sonar.tests=app
sonar.ws.timeout=18000
# Encoding of the source code. Default is default system encoding
sonar.sourceEncoding=UTF-8
sonar.test.inclusions=app/**/*.spec.js,app/**/*.spec.jsx,app/**/*.test.js,app/**/*.test.jsx

$ docker pull sonarqube
$ docker run -d --name sonarqube -p 9000:9000 sonarqube
```

daha sonra proje dizininde 

sonar-scanner  -Dsonar.login=?????????????????????


Bu login keyi sonar ayağa kaldırıp proje oluşturunca generate ediliyor. Bir de o aşamada bilgisayara/cihaza indirilmesi gereken sonarqube paketini gösteriyor. onun bin folderını pathe eklemek gerekiyor.


