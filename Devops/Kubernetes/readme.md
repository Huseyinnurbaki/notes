
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


