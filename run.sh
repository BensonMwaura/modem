#!bin/bash
PATH=$PATH:$(bash bin)
set -x

# Production Build
ng build --prod

# Server render
cd dist
list-server
