# Deployment Guide for DevEra

This guide will help you deploy both the Frontend and Backend of the DevEra application.

## Prerequisites

- Node.js (v16 or higher)
- MongoDB database (local or cloud like MongoDB Atlas)
- Git repository
- Accounts on deployment platforms (Vercel for frontend, Railway/Render for backend)

## Environment Variables

### Backend Environment Variables

Create a `.env` file in the `backend` folder with the following variables:

```env
# MongoDB Connection
MONGODB_URL=mongodb://localhost:27017
# For production: mongodb+srv://username:password@cluster.mongodb.net

# Server Configuration
PORT=8000

# CORS Configuration
# Frontend URL - Update this with your deployed frontend URL
CORS_ORIGIN=http://localhost:3000

# JWT Secrets (Generate strong random strings)
ACCESS_TOKEN_SECRET=your_access_token_secret_here
ACESS_TOKEN_EXPIN=15d
REFRESH_TOKEN_SECRET=your_refresh_token_secret_here
REFRESH_TOKEN_EXPIN=30d

# Email Configuration (Optional - for OTP)
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password_here
```

### Frontend Environment Variables

Create a `.env` file in the `Frontend` folder with the following variables:

```env
# API Base URL
# For development: http://localhost:8000
# For production: Update with your deployed backend URL
REACT_APP_BASE_URL=http://localhost:8000
```

## Backend Deployment

### Option 1: Railway Deployment

1. **Install Railway CLI** (optional):
   ```bash
   npm i -g @railway/cli
   ```

2. **Login to Railway**:
   ```bash
   railway login
   ```

3. **Initialize Railway in backend folder**:
   ```bash
   cd backend
   railway init
   ```

4. **Set Environment Variables**:
   - Go to your Railway project dashboard
   - Navigate to Variables tab
   - Add all environment variables from the backend `.env` file

5. **Deploy**:
   ```bash
   railway up
   ```

   Or connect your GitHub repository to Railway for automatic deployments.

### Option 2: Render Deployment

1. **Create a new Web Service** on Render:
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

2. **Configure the service**:
   - **Name**: devera-backend
   - **Root Directory**: backend
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

3. **Set Environment Variables**:
   - In the Render dashboard, go to Environment tab
   - Add all environment variables from the backend `.env` file
   - **Important**: Update `CORS_ORIGIN` with your frontend URL

4. **Deploy**: Render will automatically deploy on every push to your main branch

### Option 3: Heroku Deployment

1. **Install Heroku CLI**:
   ```bash
   npm install -g heroku
   ```

2. **Login to Heroku**:
   ```bash
   heroku login
   ```

3. **Create Heroku App**:
   ```bash
   cd backend
   heroku create devera-backend
   ```

4. **Set Environment Variables**:
   ```bash
   heroku config:set MONGODB_URL=your_mongodb_url
   heroku config:set PORT=8000
   heroku config:set CORS_ORIGIN=your_frontend_url
   heroku config:set ACCESS_TOKEN_SECRET=your_secret
   heroku config:set ACESS_TOKEN_EXPIN=15d
   heroku config:set REFRESH_TOKEN_SECRET=your_secret
   heroku config:set REFRESH_TOKEN_EXPIN=30d
   ```

5. **Deploy**:
   ```bash
   git push heroku main
   ```

## Frontend Deployment

### Vercel Deployment (Recommended)

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via CLI**:
   ```bash
   cd Frontend
   vercel
   ```

3. **Or Deploy via GitHub**:
   - Go to [Vercel Dashboard](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - **Root Directory**: Frontend
   - **Build Command**: `npm run build`
   - **Output Directory**: build

4. **Set Environment Variables**:
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add `REACT_APP_BASE_URL` with your deployed backend URL
   - Example: `https://your-backend.railway.app` or `https://your-backend.onrender.com`

5. **Redeploy** after setting environment variables

### Netlify Deployment

1. **Install Netlify CLI** (optional):
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy via CLI**:
   ```bash
   cd Frontend
   netlify deploy --prod
   ```

3. **Or Deploy via GitHub**:
   - Go to [Netlify Dashboard](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - **Base directory**: Frontend
   - **Build command**: `npm run build`
   - **Publish directory**: Frontend/build

4. **Set Environment Variables**:
   - Go to Site settings → Environment variables
   - Add `REACT_APP_BASE_URL` with your deployed backend URL

## Post-Deployment Checklist

### Backend
- [ ] Verify backend is running (check health endpoint: `/api/v1/healthcheck`)
- [ ] Update `CORS_ORIGIN` in backend environment variables with frontend URL
- [ ] Test API endpoints
- [ ] Verify MongoDB connection

### Frontend
- [ ] Update `REACT_APP_BASE_URL` in frontend environment variables with backend URL
- [ ] Rebuild and redeploy frontend after updating environment variables
- [ ] Test authentication flow
- [ ] Verify API calls are working

## Important Notes

1. **CORS Configuration**: Make sure the `CORS_ORIGIN` in backend matches your frontend URL exactly (including protocol: `https://`)

2. **Environment Variables**: Never commit `.env` files to Git. They are already in `.gitignore`

3. **MongoDB Atlas**: For production, use MongoDB Atlas (cloud) instead of local MongoDB

4. **HTTPS**: Both frontend and backend should use HTTPS in production

5. **Build Process**: Frontend needs to be rebuilt after changing environment variables

## Troubleshooting

### Backend Issues
- **Port Error**: Make sure `PORT` environment variable is set (most platforms auto-assign)
- **MongoDB Connection**: Verify `MONGODB_URL` is correct and database is accessible
- **CORS Errors**: Check `CORS_ORIGIN` matches frontend URL exactly

### Frontend Issues
- **API Calls Failing**: Verify `REACT_APP_BASE_URL` is set correctly
- **Build Errors**: Check Node.js version compatibility
- **Environment Variables Not Working**: Rebuild the app after adding new variables

## Support

For issues or questions, check the logs in your deployment platform's dashboard.

