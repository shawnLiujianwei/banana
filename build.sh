#!/usr/bin/env bash
rm -rf build && mkdir -p build
cp  docker/* build/
cp -r src/ build/src
cd build && docker-compose build
