// backend/utils/parseExcel.js
const xlsx = require('xlsx');

function parseExcel(files) {
  const reports = [];
  const newEmployees = [];

  files.forEach(file => {
    const workbook = xlsx.readFile(file.path);
    const sheetName = workbook.SheetNames[0];
    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    if (file.originalname.startsWith('Daily_report')) {
      const parts = file.originalname.split(/[_\.]/);
      const firstName = parts[3];
      const lastName = parts[4];

      data.forEach(row => {
        if (row.Status === 'Pass') {
          reports.push({
            name: row['Candidate Name'],
            role: row['Role'],
            teamMember: `${firstName} ${lastName}`
          });
        }
      });
    } else if (file.originalname.startsWith('New_Employee')) {
      data.forEach(row => {
        newEmployees.push({
          name: row['Employee Name'],
          joinDate: row['Join Date'],
          role: row['Role'],
          dob: row['DOB (Date of Birth)'],
          idCard: row['ID Card']
        });
      });
    }
  });

  const result = newEmployees.map(emp => {
    const report = reports.find(r => r.name === emp.name && r.role === emp.role);
    return report
      ? {
          name: emp.name,
          joinDate: emp.joinDate,
          role: emp.role,
          teamMember: report.teamMember
        }
      : null;
  }).filter(Boolean);

  return result;
}

module.exports = parseExcel;
