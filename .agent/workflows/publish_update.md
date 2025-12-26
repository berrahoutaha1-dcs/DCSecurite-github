---
description: Permanent rules and workflow for publishing updates to the production environment (Hostinger).
---

# Permanent Auto-Publish Rule — Updated Files Only

This workflow applies to **every** request to publish, deploy, or update the project on the production environment.

## 1. Safety Rules (DO NOT TOUCH)

**ABSOLUTELY PROHIBITED**: Do not modify, replace, or upload the following files unless explicitly and specifically instructed by the USER to do so for that specific file.

- [ ] `.env` (or any environment configuration)
- [ ] `public_html/` core configuration files (e.g. `index.php` entry point logic if established)
- [ ] `.htaccess`
- [ ] `/vendor` (managed by composer on server)
- [ ] `/node_modules` (managed by npm on server)
- [ ] `/storage/logs`
- [ ] `/storage/framework/sessions`
- [ ] `/storage/framework/cache`
- [ ] `/storage/framework/views/*.php`

## 2. Allowed Scope

Publishing is limited to **essential updates only**:

- **Backend Logic**: `backend/app/`, `backend/routes/`, `backend/database/migrations/`
- **Frontend Source**: `src/` (Components, Pages, etc.)
- **Frontend Build**: `dist/` or `build/` (Generated artifacts)
- **Resources**: `backend/resources/views/`

## 3. Deployment Workflow

1.  **Analyze Changes**: Identify exactly which files have changed since the last deployment.
2.  **Filter**: Remove any files from the list that violate Rule #1.
3.  **Prepare**:
    - If Frontend changed: Run `npm run build` locally.
    - If Backend changed: Prepare specific files for upload/push.
4.  **Confirm**: Before executing the final push/upload command that affects production, verify no sensitive files are included.

## 4. Mandatory Confirmation

After every deployment command or preparation step, you must output:
> "✅ Deployment Prepared - Sensitive Files Successfully Excluded."

