const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const routineRoutes = require('./routes/routineRoutes');

const app = express();

// Connect to MongoDB Atlas
connectDB();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true}));
app.use(express.json());

// Routes
app.use('/api', routineRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('Schedify backend is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Schedify backend running on port ${PORT}`);
});