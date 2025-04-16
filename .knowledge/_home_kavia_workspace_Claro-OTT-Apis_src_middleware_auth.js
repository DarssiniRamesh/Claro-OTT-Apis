{"is_source_file": true, "format": "JavaScript", "description": "Middleware for handling JWT authentication and mock token verification in Express applications.", "external_files": ["../config/config", "../services/dbService", "../utils/mockData"], "external_methods": ["dbService.getDbAvailability", "jwt.verify", "jwt.decode"], "published": ["protect", "isMockTokenValid"], "classes": [], "methods": [{"name": "protect", "description": "Middleware function that protects routes requiring authentication using JWT verification or mock tokens."}, {"name": "isMockTokenValid", "description": "Validates a JWT token in mock mode, checking against predefined mock users."}], "calls": ["dbService.getDbAvailability", "jwt.verify", "jwt.decode"], "search-terms": ["JWT authentication", "token verification", "mock token validation"], "state": 2, "file_id": 4, "knowledge_revision": 89, "git_revision": "1e2bdc5d1d2fdc11e66de65a26534d541a351c3e", "revision_history": [{"9": ""}, {"86": "1e2bdc5d1d2fdc11e66de65a26534d541a351c3e"}, {"87": "1e2bdc5d1d2fdc11e66de65a26534d541a351c3e"}, {"88": "1e2bdc5d1d2fdc11e66de65a26534d541a351c3e"}, {"89": "1e2bdc5d1d2fdc11e66de65a26534d541a351c3e"}], "ctags": [{"_type": "tag", "name": "config", "path": "/home/kavia/workspace/Claro-OTT-Apis/src/middleware/auth.js", "pattern": "/^const config = require('..\\/config\\/config');$/", "language": "JavaScript", "kind": "constant"}, {"_type": "tag", "name": "dbService", "path": "/home/kavia/workspace/Claro-OTT-Apis/src/middleware/auth.js", "pattern": "/^const dbService = require('..\\/services\\/dbService');$/", "language": "JavaScript", "kind": "constant"}, {"_type": "tag", "name": "decoded", "path": "/home/kavia/workspace/Claro-OTT-Apis/src/middleware/auth.js", "pattern": "/^          const decoded = jwt.decode(token);$/", "language": "JavaScript", "kind": "constant"}, {"_type": "tag", "name": "decoded", "path": "/home/kavia/workspace/Claro-OTT-Apis/src/middleware/auth.js", "pattern": "/^        const decoded = jwt.verify(token, config.jwtSecret);$/", "language": "JavaScript", "kind": "constant"}, {"_type": "tag", "name": "decoded", "path": "/home/kavia/workspace/Claro-OTT-Apis/src/middleware/auth.js", "pattern": "/^    const decoded = jwt.decode(token);$/", "language": "JavaScript", "kind": "constant"}, {"_type": "tag", "name": "id", "path": "/home/kavia/workspace/Claro-OTT-Apis/src/middleware/auth.js", "pattern": "/^              req.user = { id: mockUser.id };$/", "language": "JavaScript", "kind": "property", "scope": "req.user", "scopeKind": "class"}, {"_type": "tag", "name": "id", "path": "/home/kavia/workspace/Claro-OTT-Apis/src/middleware/auth.js", "pattern": "/^        req.user = { id: decoded.id };$/", "language": "JavaScript", "kind": "property", "scope": "req.user", "scopeKind": "class"}, {"_type": "tag", "name": "isDbAvailable", "path": "/home/kavia/workspace/Claro-OTT-Apis/src/middleware/auth.js", "pattern": "/^    const isDbAvailable = dbService.getDbAvailability();$/", "language": "JavaScript", "kind": "constant"}, {"_type": "tag", "name": "isMockTokenValid", "path": "/home/kavia/workspace/Claro-OTT-Apis/src/middleware/auth.js", "pattern": "/^const isMockTokenValid = (token) => {$/", "language": "JavaScript", "kind": "constant"}, {"_type": "tag", "name": "jwt", "path": "/home/kavia/workspace/Claro-OTT-Apis/src/middleware/auth.js", "pattern": "/^const jwt = require('jsonwebtoken');$/", "language": "JavaScript", "kind": "constant"}, {"_type": "tag", "name": "mockData", "path": "/home/kavia/workspace/Claro-OTT-Apis/src/middleware/auth.js", "pattern": "/^const mockData = require('..\\/utils\\/mockData');$/", "language": "JavaScript", "kind": "constant"}, {"_type": "tag", "name": "mockUser", "path": "/home/kavia/workspace/Claro-OTT-Apis/src/middleware/auth.js", "pattern": "/^            const mockUser = mockData.users.find(user => user.id === decoded.id);$/", "language": "JavaScript", "kind": "constant"}, {"_type": "tag", "name": "mockUser", "path": "/home/kavia/workspace/Claro-OTT-Apis/src/middleware/auth.js", "pattern": "/^    const mockUser = mockData.users.find(user => user.id === decoded.id);$/", "language": "JavaScript", "kind": "constant"}, {"_type": "tag", "name": "protect", "path": "/home/kavia/workspace/Claro-OTT-Apis/src/middleware/auth.js", "pattern": "/^const protect = (req, res, next) => {$/", "language": "JavaScript", "kind": "constant"}, {"_type": "tag", "name": "protect", "path": "/home/kavia/workspace/Claro-OTT-Apis/src/middleware/auth.js", "pattern": "/^module.exports = { protect, isMockTokenValid };$/", "language": "JavaScript", "kind": "field", "scope": "module.exports", "scopeKind": "class"}, {"_type": "tag", "name": "token", "path": "/home/kavia/workspace/Claro-OTT-Apis/src/middleware/auth.js", "pattern": "/^  let token;$/", "language": "JavaScript", "kind": "variable"}, {"_type": "tag", "name": "user", "path": "/home/kavia/workspace/Claro-OTT-Apis/src/middleware/auth.js", "pattern": "/^              req.user = { id: mockUser.id };$/", "language": "JavaScript", "kind": "class", "scope": "req", "scopeKind": "class"}, {"_type": "tag", "name": "user", "path": "/home/kavia/workspace/Claro-OTT-Apis/src/middleware/auth.js", "pattern": "/^        req.user = { id: decoded.id };$/", "language": "JavaScript", "kind": "class", "scope": "req", "scopeKind": "class"}], "filename": "/home/kavia/workspace/Claro-OTT-Apis/src/middleware/auth.js", "hash": "7f139978811b6994f92f6d1ffac6b8ce", "format-version": 4, "code-base-name": "default", "fields": [{"name": "req.user = { id: mockUser.id };", "scope": "req.user", "scopeKind": "class", "description": "unavailable"}, {"name": "req.user = { id: decoded.id };", "scope": "req.user", "scopeKind": "class", "description": "unavailable"}, {"name": "module.exports = { protect, isMockTokenValid };", "scope": "module.exports", "scopeKind": "class", "description": "unavailable"}, {"name": "let token;", "scope": "", "scopeKind": "", "description": "unavailable"}]}