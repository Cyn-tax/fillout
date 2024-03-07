const express = require('express');
const router = express.Router();
const responseController = require('../controllers/response');

// Responses endpoint
router.get('/filteredSubmissions', responseController.getResponces);

module.exports = router;