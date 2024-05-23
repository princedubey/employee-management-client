import React, { useState, useEffect } from 'react';
import { getEmployees } from '../services/apiServices';
import { FaUserFriends, FaMoneyBillAlt } from 'react-icons/fa';

const Dashboard = () => {
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [totalSalary, setTotalSalary] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getEmployees();
        const employees = response.data;
        const totalEmployeesCount = employees.length;
        const totalSalaryCount = employees.reduce((acc, emp) => acc + emp.salary, 0);
        setTotalEmployees(totalEmployeesCount);
        setTotalSalary(totalSalaryCount);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-blue-500 text-white rounded-lg shadow-md p-6 flex items-center justify-between">
          <div>
            <FaUserFriends size={60} />
            <h5 className="text-lg font-semibold mb-2">Total Employees</h5>
            <p className="text-2xl">{totalEmployees}</p>
          </div>
        </div>
        <div className="bg-green-500 text-white rounded-lg shadow-md p-6 flex items-center justify-between">
          <div>
            <FaMoneyBillAlt size={60} />
            <h5 className="text-lg font-semibold mb-2">Total Salary</h5>
            <p className="text-2xl">Rs {totalSalary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
