// backend/app.js
const express = require('express');
const path = require('path');
const employeeController = require('./controllers/employeeController');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, '../frontend/build')));

// API to get processed employee data
app.get('/api/employees', employeeController.getAllEmployees);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});