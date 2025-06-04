<template>
  <h2>Usuarios</h2>
  <ul>
    <li v-for="user in usuarios" :key="user.id">
      {{ user.nombres }} {{ user.apellidos }} - {{ user.email }}
      <span>({{ getRolNombre(user.rolId) }})</span>
    </li>
  </ul>

  <h2>Roles disponibles</h2>
  <ul>
    <li v-for="rol in roles" :key="rol.id">
      {{ rol.nombre }} - {{ rol.descripcion || "Sin descripción" }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getUsers, getRoles, User, Role } from "../services/api";

const usuarios = ref<User[]>([]);
const roles = ref<Role[]>([]);

const fetchData = async () => {
  usuarios.value = await getUsers();
  roles.value = await getRoles();
};

const getRolNombre = (rolId: string) => {
  const rol = roles.value.find(r => r.id === rolId);
  return rol ? rol.nombre : "Rol desconocido";
};

onMounted(fetchData);
</script>
