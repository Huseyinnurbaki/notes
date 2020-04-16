# debug/release frameworku aynı branchte build konfigurasyonuna göre seçme

1) build hases kısmına yeni ir script ekledim
2) ios dizinine Environments klasoru ekledim. İçinde sdk ve ortam (uat/prod) klasörleri var. 
3)yine ios dizinine some klasoru ekledim. İlk başta debug frameworkunu içine xcode dan ekledim. 
!!! Eklerken xcode da sağ klik , add files to ..app, açılan pencerede Destination copy items if needed seçili OLMAMALI, 
added folders kısmı create group reference olacak. Yeni bir şey eklenmeyecek. add to targets kısmında target uygulama seçili olacak. 
 Amacımız some klasöründe ne varsa onu frameworks folderı altına eşleştirmek. frameworks kısmının harici bir yerde framework olursa appp stoe yüklemeye izin vermiyor. 
 Environments klasörünü de yukaıdaki gibi xcode a ekledik. some klasorunu eklemedik. copy bundle resources kısmındda environments ve some klasoru olmamalı. Bu sefer de muhtemelen multiple commands produce hatası verecek. 

 build phases scripti aşağıdaki gibi. Bir de frameforks dizinine some klasöründen framework ekleyince, build phases da son adımlardan biri olarak embed frmeworks adımına destination frameworks, diyip + ya basarak some kutuphanesini refere eden some framewrokunu ekledik. Fazladan build konfigurasyonlarımız varsa debug/release header search pathi güncellenmşiş olacak. Oradaki some pathini diğer konfigürasyonlar için de eklersek her şey harika olacak. 

```sh

DEBUG_SOME_FRAMEWORK=${PROJECT_DIR}/Environments/sdk/debug/Some.framework
UAT_SOME_APP_CONFIG=${PROJECT_DIR}/Environments/uat/assets/app_config.xml
RELEASE_SOME_FRAMEWORK=${PROJECT_DIR}/Environments/sdk/release/Some.framework
PROD_SOME_APP_CONFIG=${PROJECT_DIR}/Environments/prod/assets/app_config.xml

if [ ${PLATFORM_NAME} = "iphonesimulator" ]; then
echo  "copying for simulator"
cp -R -f -v ${DEBUG_SOME_FRAMEWORK} ${PROJECT_DIR}/some
echo  "copied for simulator"
else
echo  "copying for real device"
 cp -R -f -v ${RELEASE_SOME_FRAMEWORK} ${PROJECT_DIR}/some
echo  "copied for real device"
fi

if [ "${CONFIGURATION}" == "Debug" ] || [ "${CONFIGURATION}" == "Release" ]; then
yes | cp -rf ${UAT_SOME_APP_CONFIG} ${PROJECT_DIR}/assets
else
yes | cp -rf ${PROD_SOME_APP_CONFIG} ${PROJECT_DIR}/assets

fi

```