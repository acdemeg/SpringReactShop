#!/bin/bash
psql -U postgres -c "CREATE DATABASE shop_db  WITH ENCODING 'UTF8'"
psql -U postgres -d shop_db -a -f /backup/db-create-script.sql