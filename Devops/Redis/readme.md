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

-----


# cronjob clean specific cache

apiVersion: batch/v1beta1
kind: CronJob
metadata:
  name: redis-cachekiller
spec:
  schedule: "2 23 * * *"
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: redis-client
            image: docker.io/bitnami/redis:5.0.5-debian-9-r141
            args:
            - '/bin/sh'
            - -c
            - 'redis-cli -h redis-master-service DEL KEYS "*CITIES*"'
          restartPolicy: Never


# https://crontab.guru/#2_23_*_*_*