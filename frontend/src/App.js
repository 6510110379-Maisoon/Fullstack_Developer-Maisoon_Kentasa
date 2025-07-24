// frontend/src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeTable from './components/EmployeeTable';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('/api/employees')
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>New Employees by Team Member</h2>
      <EmployeeTable data={employees} />
    </div>
  );
}

export default App;
