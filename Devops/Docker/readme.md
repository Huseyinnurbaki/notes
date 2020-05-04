# Best practices

Always build 2 images at a time. One is with latest tag,other with version tag. 


```sh
$ docker build -t whenry/fedora-jboss:latest -t whenry/fedora-jboss:v2.1 .

```


-----


docker stop $(docker ps -a -q)

docker rm $(docker ps -a -q)

Kill all instances etc



----

rename image (if no name)

docker image tag ecfb260cb174 hhaluk/my-app:latest
ecf... container id

or

docker image tag server:latest myname/server:latest


---

build & tag with dockerfile 

docker build -t hhaluk/tuts .



--------


docker build -t hhaluk/node--- .

docker run -p 30046:8080 -d hhaluk/---

----

## display running processes of a container 

$ docker container top CONTAINER

## stop & kill contaimner

$ docker stop <CONTAINERID> | xargs docker rm

## container bash

 docker exec -it <CONTAINERID> /bin/bash

 ## show ports

 docker container port <CONTAINERID>


## multi service container 
http://supervisord.org/introduction.html
https://docs.docker.com/config/containers/multi-service_container/
https://forums.docker.com/t/best-practices-multiple-app-in-containers/913/9
https://medium.com/@karthi.net/how-to-run-multiple-services-in-a-docker-container-5919fcc981a6
github/Huaeyinnurbaki/mocktail