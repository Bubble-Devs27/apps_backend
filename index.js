const express = require('express');
const cors = require('cors');
const http = require('http');   // <-- Import http
const { Server } = require('socket.io');  // <-- Import socket.io

const app = express();
const PORT = 3000;

// Wrap express app inside an HTTP server
const server = http.createServer(app);

// Attach socket.io to server
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins (for dev). Restrict in production.
    methods: ["GET", "POST"]
  }
});

// Import routes & DB connection
const v1Routes = require("./routes/v1Routes");
const connectMongoDb = require('./Database/connect');

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
connectMongoDb();

// Routes
app.use('/api/v1', v1Routes);

app.get('/api', (req, res) => {
  res.json({ message: 'This is an API route with CORS & WebSockets enabled' });
});

// Socket.IO Logic
io.on('connection', (socket) => {
  console.log('🔌 A user connected:', socket.id);

  // Example event listener
  socket.on('chat message', (msg) => {
    console.log(`📩 Message from ${socket.id}:`, msg);
    
    // Broadcast message to all connected clients
    io.emit('chat message', msg);
  });

  // On disconnect
  socket.on('disconnect', () => {
    console.log('❌ User disconnected:', socket.id);
  });
});

// Start server (use server instead of app)
server.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
