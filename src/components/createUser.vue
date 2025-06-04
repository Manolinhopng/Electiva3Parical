<template>
  <h2>Crear Usuario</h2>
  <form @submit.prevent="addUser">
    <div class="form-container">
      <input v-model="form.nombres" placeholder="Nombres" required />
      <input v-model="form.apellidos" placeholder="Apellidos" required />
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
        <option v-for="rol in roles" :key="rol._id" :value="rol._id">
          {{ rol.nombre }}
        </option>
      </select>

      <button type="submit" :disabled="loading">
        {{ loading ? "Guardando..." : "Agregar Usuario" }}
      </button>
    </div>
  </form>

  <p v-if="error" class="error">{{ error }}</p>

  <ul>
    <li v-for="usuario in usuarios" :key="usuario.id">
      {{ usuario.nombres }} {{ usuario.apellidos }} - {{ usuario.email }}
      <span>({{ getRolName(usuario.rolId) }})</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
// Tu script queda igual
import { ref, onMounted } from "vue";
import {
  getRoles,
  createUser,
  getUsers,
  type Role,
  type User,
} from "../services/api";

const usuarios = ref<User[]>([]);
const roles = ref<Role[]>([]);
const form = ref({
  nombres: "",
  apellidos: "",
  identificacion: "",
  email: "",
  rolId: "",
});
const loading = ref(false);
const error = ref<string | null>(null);

const fetchRoles = async () => {
  error.value = null;
  try {
    roles.value = await getRoles();
  } catch {
    error.value = "Error cargando los roles.";
  }
};

const fetchUsers = async () => {
  error.value = null;
  try {
    usuarios.value = await getUsers();
  } catch {
    error.value = "Error cargando los usuarios.";
  }
};

const addUser = async () => {
  if (roles.value.length === 0) {
    alert("Primero debe crear roles antes de agregar usuarios");
    return;
  }

  if (
    !form.value.nombres.trim() ||
    !form.value.apellidos.trim() ||
    !form.value.identificacion.trim() ||
    !form.value.email.trim() ||
    !form.value.rolId
  ) {
    error.value = "Todos los campos son obligatorios.";
    return;
  }

  loading.value = true;
  error.value = null;

  try {
    await createUser(form.value);
    form.value = {
      nombres: "",
      apellidos: "",
      identificacion: "",
      email: "",
      rolId: "",
    };
    await fetchUsers();
  } catch {
    error.value = "Error creando el usuario.";
  } finally {
    loading.value = false;
  }
};

const getRolName = (rolId: string) => {
  const rol = roles.value.find((r) => r._id === rolId);
  return rol ? rol.nombre : "Rol no encontrado";
};

onMounted(() => {
  fetchRoles();
  fetchUsers();
});
</script>
