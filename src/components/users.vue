<template>
<ul>
    <li v-for="w in writers" :key="w.id">
      {{ w.nombre }} {{ w.apellido }} ({{ w.nacionalidad }}, {{ w.edad }}
      años)
    </li>
</ul>
  <ul>
    <li v-for="b in books" :key="b.id">
      "{{ b.nombre }}" por {{ b.author.nombre }} {{ b.author.apellido }}
    </li>
  </ul>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getWriters, createWriter, Writer } from "../services/api";
const writers = ref<Writer[]>([]);
const form = ref({ nombre: "", apellido: "", nacionalidad: "", edad: 0 });
const fetchWriters = async () => {
  writers.value = await getWriters();
};
const addWriter = async () => {
  await createWriter(form.value);
  form.value = { nombre: "", apellido: "", nacionalidad: "", edad: 0 };
  fetchWriters();
};
onMounted(fetchWriters);
</script>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  getBooks,
  createBook,
  getWriters,
  Book,
  Writer,
} from "../services/api";
const books = ref<Book[]>([]);
const writers = ref<Writer[]>([]);
const form = ref({
  nombre: "",
  genero: "",
  añoPublicacion: 0,
  author: { id: 0 },
});
const fetchWriters = async () => {
  writers.value = await getWriters();
};
const fetchBooks = async () => {
  books.value = await getBooks();
};
const addBook = async () => {
  await createBook(form.value);
  form.value = { nombre: "", genero: "", añoPublicación: 0, author: { id: 0 } };
  fetchBooks();
};
onMounted(() => {
  fetchWriters();
  fetchBooks();
});
</script>
