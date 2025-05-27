// /server/routes/contactRoutes.js
const express = require('express');
const { handleContactForm } = require('../controllers/contactController');
const { validateContactForm } = require('../utils/validation');

const router = express.Router();

// POST /api/contact
router.post('/', validateContactForm, handleContactForm);

module.exports = router;
