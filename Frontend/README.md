# DevEra Frontend

React.js frontend application for DevEra.

## Quick Start

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env` file:
   ```env
   REACT_APP_BASE_URL=http://localhost:8000
   ```

3. Start development server:
   ```bash
   npm start
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Deployment

See [DEPLOYMENT.md](../DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy Options:

- **Vercel** (Recommended): Use `vercel.json` configuration
  - Connect GitHub repository
  - Set `REACT_APP_BASE_URL` environment variable
  - Deploy automatically on push

- **Netlify**: 
  - Connect GitHub repository
  - Build command: `npm run build`
  - Publish directory: `build`
  - Set `REACT_APP_BASE_URL` environment variable

## Environment Variables

- `REACT_APP_BASE_URL` - Backend API URL (required)
  - Development: `http://localhost:8000`
  - Production: Your deployed backend URL (e.g., `https://your-backend.railway.app`)

## Important Notes

1. **Environment Variables**: React requires environment variables to be prefixed with `REACT_APP_`
2. **Rebuild Required**: After changing environment variables, you must rebuild the app
3. **CORS**: Ensure backend `CORS_ORIGIN` includes your frontend URL

## Project Structure

- `/src/components` - React components
- `/src/Context` - React Context providers
- `/src/utils` - Utility functions and API configuration
- `/src/pages` - Page components
- `/public` - Static assets
