// Tipos
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

// Simulación de bases de datos en memoria
const rolesDB: Role[] = [];
const usersDB: User[] = [];

// ======================= ROL =======================
export const getRoles = async (): Promise<Role[]> => {
  return rolesDB;
};

export const createRole = async (role: Omit<Role, 'id'>): Promise<void> => {
  const newRole: Role = {
    id: crypto.randomUUID(),
    ...role,
  };
  rolesDB.push(newRole);
};

// ======================= USUARIO =======================
export const getUsers = async (): Promise<User[]> => {
  return usersDB;
};

export const createUser = async (user: Omit<User, 'id'>): Promise<void> => {
  const newUser: User = {
    id: crypto.randomUUID(),
    ...user,
  };
  usersDB.push(newUser);
};
