#!/bin/bash

docker run -p 4020:4020 --name svg-service --env-file ./.env  453627713520.dkr.ecr.us-east-2.amazonaws.com/ergonames-svg-service