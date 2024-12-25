const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const timetableRoutes = require('./Routes/timetableRoutes');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Root route for server check
app.get('/', (req, res) => {
  res.send('Hello! The server is working.');
});

// Use routes
app.use('/api/timetables', timetableRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
