#!/bin/bash

bundle install
echo "launch the application"
rackup > /dev/null 2>&1 &
PID=$!
sleep 5
cucumber features/
echo "terminate the application"
kill $PID
