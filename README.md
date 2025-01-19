# TrailerFlix

TrailerFlix es una aplicación web moderna desarrollada con React y Vite que permite a los usuarios compartir y descubrir trailers de películas, series, documentales y anime. La aplicación ofrece una interfaz intuitiva y atractiva para explorar contenido multimedia.

## Características

- Reproducción de trailers de YouTube
- Diseño responsivo y moderno
- Categorización por tipo de contenido (Películas, Series, Anime, Documentales)
- Funcionalidad completa de CRUD para videos
- Persistencia de datos local y en la nube
- Interfaz de usuario moderna y atractiva
- Rendimiento optimizado
- Responsividad

## Tecnologías Utilizadas

- **React** - Biblioteca principal de UI
- **Vite** - Build tool y dev server
- **Styled Components** - Estilos en JS
- **React Router** - Navegación
- **Axios** - Cliente HTTP
- **React Player** - Reproductor de video
- **LocalStorage** - Persistencia local de datos

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tamara4444/trailerflix.git
cd trailerflix
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## Estructura del Proyecto

```
trailerflix/
├── public/                    # Archivos públicos estáticos
│   ├── images/               # Imágenes y recursos
│   │   └── cinema-pattern.png
│   ├── 404.html             # Página de error 404
│   ├── logo.svg             # Logo de la aplicación
│   └── vite.svg             # Logo de Vite
│
├── src/                      # Código fuente principal
│   ├── components/          # Componentes reutilizables
│   │   ├── Footer/         # Pie de página
│   │   │   ├── Footer.jsx  # Versión completa del footer
│   │   │   └── Footer2.jsx # Versión simplificada
│   │   ├── FullscreenVideo/# Componente de video en pantalla completa
│   │   ├── Header/         # Encabezado de la aplicación
│   │   ├── Modal/          # Componente modal genérico
│   │   ├── Preview/        # Vista previa de videos
│   │   ├── VideoCard/      # Tarjeta de presentación de video
│   │   ├── VideoForm/      # Formulario para crear/editar videos
│   │   ├── VideoModal/     # Modal para reproducción de videos
│   │   └── VideoPlayer/    # Reproductor de video personalizado
│   │
│   ├── pages/              # Páginas principales de la aplicación
│   │   ├── EditVideo/      # Página de edición de video
│   │   ├── Home/           # Página principal
│   │   └── NewVideo/       # Página para agregar nuevo video
│   │
│   ├── config/             # Configuraciones
│   │   └── api.js         # Configuración de la API
│   │
│   ├── assets/            # Recursos estáticos
│   │   └── react.svg      # Logo de React
│   │
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos principales
│   ├── index.css         # Estilos globales
│   └── main.jsx         # Punto de entrada de la aplicación
│
├── package.json          # Dependencias y scripts
├── package-lock.json     # Versiones exactas de dependencias
├── vite.config.js       # Configuración de Vite
├── eslint.config.js     # Configuración de ESLint
└── README.md            # Documentación del proyecto
```

## MockAPI

Este proyecto utiliza MockAPI como backend simulado para almacenar y gestionar los datos de los videos. La implementación incluye:

- **Endpoint**: `[ttps://6780d27b85151f714b080be6.mockapi.io/videos/videos]`
- **Operaciones CRUD**:
  - GET: Obtener lista de videos
  - POST: Crear nuevo video
  - PUT: Actualizar video existente
  - DELETE: Eliminar video

La configuración de la API se encuentra en `src/config/api.js`

## Galería

### Interfaz de Usuario

- Vista Principal (Home)
  ![](https://res.cloudinary.com/dg7dgtg0j/image/upload/v1737268392/HOME_oweimz.png)
- Formulario de Edición de Videos
  ![](https://res.cloudinary.com/dg7dgtg0j/image/upload/v1737268391/EDIT_rr8sva.png)
- Reproductor de Video
  ![](https://res.cloudinary.com/dg7dgtg0j/image/upload/v1737268592/VIDEO_a87kli.png)
- Nuevo Video
  ![](https://res.cloudinary.com/dg7dgtg0j/image/upload/v1737268391/NEW_aeagxa.png)
- Footer
  ![](https://res.cloudinary.com/dg7dgtg0j/image/upload/v1737268391/FOOTER_u3oftz.png)
- General
  ![](https://res.cloudinary.com/dg7dgtg0j/image/upload/v1737268392/trai2_wittex.jpg)
- Card
  ![](https://res.cloudinary.com/dg7dgtg0j/image/upload/v1737268391/DES_iaihqa.png)

## Uso

1. **Explorar Videos**
   - Navega por las diferentes categorías
   - Reproduce trailers haciendo clic en el botón de play
   - Disfruta del modo pantalla completa

2. **Agregar Nuevo Video**
   - Haz clic en "Nuevo video"
   - Completa el formulario con los detalles del trailer
   - Asegúrate de usar una URL válida de YouTube

3. **Editar/Eliminar Videos**
   - Usa los botones de edición/eliminación en cada video
   - Modifica los detalles según sea necesario
   - Los cambios se guardan automáticamente

## Autor

- **Tamara Flores Burgos** -

## Agradecimientos

- Inspirado en Netflix y otras plataformas de streaming

## NOTA
Proyecto correspondiente a challenge de curso Alura ONE.

## 🚀 Deploy

La aplicación está disponible en el siguiente enlace:  
[TrailerFlix - Ver ](https://tamara4444.github.io/trailerflix/#/)
