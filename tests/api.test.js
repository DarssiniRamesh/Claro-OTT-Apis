const request = require('supertest');
const jwt = require('jsonwebtoken');
const config = require('../src/config/config');

// Base URL for API requests
const baseUrl = 'http://localhost:3000';
const api = request(baseUrl);

// Generate a valid token for testing protected endpoints
const generateTestToken = () => {
  return jwt.sign({ id: '1' }, config.jwtSecret, {
    expiresIn: config.jwtExpiresIn
  });
};

// Test suite for metadata endpoints
describe('Metadata API Endpoints', () => {
  // Test GET /api/metadata
  describe('GET /api/metadata', () => {
    it('should return all metadata items', async () => {
      const response = await api.get('/api/metadata');
      
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.data)).toBe(true);
      expect(response.body.count).toBe(response.body.data.length);
    });
  });

  // Test GET /api/metadata/:id
  describe('GET /api/metadata/:id', () => {
    it('should return a single metadata item by ID', async () => {
      const response = await api.get('/api/metadata/1');
      
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveProperty('id');
      expect(response.body.data).toHaveProperty('title');
    });

    it('should return 404 for non-existent metadata ID', async () => {
      const response = await api.get('/api/metadata/999999');
      
      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
      expect(response.body.message).toContain('not found');
    });
  });
});

// Test suite for asset endpoints
describe('Asset API Endpoints', () => {
  // Test GET /api/asset
  describe('GET /api/asset', () => {
    it('should return all asset items', async () => {
      const response = await api.get('/api/asset');
      
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.data)).toBe(true);
      expect(response.body.count).toBe(response.body.data.length);
    });
  });

  // Test GET /api/asset/:id
  describe('GET /api/asset/:id', () => {
    it('should return a single asset item by ID', async () => {
      const response = await api.get('/api/asset/1');
      
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveProperty('id');
      expect(response.body.data).toHaveProperty('title');
    });

    it('should return 404 for non-existent asset ID', async () => {
      const response = await api.get('/api/asset/999999');
      
      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
      expect(response.body.message).toContain('not found');
    });
  });
});

// Test suite for navigation endpoints
describe('Navigation API Endpoints', () => {
  // Test GET /nav/data
  describe('GET /nav/data', () => {
    it('should return navigation data', async () => {
      const response = await api.get('/nav/data');
      
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.data)).toBe(true);
      expect(response.body.count).toBe(response.body.data.length);
    });
  });
});

// Test suite for user endpoints
describe('User API Endpoints', () => {
  // Test GET /user/startheaderinfo
  describe('GET /user/startheaderinfo', () => {
    it('should return user header info when authenticated', async () => {
      const token = generateTestToken();
      
      const response = await api
        .get('/user/startheaderinfo')
        .set('Authorization', `Bearer ${token}`);
      
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveProperty('id');
      expect(response.body.data).toHaveProperty('name');
      expect(response.body.data).toHaveProperty('email');
    });

    it('should return 401 when not authenticated', async () => {
      const response = await api.get('/user/startheaderinfo');
      
      expect(response.status).toBe(401);
      expect(response.body.success).toBe(false);
    });

    it('should return 401 with invalid token', async () => {
      const response = await api
        .get('/user/startheaderinfo')
        .set('Authorization', 'Bearer invalid-token');
      
      expect(response.status).toBe(401);
      expect(response.body.success).toBe(false);
    });
  });

  // Test POST /user/register
  describe('POST /user/register', () => {
    it('should register a new user', async () => {
      const newUser = {
        name: 'Test User',
        email: `test${Date.now()}@example.com`,
        password: 'password123'
      };
      
      const response = await api
        .post('/user/register')
        .send(newUser);
      
      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveProperty('id');
      expect(response.body.data.name).toBe(newUser.name);
      expect(response.body.data.email).toBe(newUser.email);
    });

    it('should return 400 when registering with existing email', async () => {
      const existingUser = {
        name: 'Existing User',
        email: 'existing@example.com',
        password: 'password123'
      };
      
      // First registration should succeed
      await api.post('/user/register').send(existingUser);
      
      // Second registration with same email should fail
      const response = await api
        .post('/user/register')
        .send(existingUser);
      
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.message).toContain('already exists');
    });
  });

  // Test POST /user/login
  describe('POST /user/login', () => {
    it('should login a user with valid credentials', async () => {
      const loginUser = {
        email: 'user@example.com',
        password: 'password123'
      };
      
      const response = await api
        .post('/user/login')
        .send(loginUser);
      
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body).toHaveProperty('token');
      expect(response.body.user).toHaveProperty('id');
      expect(response.body.user).toHaveProperty('email');
    });

    it('should return 401 with invalid credentials', async () => {
      const invalidUser = {
        email: 'nonexistent@example.com',
        password: 'wrongpassword'
      };
      
      const response = await api
        .post('/user/login')
        .send(invalidUser);
      
      expect(response.status).toBe(401);
      expect(response.body.success).toBe(false);
      expect(response.body.message).toContain('Invalid credentials');
    });
  });
});

// Test suite for API health check
describe('API Health Check', () => {
  it('should return welcome message on root endpoint', async () => {
    const response = await api.get('/');
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toContain('Welcome to Claro OTT API');
  });
});
