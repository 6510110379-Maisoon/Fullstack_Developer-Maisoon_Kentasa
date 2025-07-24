// frontend/src/components/EmployeeTable.js
import React from 'react';
import './EmployeeTable.css';

function EmployeeTable({ data }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Employee Name</th>
          <th>Join Date</th>
          <th>Role</th>
          <th>Team Member</th>
        </tr>
      </thead>
      <tbody>
        {data.map((emp, i) => (
          <tr key={i}>
            <td>{emp.name}</td>
            <td>{emp.joinDate}</td>
            <td>{emp.role}</td>
            <td>{emp.teamMember}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;