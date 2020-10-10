
# Deployments vs Replicasets main diffrerence

You cannot rollback replicasets but deployments


# Practical notes

If we are facing resource problem, we can get rid of pods but keep the deployment by updating replica number to 0 in yaml file and apply.


# port-ip bakma


```sh
minikube service redis-svc --format "{{.IP}}"
```

```sh
minikube service redis-svc --format "{{.Port}}"
```



-----



kubectl run curl --image=radial/busyboxplus:curl -i --tty

podlardan curl olanı bul

kubectl attach curl-6bf6db5c4f-6hf8r  -c curl -i -t

nslookup my-nginx
 

 yarattığımız servis için aynı networkte nslook up çaktık. 
 nslookup <servicename>

şimdi curl atabiliriz bulunduğumuz poddan


-----


switch ns without kubens 

```sh
kubectl config set-context --current --namespace=sonarqube
```

current context
```sh
kubectl config current-context 
```


current namespace
```sh
kubectl config view --minify | grep namespace:
```

pod un hashli ismini alma

```sh
kubectl -n istio-system get pod -l app=grafana -o jsonpath='{.items[0].metadata.name}' 
```



---

kill port forwarding

```sh
killall kubectl
```


------



k get po dediğimde host not found için geçici çözğm 


/Users/usr/.kube/config



apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: LS
    server: https://127.0.0.1:6443 // burayı localhost ip si yaptım. 
 ********



------


docker desktop kubernetes starting forever.


rollback to Version 2.0.0.2 (30215)

bu kurulurken clusterı sıfırddan oluşturuyor. 

belki güncellersem düzgün devam eder. ?? 


------


error: SchemaError(io.k8s.api.certificates.v1beta1.CertificateSigningRequestCondition): invalid object doesn't have additional properties

rm /usr/local/bin/kubectl

brew link --overwrite kubernetes-cli


https://stackoverflow.com/questions/55417410/kubernetes-create-deployment-unexpected-schemaerror

------
Services without selectors
Services most commonly abstract access to Kubernetes Pods, but they can also abstract other kinds of backends. For example:

You want to have an external database cluster in production, but in your test environment you use your own databases.
You want to point your Service to a Service in a different Namespace or on another cluster.
You are migrating a workload to Kubernetes. Whilst evaluating the approach, you run only a proportion of your backends in Kubernetes.

https://kubernetes.io/docs/concepts/services-networking/service/


------

golden bug***

openshift code ready containers kurulumundan sonra bilgisayarımda localhost u çözümleyememe durumu başladı. ne emülatorler bulabiliyordu ne de k8s ayağa kalkıyordu. etafından dolanmak için yeniden kurdum dockerla ilgili her şeyi sildim dns ayarı yaptım nafile. minikube kurdum kısmi olarak çalıştı. sonr ayeniden bozuldu. .kube/config dosyasında cluster bilgilerinde server: 
https://kubernetes.docker.internal:6443 bulunuyor. etc/hosts dosyasında biz bu adresi 127.0.0.1 ile eşleştiriyoruz. Sanıyorum crc kurduktan sonra bu durum bozuldu. hosts dosyasını silip yeeniden oluşturmak problemimi çözmedi. ama hosts dosyası düzenlendikten sonra dns cacche ini temizlemek gerekiyormuş. 

işte problemimi çözen o komut:


```sh
$ dscacheutil -flushcache
```
dns cache ini temizliyor macte.

problemin ilk adımları could not resolve kubernetes.docker.internal . şeklinde başladı.
Sonrasında yeniden başlatınca durum çözüldü.


----

port-forward a service 


k port-forward svc/whoami-svc  8000:8000 


----

sh pod e.g. busybox

k run -it   --image=busybox test sh


-----

# calico 

https://www.youtube.com/watch?v=131_TIa_ftI


# accessing private registry


svc account
 secret oluştur https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#add-imagepullsecrets-to-a-service-account


kubectl create secret docker-registry SECRETNAAME --docker-server=<registy> --docker-username=<usernanme> --docker-password=<pwd> --docker-email=<email>


kubectl patch serviceaccount default -p '{"imagePullSecrets": [{"name": "SECRETNAAME"}]}’

----


# get failed pod fail reason

$kubectl describe pods/<podname> | grep ‘Failed'


---

# azure match acr aks
https://docs.microsoft.com/en-us/azure/aks/cluster-container-registry-integration#create-a-new-aks-cluster-with-acr-integration

-----

# ingress ip 

kubectl get ingress --watch

# rollout foır latest tag

kubectl rollout restart deployment/<deployment_name>

# print env variables of a pod

kubectl exec -it <podname> -- sh

$ printenv

$ 