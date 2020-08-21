#!/usr/bin/env bash

mysql -u root -e "create database newappdb;"
mysql -u root -e "create user 'josh'@'localhost' identified by 'password';"
mysql -u root -e "GRANT ALL PRIVILEGES ON newappdb.* TO 'josh'@'localhost'";