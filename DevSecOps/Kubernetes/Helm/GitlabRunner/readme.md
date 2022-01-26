

## Installation


```bash
helm repo add gitlab https://charts.gitlab.io 
helm install -f ./values.yaml company-devops gitlab/gitlab-runner --version=0.35.3
```

--version is potional

Upgrade

helm upgrade -f ./values.yaml company-devops gitlab/gitlab-runner --version=0.35.3


##  Resources

- <https://docs.gitlab.com/runner/install/kubernetes.html#configuring-gitlab-runner-using-the-helm-chart>

- <https://gitlab.com/gitlab-org/charts/gitlab-runner/-/blob/0-35-0-stable/values.yaml>

