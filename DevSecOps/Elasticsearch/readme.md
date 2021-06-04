# EFK Stack (Bitnami)

https://docs.bitnami.com/tutorials/integrate-logging-kubernetes-kibana-elasticsearch-fluentd/
https://github.com/bitnami/charts/tree/master/bitnami/kibana

> Link is a little bit outdated. 
## Steps:

### Elasticsearch

```console
$helm install elasticsearch bitnami/elasticsearch


  Elasticsearch can be accessed within the cluster on port 9200 at elasticsearch-coordinating-only.elasticsearch.svc.cluster.local

  To access from outside the cluster execute the following commands:

    kubectl port-forward --namespace elasticsearch svc/elasticsearch-coordinating-only 9200:9200 &
    curl http://127.0.0.1:9200/
```


## 

kubectl create ns elasticsearch
### Kibana

```console
helm install kibana bitnami/kibana \
  --set elasticsearch.enabled=false \
  --set elasticsearch.hosts[0]=elasticsearch-coordinating-only.elasticsearch.svc.cluster.local \
  --set elasticsearch.port=9200 \
  --set service.type=LoadBalancer
```

> Tip: Fluentd also uses lasticsearch-coordinating-only.elasticsearch.svc.cluster.local

```bash
$kubectl get svc kibana

NAME                              TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)             AGE
elasticsearch-coordinating-only   ClusterIP      10.105.81.18     <none>        9200/TCP,9300/TCP   18m
elasticsearch-data                ClusterIP      10.109.207.65    <none>        9200/TCP,9300/TCP   18m
elasticsearch-master              ClusterIP      10.98.113.156    <none>        9200/TCP,9300/TCP   18m
kibana                            LoadBalancer   10.102.127.106   localhost     5601:31224/TCP      28s
```
go to http://<Kibana-EXTERNAL-IP>:<PORT>

See Kibana Dashboard

### Fluentd


- Update namespace inside apache-log-parser.yaml. Initial yaml uses "default" namepace.

```yaml
...
   <match **>
      @type forward
      <server>
        host fluentd-0.fluentd-headless.elasticsearch.svc.cluster.local
        port 24224
      </server>
...
```





```console
kubectl apply -f tmp/elasticsearch-output.yaml
kubectl apply -f tmp/apache-log-parser.yaml
```

```console
helm install fluentd bitnami/fluentd \
  --set aggregator.configMap=elasticsearch-output \
  --set forwarder.configMap=apache-log-parser \
  --set aggregator.extraEnv[0].name=ELASTICSEARCH_HOST \
  --set aggregator.extraEnv[0].value=elasticsearch-coordinating-only.elasticsearch.svc.cluster.local \
  --set aggregator.extraEnv[1].name=ELASTICSEARCH_PORT \
  --set-string aggregator.extraEnv[1].value=9200 \
  --set forwarder.extraEnv[0].name=FLUENTD_DAEMON_USER \
  --set forwarder.extraEnv[0].value=root \
  --set forwarder.extraEnv[1].name=FLUENTD_DAEMON_GROUP \
  --set forwarder.extraEnv[1].value=root 
```

> The ELASTICSEARCH_HOST, ELASTICSEARCH_PORT, FLUENTD_DAEMON_USER and FLUENTD_DAEMON_GROUP values in the previous command are not placeholders and should not be replaced.

- Verify installation

```console
$ kubectl get all -l "app.kubernetes.io/name=fluentd,app.kubernetes.io/instance=fluentd"
```

### TEST

```console
$ helm install wordpress bitnami/wordpress
```

- Browse to the Kibana dashboard and click the "Management" icon in the left navigation bar.
- Select the "Index Patterns" menu item and click the "Create index pattern" button
- Define a new index pattern named *logstash-**. Confirm that there is at least one index matching this patter and click the "Next step" button.
- Select @timestamp as the time filter field name. Click "Create index pattern".
- Click the "Discover" icon in the left navigation bar.
- Confirm that you see log data from the WordPress container, as shown below

> wordpress installation require much memory, therefore some pod may get evicted. After deployment is completed, check your pods.
> or use more straightforward application instead of wordpress.