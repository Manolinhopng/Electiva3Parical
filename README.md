# Sistema de Roles

Un sistema web moderno para la gestión de roles y usuarios, desarrollado con Vue.js 3 y TypeScript.

## 🎯 Descripción del Problema

En muchas organizaciones existe la necesidad de gestionar usuarios y sus respectivos roles de manera eficiente. Los problemas comunes incluyen:

- **Gestión manual dispersa**: Información de usuarios y roles almacenada en diferentes lugares (Excel, documentos, etc.)
- **Falta de centralización**: No existe un sistema único para consultar quién tiene qué rol
- **Asignación inconsistente**: Dificultad para mantener coherencia en la asignación de roles
- **Escalabilidad limitada**: Procesos manuales que no escalan con el crecimiento organizacional
- **Falta de trazabilidad**: No hay registro claro de cambios y asignaciones

## 💡 Solución

Este sistema proporciona una **plataforma web centralizada** que permite:

- ✅ **Crear y gestionar roles** con nombres descriptivos y detalles específicos
- ✅ **Registrar usuarios completos** con toda su información personal y profesional
- ✅ **Asignar roles de forma estructurada** garantizando consistencia
- ✅ **Visualizar toda la información** en un dashboard centralizado
- ✅ **Mantener integridad de datos** mediante validaciones automáticas
- ✅ **Escalabilidad** para organizaciones de cualquier tamaño

## 🚀 Características

- **Gestión de Roles**: Crear y visualizar roles con nombre y descripción
- **Gestión de Usuarios**: Crear usuarios con información completa y asignación de roles
- **Interfaz Intuitiva**: Navegación sencilla con diseño responsivo
- **Validación**: Formularios con validación de campos obligatorios
- **API REST**: Integración con backend mediante Axios

## 🛠️ Tecnologías

- **Frontend**: Vue.js 3 con Composition API
- **Lenguaje**: TypeScript
- **Routing**: Vue Router
- **HTTP Client**: Axios
- **Estilos**: CSS3 con variables personalizadas
- **Build Tool**: Vite

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── createRol.vue     # Formulario para crear roles
│   ├── createUser.vue    # Formulario para crear usuarios
│   └── users.vue         # Vista de usuarios y roles
├── router/
│   └── index.ts          # Configuración de rutas
├── services/
│   └── api.ts            # Servicios API y tipos TypeScript
├── App.vue               # Componente principal
├── main.ts               # Punto de entrada
└── styles.css            # Estilos globales
```

## 🚀 Instalación y Ejecución

### Prerrequisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- **Node.js** (versión 16 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** (incluido con Node.js) o **yarn**
- **Backend API** corriendo en puerto 5000 (ver sección Backend)

### Pasos de instalación

#### 1. Clonar el repositorio
```bash
git clone <url-del-repositorio>
cd sistema-roles
```

#### 2. Instalar dependencias
```bash
# Con npm
npm install

# O con yarn
yarn install
```

#### 3. Configurar el Backend (IMPORTANTE)

**⚠️ NOTA CRÍTICA**: Este frontend requiere un backend API funcionando.

El sistema espera que tengas un servidor API corriendo en `http://localhost:5000` con los siguientes endpoints:

```
GET  /api/roles     # Obtener todos los roles
POST /api/roles     # Crear un nuevo rol
GET  /api/users     # Obtener todos los usuarios  
POST /api/users     # Crear un nuevo usuario
```

**Estructura esperada de datos:**

```javascript
// Rol
{
  "id": "string",
  "nombre": "string", 
  "descripcion": "string" // opcional
}

// Usuario
{
  "id": "string",
  "nombres": "string",
  "apellidos": "string", 
  "identificacion": "string",
  "email": "string",
  "rolId": "string"
}
```

#### 4. Ejecutar el proyecto

```bash
# Servidor de desarrollo (puerto 5173 por defecto)
npm run dev

# O con yarn
yarn dev
```

#### 5. Abrir en el navegador

El sistema estará disponible en: **http://localhost:5173**

### Comandos disponibles

```bash
npm run dev         # Servidor de desarrollo con hot-reload
npm run build       # Compilar para producción
npm run preview     # Vista previa de la build de producción
```

### ⚠️ Solución de Problemas Comunes

#### Error de conexión a la API
```
Network Error / CORS Error
```
**Solución**: Verifica que el backend esté corriendo en `http://localhost:5000`

#### Puerto 5173 ocupado
```
Port 5173 is already in use
```
**Solución**: El sistema automáticamente usará el siguiente puerto disponible (5174, 5175, etc.)

#### Dependencias faltantes
```
Module not found
```
**Solución**: Ejecuta `npm install` nuevamente

### 🔧 Configuración Personalizada

Si tu backend está en una URL diferente, modifica `src/services/api.ts`:

```typescript
const api = axios.create({
  baseURL: 'http://tu-servidor:puerto/api', // Cambia esta URL
  timeout: 5000,
});
```

## 🎯 Uso

### Navegación

El sistema cuenta con tres secciones principales:

1. **Agregar Roles** (`/createRol`): Crear nuevos roles del sistema
2. **Agregar Usuarios** (`/createUser`): Registrar nuevos usuarios
3. **Usuarios** (`/user`): Visualizar todos los usuarios y roles

### Crear un Rol

1. Ir a "Agregar roles"
2. Completar el formulario:
   - **Nombre**: Campo obligatorio
   - **Descripción**: Campo opcional
3. Hacer clic en "Agregar Rol"

### Crear un Usuario

1. Ir a "Agregar Usuarios" 
2. Completar todos los campos obligatorios:
   - Nombres
   - Apellidos  
   - Identificación
   - Correo electrónico
   - Seleccionar un rol existente
3. Hacer clic en "Agregar Usuario"

**Nota**: Debes crear al menos un rol antes de poder agregar usuarios.

## 📡 API

### Tipos TypeScript

```typescript
interface Role {
  id: string;
  nombre: string;
  descripcion?: string;
}

interface User {
  id: string;
  nombres: string;
  apellidos: string;
  identificacion: string;
  email: string;
  rolId: string;
}
```

### Configuración de API

La API está configurada para conectarse a `http://localhost:5000/api` con un timeout de 5 segundos. Puedes modificar estos valores en `src/services/api.ts`.

## 🎨 Estilos

El proyecto utiliza un sistema de diseño moderno con:

- **Variables CSS** para mantener consistencia
- **Diseño responsivo** para todos los dispositivos
- **Animaciones sutiles** para mejorar la experiencia
- **Esquema de colores** profesional
- **Componentes reutilizables**

### Colores principales

- Primary: `#2563eb` (Azul)
- Success: `#16a34a` (Verde)  
- Danger: `#dc2626` (Rojo)
- Grises: Del `#f9fafb` al `#111827`

## 🔧 Desarrollo

### Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Compilar para producción
npm run preview  # Vista previa de la build
```

### Estructura de componentes

Cada componente Vue utiliza:
- **Composition API** con `<script setup>`
- **TypeScript** para tipado estricto
- **Reactive refs** para el estado
- **Async/await** para operaciones API

## 🐛 Manejo de Errores

El sistema incluye manejo de errores para:
- Conexiones de red fallidas
- Validación de formularios
- Estados de carga
- Mensajes informativos al usuario

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👥 Autor

Desarrollado con ❤️ para la gestión eficiente de roles y usuarios.

---

**¿Necesitas ayuda?** Abre un issue en el repositorio o contacta al equipo de desarrollo.
