// server.js
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const contactRoutes = require('./routes/contactRoutes');

// --- Initialize Express App ---
const app = express();
const PORT = process.env.PORT || 5002; // Use a different default port if running locally alongside another server

// --- Security Middleware ---
app.use(helmet()); // Set various HTTP security headers

// --- CORS Configuration ---
const allowedOrigins = process.env.NODE_ENV === 'production'
  ? [process.env.FRONTEND_URL] // Get frontend URL from .env
  : ['http://localhost:5173', 'http://127.0.0.1:5173']; // Allow Vite dev server

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// --- Body Parsing Middleware ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- API Routes ---
app.use('/api/contact', contactRoutes);

// --- Basic Health Check Route ---
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});

// --- Global Error Handler ---
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (err.message === 'Not allowed by CORS') {
    return res.status(403).json({ error: 'Access denied by CORS policy.' });
  }
  res.status(500).json({ error: 'Something went wrong on the server!' });
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`Server for RMN portfolio is running on port ${PORT}`);
   if(process.env.NODE_ENV !== 'production') {
    console.log(`Allowing CORS requests from: ${allowedOrigins.join(', ')}`);
  } else {
     console.log(`Allowing CORS requests from: ${process.env.FRONTEND_URL}`);
  }
});
