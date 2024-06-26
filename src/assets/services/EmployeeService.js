import axios from 'axios';

const REST_API_URL_BASE = 'http://localhost:8080/api/employees';


export const listEmployees  = () => axios.get(REST_API_URL_BASE);

export const createEmployee = (employee) => axios.post(REST_API_URL_BASE, employee)