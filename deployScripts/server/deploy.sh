#!/usr/bin/env bash
set -euo pipefail
cd /project
git pull --ff-only
rm -rf .next .turbo out
npm run build
pm2 restart project