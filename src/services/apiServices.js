import api from './api';

const login = async (email, password) => {
  try {
    const response = await api.post('/admin/login', { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const signup = async ({name, email, phone, password, confirm_password}) => {
  try {
    const response = await api.post('/admin/signup', {name, email, phone, password, confirm_password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const logout = async () => {
  try {
    const response = await api.post('/admin/logout');
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getEmployees = async () => {
  try {
    const response = await api.get('/admin/employees');
    return response.data;
  } catch (error) {
    throw error;
  }
};

const addEmployee = async (employeeData) => {
  try {
    const response = await api.post('/admin/employees', employeeData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateEmployee = async (id, employeeData) => {
  try {
    const response = await api.patch(`/employees/${id}`, employeeData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const exportCsvEmployees = async (filterParams) => {
  try {
    const response = await api.get('/admin/employees/csv-data', { params: filterParams });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { login, signup, logout, getEmployees, addEmployee, updateEmployee, exportCsvEmployees };
