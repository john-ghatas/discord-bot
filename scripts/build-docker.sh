#!/bin/sh
CONTAINERS=$(docker ps | grep bot:latest | awk '{print $1}')
docker build -t bot:latest .
docker rm $CONTAINERS -f
docker run -d bot:latest