# Ecr 
ecr reposuna image pushlama



sayfaya girince repoda kodları gösteriyor. 

aws cli 2 gerekiyor.


 pushlayabilmek için iam userının buna yetkisi olmalı. ecr:GetAuthorizationToken

 onun yerine AmazonEC2ContainerRegistryFullAccess attach edilebilioyr.


 ----
 cluster ip me erişmek için

 cluster ---> tasks ---> taska tıkla network kısmında pubkic ip var


 ------


 yeni ecs e image çekmek için (tag im latest olduğu için konfigürasyon yapmadan update edince gidip latestı yeniden çekiyor.)
 
 
aws ecs update-service --cluster <cluster name> --service <service name> --force-new-deployment


bu yöntem yeni bir ip atıyor!!

bu yüzden burada kullandığımız containerın network ayarlarına dokunmadıkça (zaten 1 task çalışacak şekilde kullandım,) ip değişecektir. 