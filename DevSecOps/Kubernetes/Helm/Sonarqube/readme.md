sonarqube 7.9.4-community to 8.5.1-community

helm repo add oteemocharts https://oteemo.github.io/charts
helm delete currentchart (rolling update is not suitable for sq - lots of errror occur )


helm install -f ./values.yaml sonarqube oteemocharts/sonarqube
helm upgrade -f ./values.yaml sonarqube oteemocharts/sonarqube

Then go to http://yourSonarQubeServerURL/setup 

hit update database.

done..
