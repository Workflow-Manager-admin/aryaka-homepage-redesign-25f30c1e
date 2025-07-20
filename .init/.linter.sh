#!/bin/bash
cd /home/kavia/workspace/code-generation/aryaka-homepage-redesign-25f30c1e/homepage_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

