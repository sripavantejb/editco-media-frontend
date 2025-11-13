# Editco Media Frontend

## Local Environment Variables

Google sign-in and API requests rely on Vite environment variables. These **must** be defined in a `.env` file inside the `frontend/` folder (next to `package.json`):

```
VITE_API_URL=http://localhost:3000
VITE_GOOGLE_CLIENT_ID=394974485913-kt8pjpmc3d06bqm2cg1gbv794n5q6hmq.apps.googleusercontent.com
```

If you already created the file, make sure it is named exactly `.env` (no extra extensions) and that the keys start with `VITE_`. After editing the file, **stop and restart** the Vite dev server (`npm run dev`) so the new values are loaded.

For production deployments, supply the same variables through your hosting provider’s environment settings.
