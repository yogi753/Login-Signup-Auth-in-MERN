import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get('http://localhost:5000/api/users/users');
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const userCounts = users.map(user => ({
    name: user.name,
    count: user.count,
  }));

  const chartData = {
    labels: userCounts.map(user => user.name),
    datasets: [
      {
        label: 'Login Count',
        data: userCounts.map(user => user.count),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      }
    ]
  };

  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Count</th>
            <th>Gender</th>
            <th>Last Login Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.count}</td>
              <td>{user.gender}</td>
              <td>{new Date(user.lastLoginDate).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="chart">
        <Bar data={chartData} />
      </div>
    </div>
  );
}

export default AdminDashboard;
