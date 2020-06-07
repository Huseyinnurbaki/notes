https://github.com/kubernetes/kops/blob/master/docs/getting_started/aws.md

# Getting Started with kops on AWS


Start with IAM


aws iam create-group --group-name kops

aws iam attach-group-policy --policy-arn arn:aws:iam::aws:policy/AmazonEC2FullAccess --group-name kops
aws iam attach-group-policy --policy-arn arn:aws:iam::aws:policy/AmazonRoute53FullAccess --group-name kops
aws iam attach-group-policy --policy-arn arn:aws:iam::aws:policy/AmazonS3FullAccess --group-name kops
aws iam attach-group-policy --policy-arn arn:aws:iam::aws:policy/IAMFullAccess --group-name kops
aws iam attach-group-policy --policy-arn arn:aws:iam::aws:policy/AmazonVPCFullAccess --group-name kops

aws iam create-user --user-name kops
aws iam add-user-to-group --user-name kops --group-name kops
aws iam create-access-key --user-name kops

> gossip dnskullanılacaksa dns konfigürasyon kısmını atlıyoruz. 

## Cluster State storage

aws s3api create-bucket \
    --bucket prefix-hus-com-state-store \
    --region us-east-1

    aws s3api put-bucket-versioning --bucket prefix-hus-com-state-store  --versioning-configuration Status=Enabled

aws s3api put-bucket-encryption --bucket prefix-hus-com-state-store --server-side-encryption-configuration '{"Rules":[{"ApplyServerSideEncryptionByDefault":{"SSEAlgorithm":"AES256"}}]}'

> Versiyonlamayı enable etmek önemli, yoksa rollback yapılamıyor.
> bucket içinde configler duruyor
> encryprion default yapılmalı zaten

Creating your first cluster tamamlayınca 10 dk civarı nodeları kaldırması sürüyor. 

kops validate cluster komutu ile takip edebiliyoruz durumu. Veya doğru contextteysek kubectl get po da cluster hakkında ipucu verebilir.


-----

# Deleteing cluster

if you delete s3 bucket you cannot delte cluster w using kops.
If done, go to ec2 dashboard.

Delete autoscaling configs.

normally just enter 

  kops delete cluster --name=k8s.cluster.site --yes
see options:
https://github.com/kubernetes/kops/blob/master/docs/cli/kops_delete_cluster.md