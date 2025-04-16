{"is_source_file": true, "format": "JavaScript", "description": "This file contains a function to generate a JWT token for a user using the jsonwebtoken library.", "external_files": ["../config/config"], "external_methods": ["jsonwebtoken.sign"], "published": ["generateToken"], "classes": [], "methods": [{"name": "generateToken", "description": "Generates a JWT token for a user with a given ID."}], "calls": ["jsonwebtoken.sign"], "search-terms": ["jwt", "generateToken", "authentication", "token generation"], "state": 2, "file_id": 24, "knowledge_revision": 50, "git_revision": "", "ctags": [{"_type": "tag", "name": "config", "path": "/home/kavia/workspace/Claro-OTT-Apis/src/utils/generateToken.js", "pattern": "/^const config = require('..\\/config\\/config');$/", "language": "JavaScript", "kind": "constant"}, {"_type": "tag", "name": "generateToken", "path": "/home/kavia/workspace/Claro-OTT-Apis/src/utils/generateToken.js", "pattern": "/^const generateToken = (id) => {$/", "language": "JavaScript", "kind": "constant"}, {"_type": "tag", "name": "jwt", "path": "/home/kavia/workspace/Claro-OTT-Apis/src/utils/generateToken.js", "pattern": "/^const jwt = require('jsonwebtoken');$/", "language": "JavaScript", "kind": "constant"}], "filename": "/home/kavia/workspace/Claro-OTT-Apis/src/utils/generateToken.js", "hash": "840faff3223d2bf675f84d2da4fe9c60", "format-version": 4, "code-base-name": "default", "revision_history": [{"50": ""}]}