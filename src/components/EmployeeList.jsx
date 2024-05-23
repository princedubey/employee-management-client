import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaMoneyBillAlt, FaBuilding } from 'react-icons/fa';
import Spinner from './Spinner';
import { getEmployees } from '../services/apiServices';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(5);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await getEmployees();
        setEmployees(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Employee List</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border border-gray-400">
                <FaUser className="mr-1 inline" />
                Name
              </th>
              <th className="p-2 border border-gray-400">
                <FaEnvelope className="mr-1 inline" />
                Email
              </th>
              <th className="p-2 border border-gray-400">
                <FaMoneyBillAlt className="mr-1 inline" />
                Salary
              </th>
              <th className="p-2 border border-gray-400">
                <FaBuilding className="mr-1 inline" />
                Department
              </th>
            </tr>
          </thead>
          <tbody>
            {currentEmployees.map((employee) => (
              <tr key={employee.id} className="hover:bg-gray-100">
                <td className="p-2 border border-gray-400">{employee.name}</td>
                <td className="p-2 border border-gray-400">{employee.email}</td>
                <td className="p-2 border border-gray-400">{employee.salary}</td>
                <td className="p-2 border border-gray-400">{employee.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(employees.length / employeesPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-lg ${
              currentPage === index + 1 ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
