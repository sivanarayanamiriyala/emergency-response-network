require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const emergencyRoutes = require('./routes/emergencyRoutes');
const reportRoutes = require('./routes/reportRoutes');

// Connect to DB
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/emergencies', emergencyRoutes);
app.use('/api/reports', reportRoutes);

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
