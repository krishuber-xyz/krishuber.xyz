#!/bin/sh

npx nuxt generate
surge ./dist/ krishuber.surge.sh
