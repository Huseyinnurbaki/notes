
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

# copy secret from another ns to another ns
1.14

 kubectl get secret <secretname> --namespace=<source_ns> --export -o yaml | kubectl apply --namespace=<target_ns> -f -


1.18
kubectl get secret <secret-name> --namespace=<source-ns> -o yaml | sed 's/namespace: <source-ns>/namespace: <destination-ns>/g' | kubectl create -f -  

1.22

kubectl get secret redis-pwd --namespace=redis -o yaml | sed 's/namespace: .*/namespace: tmpns/' | kubectl apply -f -

# create secret

kubectl create secret  generic some-secret \
  --from-literal=keyname='password'


kubectl get secret redis-pwd  -o jsonpath='{.data}'

$echo 'decoded' | base64 --decode

# patch exernal ip
```
kubectl patch svc some-svc -p '{"spec":{"externalIPs":[x.x.x.x"]}}'
```

# access a svc in another ns

<service-name>.<namespace-name>.svc.cluster.local

# decode secret
```bash
~ $kubectl get secrets/some_secret  --template={{.data.keyofthesecret}} | base64 -D
```
# decode secret with - (U+002D)
```bash
~ $ kubectl get secrets/postgre-postgresql  --template='{{index .data "postgresql-password"}}' | base64 -D
```

----

# ingress definition localhost

```
spec:
  tls:
  - hosts:
    - kubernetes.docker.internal
    secretName: somesecret
  rules:
  -  host: kubernetes.docker.internal
     http:
      paths:
      - path: /
        backend:
          serviceName: someapp
          servicePort: 8000
```


# copy file from desktop to a directory inside pod


```bash
kubectl cp ./file.ext my-pod-5d6786bf4-549j9:/usr/share/nginx/html/file.ext
```

# Cron Job concurency

apiVersion: batch/v1beta1
kind: CronJob
metadata:
  namespace: my-ns
  name: my-cj
spec:
  schedule: "*/2 * * * *"
  successfulJobsHistoryLimit: 1 # shows 1 succeeded max
  failedJobsHistoryLimit: 1  # shows 1 failed max
  startingDeadlineSeconds: 600 # after 100 failure, cj will stop, this limits the window. Requires 100 failures in 600 seconds to stop cj
  concurrencyPolicy: Forbid # prevents concurrent jobs. (allow-replace options are valid)
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: my-cj
            image: some-image
            resources:
              requests:
                memory: "128Mi"
                cpu: "500m"
              limits:
                memory: "256Mi"
                cpu: "1G"
            env:
            - name: NODE_ENV
              value: "production"
          restartPolicy: Never


# https://crontab.guru/#2_9,10,11,21,22,23_*_*_*

---

# sclae deployment

 kubectl scale --current-replicas=6 --replicas=8 deployment/dep

 # If the deployment named mysql's current size is 2, scale mysql to 3

 ---

 # rollback deployment 
```bash
 kubectl rollout undo deployment <deployment>
 ```

 #  helm rendered manifests contain a resource that already exists. Unable to continue with install: ClusterRole ...
 helm rendered manifests contain a resource that already exists. Unable to continue with install: ClusterRole "fluentd" in namespace "" exists and cannot be imported into the current release: invalid ownership metadata; annotation validation error: key "meta.helm.sh/release-namespace" must equal "elasticsearch": current value is "elastic"


```console
$ kubectl get clusterrole
$ kubectl get clusterrolebinding
```

I.E.
```console
k delete rolebinding fluentd
k delete clusterrolebinding fluentd
```

----

# cert manager
kubectl describe certificates
kubectl describe cr

----
 
 helm get values akhq

---

# localhost https

```
ngrok http -bind-tls=true localhost:3333
```

---

# Get recently created pod & port-forward note example

export POD_NAME=$(kubectl get pods --namespace logging -l "app.kubernetes.io/name=fluent-bit,app.kubernetes.io/instance=fluent-bit" -o jsonpath="{.items[0].metadata.name}")
echo "curl http://127.0.0.1:2020 for Fluent Bit build information"
kubectl --namespace logging port-forward $POD_NAME 2020:2020


### K8s upgrade notes

Upgrading k8s versions of  4 x 2X nodes are easier compared to 8 x 1X
Azure upgrades deprecated apis/yamls


