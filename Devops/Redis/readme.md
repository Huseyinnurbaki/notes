# redisinsight on k8s

https://docs.redislabs.com/latest/ri/installing/install-k8s/

-----
https://docs.bitnami.com/tutorials/deploy-redis-sentinel-production-cluster/

https://github.com/bitnami/charts/tree/master/bitnami/redis

# Change redis pwd

- helm delete redis -n redis (if presents)
- create secret  (ns: redis & related ns)
- existingSecret: "myredis-secret" <-- secret name
- existingSecretPasswordKey: "redis-password" <-- key inside secret
- helm install redis bitnami/redis --values values-production.yaml -n redis