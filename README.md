# Claro OTT APIs

A Node.js Express API with MongoDB integration that implements four endpoints: api/metadata, api/asset, nav/data, and user/startheaderinfo.

## Features

- Express server with proper middleware setup
- MongoDB connection with Mongoose
- JWT authentication
- Four API endpoints with mock data
- Error handling middleware
- Proper folder structure

## API Endpoints

### Metadata
- `GET /api/metadata` - Get all metadata
- `GET /api/metadata/:id` - Get metadata by ID

### Asset
- `GET /api/asset` - Get all assets
- `GET /api/asset/:id` - Get asset by ID

### Navigation
- `GET /nav/data` - Get navigation data

### User
- `POST /user/register` - Register a new user
- `POST /user/login` - Login user
- `GET /user/startheaderinfo` - Get user header info (requires authentication)

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with the following variables:
   ```
   NODE_ENV=development
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/claro-ott-api
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=30d
   ```
4. Run the server: `npm run dev`

## Authentication

The API uses JWT for authentication. To access protected routes, include a Bearer token in the Authorization header:

```
Authorization: Bearer <token>
```

## Error Handling

The API includes consistent error handling with appropriate status codes and error messages.
