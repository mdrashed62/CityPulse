import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic Health Check Route
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'active',
    service: 'CityPulse Backend',
    timestamp: new Date().toISOString(),
  });
});

// Presentation Layer: Placeholder for your DDD Routes
// app.use('/api/v1/bus', busRouter);

const server = app.listen(PORT, () => {
  console.log(`
  🚌 CityPulse Backend Initialized
  📡 Port: ${PORT}
  🚀 Mode: ${process.env.NODE_ENV || 'development'}
  `);
});

// Graceful Shutdown (Helps your stop.sh script)
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});