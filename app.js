import express, { json } from 'express';
import connectDB from './config/db.js';

// Import routes using ES module syntax
import authRoutes from './routes/auth.js';
import eventRoutes from './routes/events.js';
import registrationRoutes from './routes/registration.js';

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(json());

// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/registration', registrationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
