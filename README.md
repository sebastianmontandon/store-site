# Tienda de Electrónicos Modernos

![Banner del Proyecto](https://i.postimg.cc/J4H6vnwD/image.png)

Bienvenido a nuestra tienda en línea de productos electrónicos de última generación. Este proyecto es un catálogo interactivo construido con Astro, Tailwind CSS y TypeScript, diseñado para mostrar productos tecnológicos de alta gama de manera atractiva y responsiva.

## 🚀 Características

- **Interfaz Moderna**: Diseño limpio y responsivo que se adapta a cualquier dispositivo
- **Catálogo de Productos**: Muestra productos electrónicos con imágenes de alta calidad
- **Páginas de Detalle**: Información detallada de cada producto con especificaciones técnicas
- **Rendimiento Óptimo**: Construido con Astro para un rendimiento excepcional
- **Diseño con Tailwind CSS**: Estilos modernos y consistentes en toda la aplicación

## 🛠️ Tecnologías Utilizadas

- [Astro](https://astro.build/) - El framework web todo en uno
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS para estilos rápidos
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático para JavaScript
- [Vite](https://vitejs.dev/) - Herramienta de construcción de próxima generación

## 🚀 Cómo Empezar

### Prerrequisitos

- Node.js 18.0.0 o superior
- npm o yarn

### Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tienda-electronica.git
   cd tienda-electronica
   ```

2. Instala las dependencias:

   ```bash
   npm install
   # o
   yarn
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. Abre tu navegador en [http://localhost:4321](http://localhost:4321)

## 📦 Construcción

Para crear una versión de producción:

```bash
npm run build
# o
yarn build
```

## 🎨 Personalización

### Añadir un nuevo producto

1. Crea un nuevo archivo Markdown en `src/content/products/`
2. Sigue el formato de los productos existentes
3. Añade las imágenes correspondientes en la carpeta `public/`

### Variables de entorno

Crea un archivo `.env` en la raíz del proyecto si necesitas configurar variables de entorno.

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más información.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, lee las [pautas de contribución](CONTRIBUTING.md) antes de enviar un pull request.

## 📞 Contacto

¿Preguntas o comentarios? No dudes en abrir un issue o contactar al equipo de desarrollo.

## 🏗️ Estructura del Proyecto

```text
/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
