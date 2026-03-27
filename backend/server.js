const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(cors({
  origin: process.env.CLIENT_URL
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Schedify backend is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Schedify backend running on port ${PORT}`));