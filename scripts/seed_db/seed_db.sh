#!/usr/bin/env bash

#mysql -u root Josh_Z < $(dirname $0)/truncate_data.sql;
mysql -u root Josh_Z < `$(dirname $0)`/seed_data.sql;