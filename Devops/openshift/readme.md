 
 # crc
 
crc setup
crc start
crc oc-env
eval $(crc oc-env)
oc login -u kubeadmin -p BdTY8-Vra64-gD3cI-dAPS6 https://api.crc.testing:6443
crc console



loglarda 
oc login -u kubeadmin -p BdTY8-Vra64-gD3cI-dAPS6 https://api.crc.testing:6443

oradan şifreyi alabiliyoruz



-------


oc new-project dev --display-name="hello-world - Dev"

oc new-app hus/hello-world -n dev

 oc status 
 outputu koy

 -create route
 -ta da hello geldi

oc get is

oc describe imagestream hello-world -n=dev | grep sha256 

çıkandan hello-world@sha yı al aşağıda kullan


 oc tag hello-world@sha256:e8fe69a8bb3f6dd1160f3f24162494dd664cdf8a04c5e9946eb42d8eda851e8b dev/hello-world:promoteToTest 
oc get istag -n dev

2 adet tag var bunu yazdır
oc new-project test --display-name="hello-world - Test"


oc policy add-role-to-group system:image-puller system:serviceaccounts:test -n dev


oc new-app dev/hello-world:promoteToTest

 oc status 
 outputu koy

 create route 



or if exists 

 oc rollout latest dc/hello-world -n test


 imagestream dev to test
 