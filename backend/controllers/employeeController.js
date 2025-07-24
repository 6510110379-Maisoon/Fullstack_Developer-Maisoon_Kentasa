// backend/controllers/employeeController.js
const path = require('path');
const fs = require('fs');
const parseExcel = require('../utils/parseExcel');

exports.getAllEmployees = async (req, res) => {
  try {
    const uploadsDir = path.join(__dirname, '../uploads');
    const fileNames = fs.readdirSync(uploadsDir).map(name => ({
      path: path.join(uploadsDir, name),
      originalname: name
    }));

    const employees = await parseExcel(fileNames);
    res.json(employees);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to read employee data' });
  }
};