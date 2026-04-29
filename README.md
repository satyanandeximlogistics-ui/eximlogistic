# Frontend / Backend Split

This repo now has separate deploy targets:

- `frontend/` for the Vite React site
- `backend/` for the Express API

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Build:

```bash
cd frontend
npm run build
```

## Backend

```bash
cd backend
npm install
npm run dev
```

Health check:

- `GET /health`

Inquiry endpoint:

- `POST /api/contact`

## Deployment

- Deploy `frontend/` as the website.
- Deploy `backend/` as the API service.
- Point frontend forms and product links at the backend URLs when you are ready to connect them.
