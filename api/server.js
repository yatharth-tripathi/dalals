const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); // Adjust the path if necessary

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

// Example route to create a user
app.post('/create-user', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).send('User created successfully');
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send('Internal Server Error');
  }
});

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
