/**
 * Application constants
 */
module.exports = {
  // HTTP Status Codes
  STATUS_CODES: {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500
  },
  
  // Error Messages
  ERROR_MESSAGES: {
    INVALID_CREDENTIALS: 'Invalid credentials',
    NOT_AUTHORIZED: 'Not authorized to access this resource',
    SERVER_ERROR: 'Server error',
    RESOURCE_NOT_FOUND: 'Resource not found',
    VALIDATION_ERROR: 'Validation error'
  },
  
  // Success Messages
  SUCCESS_MESSAGES: {
    USER_REGISTERED: 'User registered successfully',
    USER_LOGGED_IN: 'User logged in successfully',
    RESOURCE_CREATED: 'Resource created successfully',
    RESOURCE_UPDATED: 'Resource updated successfully',
    RESOURCE_DELETED: 'Resource deleted successfully'
  },
  
  // Validation Constants
  VALIDATION: {
    PASSWORD_MIN_LENGTH: 6,
    NAME_MAX_LENGTH: 50,
    TITLE_MAX_LENGTH: 100
  }
};
