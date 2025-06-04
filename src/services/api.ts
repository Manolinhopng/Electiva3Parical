import axios from "axios";
const api = axios.create({ baseURL: "/api" });
export interface Writer {
  id: number;
  nombre: string;
  apellido: string;
  nacionalidad: string;
  edad: number;
  books: any[];
}
export interface Book {
  id: number;
  nombre: string;
  genero: string;
  añoPublicacion: number;
  author: Writer;
}
export const getWriters = () =>
  api.get<Writer[]>("/writers").then((r) => r.data);
export const createWriter = (w: Omit<Writer, "id" | "books">) =>
  api.post<Writer>("/writers", w).then((r) => r.data);
export const getBooks = () => api.get<Book[]>("/books").then((r) => r.data);
export const createBook = (b: {
  nombre: string;
  genero: string;
  añoPublicacion: number;
  author: { id: number };
}) => api.post<Book>("/books", b).then((r) => r.data);
export const updateBookAuthor = (bookId: number, writerId: number) =>
  api.put<Book>(`/books/${bookId}/author`, { writerId }).then((r) => r.data);
