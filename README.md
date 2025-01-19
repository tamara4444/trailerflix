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
git clone https://github.com/yourusername/trailerflix.git
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
src/
├── components/           # Componentes reutilizables
├── pages/               # Páginas principales
├── config/              # Configuraciones
├── assets/              # Recursos estáticos
└── App.jsx             # Componente principal
```

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

## Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una nueva rama (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## Autores

- **Tu Nombre** - *Trabajo Inicial* - [TuGitHub](https://github.com/tusername)

## Agradecimientos

- Inspirado en Netflix y otras plataformas de streaming
- Gracias a la comunidad de React por sus increíbles herramientas
- Todos los contribuidores que ayudan a mejorar este proyecto
