const express = require('express');
const dotenv = require('dotenv');
const profileRoutes = require('./routes/profile.routes');

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'GitHub Profile Analyzer API is running!' });
});

app.use('/api', profileRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found!' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;