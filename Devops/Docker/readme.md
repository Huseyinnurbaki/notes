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

docker run -p 4000:4000 -d ataexpress.azurecr.io/service-catalog:latest
ataexpress.azurecr.io/service-catalog:latest
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


## View remote containers 

docker -H <--IP--> ps

## stop all containers

docker container stop $(docker container ls -aq)

## Remove all stopped containers

 docker container rm $(docker container ls -aq)

## docekr kill all containers

docker kill $(docker ps -q)

## docker kill last n containers

d kill $(d container ls --last n)

## Wait for other host to start

ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait

CMD ["/sayhello"]
Step 2: Modify your docker-compose.yml file
version: '3.6'
services:
  redis:
    image: "redis:alpine"
    hostname: redis
    ports:
      - "6379:6379"

  my_super_app:
    build: ./my_super_app
    image: "my_super_app:latest"
    container_name: my_supper_app
    depends_on:
      - redis
    command: sh -c "/wait && /sayhello"
    environment:
      - WAIT_HOSTS=redis:6379
      - WAIT_HOSTS_TIMEOUT=300
      - WAIT_SLEEP_INTERVAL=30
      - WAIT_HOST_CONNECT_TIMEOUT=30

-------

# env vs export

https://stackoverflow.com/questions/33379393/docker-env-vs-run-export