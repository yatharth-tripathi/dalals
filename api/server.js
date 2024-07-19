// api/server.js
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes'); // Ensure this path is correct

const app = express();
const PORT = 5000;
const MONGODB_URI = 'mongodb+srv://yatharth:yatharth@myfirstproject.5cwaitk.mongodb.net/?retryWrites=true&w=majority&appName=myfirstproject';

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1); // Exit the application if there's a connection error
});

// Use routes
app.use('/api', authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Ensure MongoDB client is closed when the application exits
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed');
    process.exit(0);
  });
});
