# Prueba Técnica para Desarrollador Frontend con React

Prueba para evaluar habilidades como desarrollador Frontend trabajando con React, además de capacidades para utilizar una API pública, estructurar un proyecto, manejar estados, crear componentes reutilizables y desplegar una aplicación.

---

## Requisitos de la Prueba

1. **Elegir una API pública**  
   Puedes seleccionar cualquier API pública gratuita como base de datos para tu proyecto. Algunas sugerencias son:
   - Rick and Morty API
   - Breaking Bad API
   - PokeAPI *(utilizada en el proyecto)*
   - O cualquier otra API de tu elección.

2. **Crear un proyecto con React**  
   - Utiliza Create React App, Vite, o cualquier otra herramienta de inicialización para crear tu proyecto.
   - Debes usar **JavaScript** o **TypeScript** (a tu elección).

3. **Estructura del proyecto**  
   - El proyecto debe incluir al menos tres páginas principales:
     1. **Página de Login/Registro**:
        - Implementar un formulario básico de inicio de sesión y registro.
        - Puedes manejar los datos de usuario de forma local (por ejemplo, en el estado o localStorage).
        - Validaciones básicas en el formulario (ejemplo: campos requeridos, formato de email válido).
     2. **Página de Inicio (Home)**:
        - Mostrar datos obtenidos desde la API elegida.
        - Implementar una barra de búsqueda y filtros para los datos (por ejemplo, buscar personajes por nombre).
        - Mostrar imágenes y descripciones de los elementos.
     3. **Página de Creación/Edición**:
        - Crear un formulario que permita agregar un nuevo elemento o editar uno existente (los datos pueden manejarse localmente o en memoria, no es necesario enviar a la API).
        - Mostrar los elementos creados en la página de inicio o en un listado.

4. **Estilización**  
   - Utiliza CSS puro, SASS, TailwindCSS, o cualquier librería de estilos como Material-UI o Bootstrap.
   - El diseño no tiene que ser complejo, pero debe ser claro y agradable a la vista.

5. **Opcional: Despliegue**  
   - Si es posible, despliega tu aplicación en Vercel, Netlify, o cualquier servicio similar.
   - Comparte el enlace de tu aplicación desplegada.

---

## Tecnologías Usadas

1. **React**: Librería principal de la aplicación (utilizado con TypeScript).
2. **React Router**: Para la navegación entre las páginas.
3. **Fetch API**: Para realizar solicitudes HTTP a la API.
4. **Tailwind CSS**: Para facilitar el proceso de estilar componentes.
5. **Vite**: Empaquetador web.