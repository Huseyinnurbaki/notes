# K8s kurulum

```sh
$ curl -L https://istio.io/downloadIstio | sh -
$ cd istio-1.4.3
$ export PATH=$PWD/bin:$PATH
```


artık istioctl i kullanbiliyoru.
```sh
$ istioctl manifest apply --set profile=demo 
$ kubectl get svc -n istio-system
```

output should be 

grafana                  ClusterIP      10.110.63.120    <none>        3000/TCP                                                                                                                     21s
istio-citadel            ClusterIP      10.104.146.169   <none>        8060/TCP,15014/TCP                                                                                                           31s
istio-egressgateway      ClusterIP      10.101.97.201    <none>        80/TCP,443/TCP,15443/TCP                                                                                                     22s
istio-galley             ClusterIP      10.99.114.214    <none>        443/TCP,15014/TCP,9901/TCP,15019/TCP                                                                                         29s
istio-ingressgateway     LoadBalancer   10.105.123.98    localhost     15020:31775/TCP,80:30650/TCP,443:30477/TCP,15029:30994/TCP,15030:31034/TCP,15031:30988/TCP,15032:31964/TCP,15443:32215/TCP   22s
istio-pilot              ClusterIP      10.98.128.83     <none>        15010/TCP,15011/TCP,8080/TCP,15014/TCP                                                                                       21s
istio-policy             ClusterIP      10.107.51.19     <none>        9091/TCP,15004/TCP,15014/TCP                                                                                                 22s
istio-sidecar-injector   ClusterIP      10.109.15.221    <none>        443/TCP                                                                                                                      27s
istio-telemetry          ClusterIP      10.96.183.200    <none>        9091/TCP,15004/TCP,15014/TCP,42422/TCP                                                                                       20s
jaeger-agent             ClusterIP      None             <none>        5775/UDP,6831/UDP,6832/UDP                                                                                                   32s
jaeger-collector         ClusterIP      10.101.226.64    <none>        14267/TCP,14268/TCP,14250/TCP                                                                                                31s
jaeger-query             ClusterIP      10.110.178.167   <none>        16686/TCP                                                                                                                    30s
kiali                    ClusterIP      10.99.0.175      <none>        20001/TCP                                                                                                                    27s
prometheus               ClusterIP      10.105.9.91      <none>        9090/TCP                                                                                                                     30s
tracing                  ClusterIP      10.100.76.1      <none>        80/TCP                                                                                                                       28s
zipkin                   ClusterIP      10.104.158.184   <none>        9411/TCP 








--------

Determining the ingress IP and ports
 

örnekte aşağıdaki gibi ip ve portu export etmemiz isteniyor. 

 kubectl get svc istio-ingressgateway -n istio-system

NAME                   TYPE           CLUSTER-IP       EXTERNAL-IP     PORT(S)                                      AGE
istio-ingressgateway   LoadBalancer   172.21.109.129   130.211.10.121  80:31380/TCP,443:31390/TCP,31400:31400/TCP   17h

sitedeki örnekte external ip miz localhost 

$ export INGRESS_HOST=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}')

$ export INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="http2")].port}')


ip ve port u export et diyor. 

bu aşamada localhostu export edemiyor. 

portu da yanlış export ediyor. 


daha doğrusu başka bir http2 name indeki nodeportu export ediyor. 

$istio-1.4.3 hus$  kubectl -n istio-system describe service istio-ingressgateway

dedikten sonra http2 portu alıp export edebiliriz.



---


kubectl logs  -n istio-system istio-pilot-67dfd7bb44-lnc7x


pilottaki logları getirir. 

curl yapıp buraya baktım

-----

istio ns içindeki podları getir 
kubectl get pods -n istio-system

 istioctl proxy-status

 NAME                                                   CDS        LDS        EDS        RDS          PILOT                            VERSION
curl-6bf6db5c4f-6hf8r.default                          SYNCED     SYNCED     SYNCED     SYNCED       istio-pilot-67dfd7bb44-lnc7x     1.4.3
hostnames-v1-7f54d4cb69-wh27f.default                  SYNCED     SYNCED     SYNCED     SYNCED       istio-pilot-67dfd7bb44-lnc7x     1.4.3
istio-egressgateway-65d6fdc8d8-znz4x.istio-system      SYNCED     SYNCED     SYNCED     NOT SENT     istio-pilot-67dfd7bb44-lnc7x     1.4.3
istio-ingressgateway-5d74ffc456-z7zg4.istio-system     SYNCED     SYNCED     SYNCED     SYNCED       istio-pilot-67dfd7bb44-lnc7x     1.4.3

 huseyin:istio-1.4.3 $ istioctl proxy-config cluster -n istio-system hostnames-v1-7f54d4cb69-wh27f.default



----

curl attık ne oluyor anlamadık hemen 

$ kubectl logs PODNAME -c istio-proxy -n NAMESPACE

kubectl logs istio-ingressgateway-5d74ffc456-z7zg4  -c istio-proxy -n istio-system --since=1m

