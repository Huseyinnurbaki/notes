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
