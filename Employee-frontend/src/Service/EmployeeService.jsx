import api from "./axiosConfig";

export const ListEmployees = () =>
  api.get(`/allemployee`);

export const createEmployee = (employee) =>
  api.post(`/adding`, employee);

export const getEmployee = (employeeId) =>
  api.get(`/allemployee/${employeeId}`);

export const updateEmployee = (employeeId, employee) =>
  api.put(`/update/${employeeId}`, employee);

export const deleteEmployee = (employeeId) =>
  api.delete(`/delete/${employeeId}`);
