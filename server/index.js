const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
<<<<<<< HEAD
    origin: ['https://doctor-appoinment-eta.vercel.app', 'http://localhost:5173'],
=======
    origin: ['https://doctorappoinment-89og.onrender.com', 'http://localhost:5173'],
>>>>>>> 465f868c40c95214a9627f29f3e7c515f9b7aef0
    credentials: true
}));

// Database Connection
connectDB();

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/appointments', require('./routes/appointmentRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
