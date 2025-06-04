<template>
  <h2>Añadir Rol</h2>
  <form @submit.prevent="addRole">
    <div class="form-container">
      <input
        v-model="form.nombre"
        placeholder="Nombre del rol"
        required
      />
      <input
        v-model="form.descripcion"
        placeholder="Descripción (opcional)"
      />
      <button type="submit">Agregar Rol</button>
    </div>
  </form>
  <ul>
    <li v-for="rol in roles" :key="rol.id">
      {{ rol.nombre }} - {{ rol.descripcion || 'Sin descripción' }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
// Importar servicios de roles (ajustar según tu API real)
import { getRoles, createRole, Role } from "../services/api";

const roles = ref<Role[]>([]);
const form = ref({
  nombre: "",
  descripcion: "",
});

const fetchRoles = async () => {
  roles.value = await getRoles();
};

const addRole = async () => {
  await createRole(form.value);
  // Limpiar formulario después de agregar
  form.value = { nombre: "", descripcion: "" };
  // Actualizar lista
  fetchRoles();
};

onMounted(() => {
  fetchRoles();
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

input {
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
  align-self: flex-start;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 8px;
  border-bottom: 1px solid #eee;
}
</style>