# postgre client

kubectl run postgresql-postgresql-client --namespace test --image bitnami/postgresql --env POSTGRESQL_PASSWORD=asd 

kubectl exec ...


psql -h <host> -U postgres -p 5432


psql -h postgre-postgresql -U postgres -p 5432



CREATE DATABASE myapp;
CREATE USER myappadmin WITH ENCRYPTED PASSWORD '123';
GRANT ALL PRIVILEGES ON DATABASE myapp TO myappadmin;


\connect myapp myappadmin



----

postgres backup restore


docker run -d -e ALLOW_EMPTY_PASSWORD=yes  bitnami/postgresql:12.13.0 

cd tmp
pg_dump -h <host> -U <dbuser> -p 25625 -d defaultdb --schema public --clean -F custom > defaultdb.dump



pg_restore -h <host> -U <dbuser> -p 25625 --schema public -v --data-only --single-transaction -d <dbname> < defaultdb.dump
pg_restore -h <host> -U <dbuser> -p 25625 --schema public --clean -v --single-transaction -d <dbname> < defaultdb.dump




docker cp <containewrid>://tmp/data.dump <local directory>


