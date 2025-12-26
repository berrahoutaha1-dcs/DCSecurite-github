#!/bin/bash

echo "Starting Laravel deployment..."

# Pull latest changes from GitHub
git pull origin main

# Clear and cache Laravel configs
php artisan config:clear
php artisan config:cache
php artisan route:clear
php artisan cache:clear

echo "Deployment finished! ✅"
