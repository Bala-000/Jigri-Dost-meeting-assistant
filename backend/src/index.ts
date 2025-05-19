import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Load environment variables
dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/smart-meeting-assistant')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  socket.on('join-meeting', (meetingId: string) => {
    socket.join(meetingId);
    console.log(`Client ${socket.id} joined meeting: ${meetingId}`);
  });

  socket.on('start-transcription', (meetingId: string) => {
    // Handle transcription start
    console.log(`Starting transcription for meeting: ${meetingId}`);
  });

  socket.on('transcription-data', (data: { meetingId: string, text: string }) => {
    // Broadcast transcription to all clients in the meeting
    io.to(data.meetingId).emit('transcription-update', data.text);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Basic health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start server
const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 