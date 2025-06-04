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
      <button type="submit" :disabled="loading">
        {{ loading ? "Guardando..." : "Agregar Rol" }}
      </button>
    </div>
  </form>

  <p v-if="error" class="error">{{ error }}</p>

  <ul>
    <li v-for="rol in roles" :key="rol.id">
      {{ rol.nombre }} - {{ rol.descripcion || 'Sin descripción' }}
    </li>
  </ul>
</template>

<script setup lang="ts">
// Tu script queda igual
import { ref, onMounted } from "vue";
import { getRoles, createRole, Role } from "../services/api";

const roles = ref<Role[]>([]);
const form = ref({
  nombre: "",
  descripcion: "",
});
const loading = ref(false);
const error = ref<string | null>(null);

const fetchRoles = async () => {
  error.value = null;
  try {
    roles.value = await getRoles();
  } catch (err) {
    error.value = "Error al cargar los roles. Intenta nuevamente.";
  }
};

const addRole = async () => {
  if (!form.value.nombre.trim()) {
    error.value = "El nombre del rol es obligatorio.";
    return;
  }

  loading.value = true;
  error.value = null;

  try {
    await createRole(form.value);
    form.value = { nombre: "", descripcion: "" };
    await fetchRoles();
  } catch (err) {
    error.value = "Error al crear el rol. Intenta nuevamente.";
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchRoles();
});
</script>
