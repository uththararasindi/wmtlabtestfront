# Item Manager Frontend

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update `VITE_API_URL` if your backend runs on a different port

3. Start the frontend:
   ```
   npm run dev
   ```

The app will run on `http://localhost:5173`

## For Deployment

Update the `VITE_API_URL` in your `.env` file to point to your deployed backend URL before building:
```
VITE_API_URL=https://your-backend-url.onrender.com/api
```

Then build:
```
npm run build
```
