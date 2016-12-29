#!/usr/bin/env bash


DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
${DIR}/docker_volume_collect.sh > /dev/tcp/hbs.axibase.com/9081
