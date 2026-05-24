# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Gestor de Tareas React

## Descripción del Proyecto

Este proyecto consiste en una aplicación web de gestión de tareas desarrollada con React y Vite.

La aplicación permite al usuario crear, editar, eliminar y completar tareas, además de filtrarlas y ordenarlas según diferentes criterios.

El objetivo principal del proyecto es practicar los conocimientos aprendidos durante el curso de Desarrollo de Aplicaciones Multiplataforma (DAM), utilizando tecnologías web modernas y programación en React.

---

## Funcionalidades

- Crear tareas
- Editar tareas
- Eliminar tareas
- Marcar tareas como completadas
- Filtrar por estado
- Filtrar por prioridad
- Ordenar tareas
- Guardar datos en localStorage
- Diseño responsive

---

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript
- React
- Vite
- React Hooks (useState y useEffect)
- localStorage
- UUID

---

## Estructura del Proyecto

```text
src/
│
├── components/
│   ├── Header.jsx
│   ├── TaskForm.jsx
│   ├── TaskList.jsx
│   ├── TaskCard.jsx
│   ├── FilterBar.jsx
│   └── ConfirmModal.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

---

## Instalación y Ejecución

### Instalar dependencias

```bash
npm install
```

### Ejecutar proyecto

```bash
npm run dev
```

---

## Dependencias Utilizadas

Instalar dependencias adicionales:

```bash
npm install react-icons uuid
```

---

## Funcionamiento de la Aplicación

### Crear tareas

El usuario puede crear nuevas tareas indicando:

- Título
- Descripción
- Prioridad
- Estado
- Fecha límite

---

### Editar tareas

Las tareas pueden editarse mediante el botón "Editar".

El formulario se rellena automáticamente con la información actual de la tarea.

---

### Eliminar tareas

Las tareas pueden eliminarse utilizando el botón "Eliminar".

Antes de eliminar una tarea aparece un modal de confirmación.

---

### Completar tareas

Las tareas pueden marcarse como completadas.

Cuando una tarea se completa:
- cambia visualmente
- aparece tachada
- el estado se actualiza automáticamente

---

### Filtrado

La aplicación permite filtrar tareas por:

#### Estado
- Todas
- Pendiente
- En Progreso
- Completada

#### Prioridad
- Alta
- Media
- Baja

---

### Ordenación

Las tareas pueden ordenarse por:

- Más recientes
- Título A-Z
- Título Z-A

---

## Persistencia de Datos

La aplicación utiliza localStorage para guardar automáticamente las tareas.

Esto permite mantener la información incluso al recargar la página.

---

## Diseño Responsive

La aplicación está adaptada para:
- ordenador
- tablet
- móvil

Utilizando:
- Flexbox
- CSS Grid
- Media Queries

---

## Autor
- Javier Quintana Rojo

Proyecto realizado como práctica final de empresas  
