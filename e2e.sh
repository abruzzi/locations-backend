#!/bin/bash

# update all npm dependencies
npm install

# update all javascript dependencies
bower install

# update all ruby dependency
bundle install

# launch the application
echo "launch the application"
rackup > tmplog 2>&1 &
PID=$!

# wait for it to start up
sleep 5

# run the cucumber features and record the status
cucumber features/ --tags @search
RES=$?

# terminate after cucumber
echo "terminate the application"
kill -9 $PID

# now we know whether the cucumber success or not
exit $RES
