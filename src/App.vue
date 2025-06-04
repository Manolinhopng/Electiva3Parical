<template>
  <nav>
    <router-link to="/createRol">Agregar roles</router-link> |
    <router-link to="/createUser">Agregar Usuarios</router-link>
    <router-link to="/user">Usuarios</router-link>
  </nav>
  <router-view />
</template>
<script setup lang="ts">
</script>
<style>
nav {
  padding: 1rem;
  background: #eee;
}
nav a {
  margin-right: 1rem;
  color: #333;
  text-decoration: none;
}
nav a.router-link-active {
  font-weight: bold;
}
</style>
