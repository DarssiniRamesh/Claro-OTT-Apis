/**
 * PUBLIC_INTERFACE
 * Middleware to validate request body against a schema
 * @param {Object} schema - Joi schema for validation
 * @returns {Function} Express middleware function
 */
const validateRequest = (schema) => {
  return (req, res, next) => {
    if (!schema) return next();

    const { error } = schema.validate(req.body);
    
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message.replace(/"/g, '')
      });
    }
    
    next();
  };
};

module.exports = validateRequest;
