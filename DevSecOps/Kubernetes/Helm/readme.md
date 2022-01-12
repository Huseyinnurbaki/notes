## Upgrade with current values

```console
$ helm upgrade --reuse-values ingress-nginx ingress-nginx/ingress-nginx
```

## Get Current values
```console
$ helm get values  nginx-ingress
```

USER-SUPPLIED VALUES:
controller:
  nodeSelector:
    beta.kubernetes.io/os: linux
  replicaCount: 2
  service:
    annotations:
      service.beta.kubernetes.io/azure-dns-label-name: some-ns-api
    loadBalancerIP: x.x.x.x
defaultBackend:
  nodeSelector:
    beta.kubernetes.io/os: linux


helm search repo  ingress-nginx/ingress-nginx

ingress-nginx/ingress-nginx	4.0.13       	1.1.0      	Ingress controller for Kubernetes using NGINX a...

