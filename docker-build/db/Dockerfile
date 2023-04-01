FROM postgres:11
ADD ./backup/db-create-script.sql /backup/
WORKDIR /
COPY ./run.sh /docker-entrypoint-initdb.d/run.sh

