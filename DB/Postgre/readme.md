# postgre client

kubectl run postgresql-postgresql-client --namespace test --image bitnami/postgresql --env POSTGRESQL_PASSWORD=asd 

kubectl exec ...


psql -h <host> -U postgres -p 5432


psql -h postgre-postgresql -U postgres -p 5432



CREATE DATABASE myapp;
CREATE USER myappadmin WITH ENCRYPTED PASSWORD '123';
GRANT ALL PRIVILEGES ON DATABASE myapp TO myappadmin;


\connect myapp myappadmin

