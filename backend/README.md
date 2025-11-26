# DevEra Backend

Express.js backend server for DevEra application.

## Quick Start

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env` file (see `.env.example` for reference):
   ```env
   MONGODB_URL=mongodb://localhost:27017
   PORT=8000
   CORS_ORIGIN=http://localhost:3000
   ACCESS_TOKEN_SECRET=your_secret
   ACESS_TOKEN_EXPIN=15d
   REFRESH_TOKEN_SECRET=your_secret
   REFRESH_TOKEN_EXPIN=30d
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Start production server:
   ```bash
   npm start
   ```

## Deployment

See [DEPLOYMENT.md](../DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy Options:

- **Railway**: Use `railway.json` configuration
- **Render**: Use `render.yaml` configuration  
- **Heroku**: Use `Procfile`
- **Docker**: Use `Dockerfile`

## Environment Variables

Required environment variables:
- `MONGODB_URL` - MongoDB connection string
- `PORT` - Server port (default: 8000)
- `CORS_ORIGIN` - Frontend URL for CORS
- `ACCESS_TOKEN_SECRET` - JWT access token secret
- `ACESS_TOKEN_EXPIN` - Access token expiration
- `REFRESH_TOKEN_SECRET` - JWT refresh token secret
- `REFRESH_TOKEN_EXPIN` - Refresh token expiration

Optional:
- `EMAIL_USER` - Email for OTP sending
- `EMAIL_PASSWORD` - Email app password

## API Endpoints

- Health Check: `GET /api/v1/healthcheck`
- Auth: `/api/v1/auth/*`
- Reviews: `/api/v1/reviews/*`
- Activity: `/api/v1/activity/*`
- Saved Roadmaps: `/api/v1/saved-roadmap/*`
- Search: `/api/v1/search/*`
- Development: `/api/v1/development/*`
- Profile & Cover: `/api/v1/profileAndCover/*`

