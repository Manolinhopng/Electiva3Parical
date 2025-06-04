import axios from 'axios';

export interface Role {
  id: string;
  nombre: string;
  descripcion?: string;
}

export interface User {
  id: string;
  nombres: string;
  apellidos: string;
  identificacion: string;
  email: string;
  rolId: string;
}

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 5000,
});

// Roles
export const getRoles = async (): Promise<Role[]> => {
  const response = await api.get('/roles');
  return response.data;
};

export const createRole = async (role: Omit<Role, 'id'>): Promise<void> => {
  await api.post('/roles', role);
};

// Usuarios
export const getUsers = async (): Promise<User[]> => {
  const response = await api.get('/users');
  return response.data;
};

export const createUser = async (user: Omit<User, 'id'>): Promise<void> => {
  await api.post('/users', user);
};
