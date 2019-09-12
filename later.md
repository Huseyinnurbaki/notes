mysql -h localhost -P 3306 -u root -p 


java -Dserver.port=8082  -Dspring.datasource.url=jdbc:mysql://localhost:3306/cookbook  -jar cloudnative-connections-0.0.1-SNAPSHOT.jar 

java -jar  cloudnative-connectionposts-0.0.1-SNAPSHOT.jar 

-**********




kurulum yaparken gerekl versiyonlar


node v10.15.3
npm  6.4.1
xcode 10.3

-----


npx için

Make sure your app is AndroidX
npm install --save-dev jetifier
npx jetify (may take a while)
npx react-native run-android


-----



iosta farklı config dosyaları için ortak header-bridge kullanırken importlarda sıkıntı varsa

app in header search paths kısmına aşağıdaki değeri ekle:

$(BUILD_DIR)/Release$(EFFECTIVE_PLATFORM_NAME)/include




-----

$(SRCROOT)/
$(inherited) ../node_modules/react-native-camera/ios $(SRCROOT)/../node_modules/react-native-device-info/RNDeviceInfo $(SRCROOT)/../node_modules/react-native-notifications/RNNotifications $(SRCROOT)/../node_modules/react-native-vector-icons/RNVectorIconsManager $(SRCROOT)/../node_modules/react-native-maps/lib/ios/** $(SRCROOT)/../node_modules/react-native-linear-gradient/BVLinearGradient $(SRCROOT)/../node_modules/react-native-background-timer/ios $(SRCROOT)/../node_modules/react-native-fetch-blob/ios/** $(SRCROOT)/../node_modules/appcenter/ios/AppCenterReactNative $(SRCROOT)/../node_modules/appcenter-analytics/ios/AppCenterReactNativeAnalytics $(SRCROOT)/../node_modules/appcenter-crashes/ios/AppCenterReactNativeCrashes $(SRCROOT)/../node_modules/react-native-splash-screen-extended/ios $(SRCROOT)/../node_modules/react-native-permissions/ios/** $(SRCROOT)/../node_modules/react-native-contacts-wrapper-extended/ios/RCTContactsWrapper $(SRCROOT)/../node_modules/react-native-code-push/ios/CodePush/** $(SRCROOT)/../node_modules/react-native-languages/ios $(SRCROOT)/../node_modules/react-native-share-extended/ios $(SRCROOT)/../node_modules/react-native-touch-id-extended $(SRCROOT)/../node_modules/react-native-navigation/ios/** $(SRCROOT)/../node_modules/react-native-exception-handler/ios


$(BUILD_DIR)/Release$(EFFECTIVE_PLATFORM_NAME)/include


