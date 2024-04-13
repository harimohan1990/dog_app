const express = require('express');
const http = require('http');
const cors = require('cors');
const socketIo = require('socket.io');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

 const Profile =require('./routes/ProfileRoute')

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();
const server = http.createServer(app); 
const corsOptions = {
  origin: 'http://localhost:3000', // Specify your frontend domain
  methods: ['GET', 'POST'], // Add allowed methods as needed
  allowedHeaders: ['Content-Type', 'Authorization'], // Add allowed headers as needed
};
// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create a Socket.io instance and attach it to the HTTP server
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('chat message', (msg) => {
    console.log('Received message:', msg); // Log the received message
    io.emit('chat message', msg); // Emit the message to all connected clients
  });
});


// profile routes 
 app.use('/api/profile',Profile)


const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
