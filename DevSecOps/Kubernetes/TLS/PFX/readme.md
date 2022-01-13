# convert .pfx to kubernetes.io/tls


https://dzone.com/articles/extract-crt-amp-key-file-from-pfx-file-in-a-minute
https://www.xolphin.com/support/Certificate_conversions/Convert_pfx_file_to_pem_file
https://kubernetes.io/docs/concepts/configuration/secret/#tls-secrets


# create tls secret k8s


kubectl create secret tls nameof-tls \
  --cert=path_to.crt \
  --key=path_to_unencrypted.pfx

# verify ssl .pem & key

openssl x509 -in cert.pem -noout -pubkey

openssl rsa -in some.key -pubout


output should match each other

