<template>
  <h2>Crear Usuario</h2>
  <form @submit.prevent="addUser">
    <div class="form-container">
      <input
        v-model="form.nombres"
        placeholder="Nombres"
        required
      />
      <input
        v-model="form.apellidos"
        placeholder="Apellidos"
        required
      />
      <input
        v-model="form.identificacion"
        placeholder="Identificación"
        required
      />
      <input
        v-model="form.email"
        type="email"
        placeholder="Correo electrónico"
        required
      />
      <select v-model="form.rolId" required>
        <option disabled value="">Seleccione un rol</option>
        <option v-for="rol in roles" :key="rol.id" :value="rol.id">
          {{ rol.nombre }}
        </option>
      </select>
      <button type="submit">Agregar Usuario</button>
    </div>
  </form>
  <ul>
    <li v-for="usuario in usuarios" :key="usuario.id">
      {{ usuario.nombres }} {{ usuario.apellidos }} - {{ usuario.email }}
      <span>({{ getRolName(usuario.rolId) }})</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { 
  getRoles, 
  createUser, 
  getUsers,
  type Role,
  type User
} from "../services/api";

const usuarios = ref<User[]>([]);
const roles = ref<Role[]>([]);
const form = ref({
  nombres: "",
  apellidos: "",
  identificacion: "",
  email: "",
  rolId: ""
});

const fetchRoles = async () => {
  roles.value = await getRoles();
};

const fetchUsers = async () => {
  usuarios.value = await getUsers();
};

const addUser = async () => {
  // Validar que existan roles antes de crear usuario
  if (roles.value.length === 0) {
    alert("Primero debe crear roles antes de agregar usuarios");
    return;
  }
  
  await createUser(form.value);
  form.value = { 
    nombres: "", 
    apellidos: "", 
    identificacion: "", 
    email: "", 
    rolId: "" 
  };
  fetchUsers();
};

const getRolName = (rolId: string) => {
  const rol = roles.value.find(r => r.id === rolId);
  return rol ? rol.nombre : 'Rol no encontrado';
};

onMounted(() => {
  fetchRoles();
  fetchUsers();
});
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 12px;
  margin-bottom: 20px;
}

input, select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
}

li {
  padding: 10px;
  border-bottom: 1px solid #eee;
  display: flex;
  flex-direction: column;
}

li span {
  font-size: 0.9em;
  color: #666;
}
</style>