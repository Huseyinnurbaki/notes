### Installation


```console
helm install -f ./Installation/Gitlab/values.yaml gitlab gitlab/gitlab
```


## Initial Root pwd 

```console
kubectl get secret gitlab-gitlab-initial-root-password -ojsonpath='{.data.password}' | base64 --decode ; echo
```


## Useful Links

- [Gitlab Cloud Native Installation/Helm](https://docs.gitlab.com/charts/)
- [Gitlab Charts](https://gitlab.com/gitlab-org/charts/gitlab)
- [Current Chart -> 5.4.0](https://gitlab.com/gitlab-org/charts/gitlab/-/blob/v5.4.0/values.yaml)
- [Timezones](https://gist.github.com/adamgen/3f2c30361296bbb45ada43d83c1ac4e5)

## Troubleshooting

- 422 The Change You Requested Was Rejected
100% https issue. 


---

# local installation w k8s cluster

signin -> gitlab-webservice

skip ingress

k port-forward pod/gitlab-webservice-default-1234323 3333:8181
 ngrok http -bind-tls=true localhost:3333

 


