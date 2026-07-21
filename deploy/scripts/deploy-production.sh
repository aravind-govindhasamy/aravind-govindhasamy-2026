#!/usr/bin/env bash

set -euo pipefail

APP_DIR="${APP_DIR:-/srv/aravind-portfolio/app}"
SERVICE_NAME="${SERVICE_NAME:-aravind-portfolio}"
BRANCH="${BRANCH:-main}"

cd "$APP_DIR"

git fetch origin "$BRANCH"
git checkout "$BRANCH"
git pull --ff-only origin "$BRANCH"

corepack enable
pnpm install --frozen-lockfile
pnpm run lint
pnpm run build:production

sudo systemctl restart "$SERVICE_NAME"
sudo systemctl is-active --quiet "$SERVICE_NAME"

echo "Aravind portfolio deployed successfully."
