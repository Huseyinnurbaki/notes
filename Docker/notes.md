# Best practices

Always build 2 images at a time. One is with latest tag,other with version tag. 


```sh
$ docker build -t whenry/fedora-jboss:latest -t whenry/fedora-jboss:v2.1 .

```


-----


docker stop $(docker ps -a -q)

docker rm $(docker ps -a -q)

Kill all instances etc