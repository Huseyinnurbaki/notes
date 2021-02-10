# convert .pfx to kubernetes.io/tls


https://dzone.com/articles/extract-crt-amp-key-file-from-pfx-file-in-a-minute
https://kubernetes.io/docs/concepts/configuration/secret/#tls-secrets


# create tls secret k8s


kubectl create secret tls tiklagelsin-tls \
  --cert=path_to.crt \
  --key=path_to_unencrypted.pfx

# verify ssl .pem & key

openssl x509 -in cert.pem -noout -pubkey

openssl rsa -in tiklagelsindecrypted.key -pubout


output should match each other