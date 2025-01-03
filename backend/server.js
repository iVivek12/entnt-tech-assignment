const express = require('express');
const mongoose = require('mongoose');
const companyRoutes = require('./routes/companyRoutes'); // Adjust path if needed

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB (make sure your MongoDB connection string is correct)
mongoose.connect('mongodb://localhost:27017/yourdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use company routes
app.use('/api', companyRoutes);

// Handle 404 for undefined routes
app.use((req, res) => {
  res.status(404).send('API route not found');
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
