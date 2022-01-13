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

## Upgrading ingress


    Error: UPGRADE FAILED: rendered manifests contain a resource that already exists. Unable to continue with update: PodDisruptionBudget "nginx-ingress-ingress-nginx-controller" in namespace "ingress-basic" exists and cannot be imported into the current release: invalid ownership metadata; annotation validation error: missing key "meta.helm.sh/release-name": must be set to "nginx-ingress"; annotation validation error: missing key "meta.helm.sh/release-namespace": must be set to "ingress-basic"



meta.helm.sh/release-name: nginx-ingress
meta.helm.sh/release-namespace: ingress-basic

inster these to conteroller 