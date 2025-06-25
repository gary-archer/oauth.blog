#!/bin/bash

cd "$(dirname "${BASH_SOURCE[0]}")"

#
# Install dependencies if required
#
npm install
if [ $? -ne 0 ]; then
  read -n 1
  exit 1
fi

#
# Run the web host
#
npm start
read -n 1
