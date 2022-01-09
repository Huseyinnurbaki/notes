
### Resources
- https://github.com/strimzi/strimzi-kafka-operator/tree/main/helm-charts/helm3/strimzi-kafka-operator
- https://github.com/strimzi/strimzi-kafka-operator/blob/main/examples/kafka/kafka-persistent.yaml
- https://strimzi.io/docs/operators/latest/using.html#assembly-deployment-configuration-str

### Additional Resources

- https://developers.redhat.com/blog/2020/08/14/introduction-to-strimzi-apache-kafka-on-kubernetes-kubecon-europe-2020#how_does_strimzi_work_  
---

helm install strimzi-kafka strimzi/strimzi-kafka-operator --version 0.20.1 -n kafka-dev
k apply -f kafka-cluster.yaml

### Attention

This is the same version with the dev-cluster. This is deprecated. Needs to be updated before k8s_1.22