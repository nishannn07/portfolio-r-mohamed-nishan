// /server/utils/validation.js
const { body } = require('express-validator');

exports.validateContactForm = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required.')
    .isLength({ min: 2 }).withMessage('Name must be at least 2 characters long.')
    .escape(),
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required.')
    .isEmail().withMessage('Please provide a valid email address.')
    .normalizeEmail(),
  body('message')
    .trim()
    .notEmpty().withMessage('Message is required.')
    .isLength({ min: 10 }).withMessage('Message must be at least 10 characters long.')
    .escape(),
  body('honeypot') // Hidden field for basic spam check
    .optional()
    .isEmpty().withMessage('Spam detected.')
];
