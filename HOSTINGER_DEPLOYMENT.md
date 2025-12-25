# Hostinger Deployment Guide for DCSecurite

This guide outlines the steps to deploy your React Frontend and Laravel Backend to Hostinger.

## Prerequisites

1.  **Hostinger Account** with a domain (e.g., `yourdomain.com`).
2.  **Access to File Manager** or ssh.
3.  **Database** created in Hostinger.

---

## Part 1: Database Setup

1.  **Create Database**:
    *   Log in to Hostinger hPanel.
    *   Go to **Databases** -> **MySQL Databases**.
    *   Create a new database. Note down the **Database Name**, **Username**, and **Password**.

2.  **Import Data**:
    *   Export your local database to a `.sql` file if you have local data you want to keep.
    *   In Hostinger, open **phpMyAdmin** for your new database.
    *   Import the `.sql` file (or just run the migrations later via SSH).

---

## Part 2: Backend Deployment (Laravel)

We recommend hosting the backend on a subdomain, e.g., `api.yourdomain.com`.

1.  **Create Subdomain**:
    *   Go to **Domains** -> **Subdomains**.
    *   Create a subdomain named `api`.
    *   This will create a folder: `domains/yourdomain.com/public_html/api` (or similar).

2.  **Prepare Files**:
    *   On your local machine, navigate to the `backend` folder.
    *   Run `composer install --optimize-autoloader --no-dev`.
    *   Compress the entire `backend` folder into a ZIP file (e.g., `backend.zip`).
    *   **Exclude** `node_modules` if it exists. Include `vendor` if you cannot run composer on the server, but it's better to run composer on the server.

3.  **Upload**:
    *   Upload `backend.zip` to your subdomain folder (`public_html/api`).
    *   Extract it.
    *   **Important**: Ensure the contents of `backend/public` are directly in `public_html/api` OR point your subdomain's "Document Root" to `.../api/public`.
    *   *Standard Shared Hosting Method*:
        1.  Move all files from `backend/` to a non-public folder (e.g. `home/u123/domains/yourdomain.com/laravel_core`).
        2.  Move `backend/public/*` to `public_html/api/`.
        3.  Edit `public_html/api/index.php` to point to the correct `autoload.php` and `app.php` in the `laravel_core` folder.

4.  **Configure Environment**:
    *   Rename `.env.example` to `.env`.
    *   Edit `.env`:
        ```ini
        APP_URL=https://api.yourdomain.com
        DB_CONNECTION=mysql
        DB_HOST=127.0.0.1
        DB_PORT=3306
        DB_DATABASE=u123456_detail_here
        DB_USERNAME=u123456_user_here
        DB_PASSWORD="your_password" # Ensure double quotes if password has special chars
        APP_ENV=production
        APP_DEBUG=false
        ```
    *   **APP_KEY**: Ensure `APP_KEY` is set.
    *   **Storage**: Ensure `FILESYSTEM_DISK=public`.
    *   **CORS**: Update `SANCTUM_STATEFUL_DOMAINS` and `CORS_ALLOWED_ORIGINS` to include your domain.
    *   Run `php artisan key:generate` (via SSH) or copy your local key.
    ```bash
    # On Hostinger SSH
    php artisan migrate --force
    php artisan config:cache
    php artisan route:cache
    ```

---

## Part 3: Frontend Deployment (React)

    *   We have updated `src/config.ts` to use:
        ```typescript
        export const API_BASE_URL = "https://orchid-alligator-505856.hostingersite.com/api/public";
        ```
    *   **All components** (Contact, Events, EagloAI, Settings, etc.) have been refactored to use this constant.

2.  **Build**:
    *   Run `npm run build` locally. (**We are running this for you now**).
    *   This creates a `build` folder.


3.  **Upload**:
    *   Upload the **contents** of the `build` folder to your main domain's `public_html` folder.
    *   You should see `index.html` directly in `public_html`.

4.  **Routing Fix**:
    *   If you refresh a page and get a 404, you need an `.htaccess` file in `public_html` to handle React Router:
        ```apache
        <IfModule mod_rewrite.c>
          RewriteEngine On
          RewriteBase /
          RewriteRule ^index\.html$ - [L]
          RewriteCond %{REQUEST_FILENAME} !-f
          RewriteCond %{REQUEST_FILENAME} !-d
          RewriteRule . /index.html [L]
        </IfModule>
        ```

---

## Part 4: Final Checks

1.  Visit `https://api.yourdomain.com/up` (if configured) or just test an API endpoint.
2.  Visit `https://yourdomain.com`.
3.  Try logging in to ensure Frontend talks to Backend correctly.
