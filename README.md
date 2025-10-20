# 🐶 Galería de Razas de Perros

Una aplicación web interactiva que muestra diferentes razas de perros utilizando la API de [Dog CEO](https://dog.ceo/dog-api/). Construida con **TypeScript**, **Vite** y usando conceptos modernos de JavaScript asíncrono.

🌐 **[Ver Demo en Vivo](https://razas-perros-qdv6pr14q-ready-sets-projects.vercel.app)**

## 📋 Descripción

Esta aplicación demuestra el uso de **TypeScript** con JavaScript asíncrono (Async/Await) para obtener datos de una API externa y mostrarlos dinámicamente en una galería interactiva. Es un proyecto educativo que ejemplifica conceptos clave de JavaScript y TypeScript modernos.

## ✨ Características

- 🎨 Interfaz limpia y moderna con diseño profesional
- 🔍 **Búsqueda en tiempo real** por nombre de raza con debounce
- 🐕 **Filtros por tamaño** (Pequeño, Mediano, Grande)
- ℹ️ **Modal de información detallada** para cada raza
- 🔄 Carga asíncrona de datos usando Fetch API
- 📱 Diseño responsive con CSS Grid
- 🎭 Animaciones suaves y transiciones elegantes
- ⚡ Manejo robusto de errores con TypeScript
- 🐕 Muestra todas las razas disponibles con imágenes reales
- 🛡️ Type-safety completo con TypeScript
- ⚡️ Hot Module Replacement (HMR) con Vite
- 📊 Sistema de clasificación de razas por tamaño
- 💾 Caché de imágenes para mejor rendimiento

## 🛠️ Tecnologías

- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Build tool rápido y moderno
- **HTML5** - Estructura semántica
- **CSS3** - Grid Layout, Transitions
- **JavaScript ES6+** - Async/Await, Fetch API, Arrow Functions
- **Dog CEO API** - API pública de imágenes de perros

## 🚀 Instalación y Uso

### Requisitos Previos

- Node.js (v18 o superior)
- pnpm (recomendado) o npm/yarn

### Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/fersanz-87/razas-perros-app.git
   cd razas-perros-app
   ```

2. **Instala las dependencias:**
   ```bash
   pnpm install
   # o
   npm install
   ```

### Comandos Disponibles

```bash
# Iniciar servidor de desarrollo (con hot reload)
pnpm dev

# Construir para producción
pnpm build

# Previsualizar build de producción
pnpm preview

# Verificar tipos TypeScript sin compilar
pnpm typecheck
```

### Uso

1. **Inicia el servidor de desarrollo:**
   ```bash
   pnpm dev
   ```
   La aplicación se abrirá automáticamente en `http://localhost:3000`

2. **Usa la aplicación:**
   - La aplicación carga automáticamente todas las razas disponibles
   - Usa el campo de búsqueda para filtrar por nombre de raza
   - Filtra por tamaño usando los botones (Pequeño, Mediano, Grande)
   - Haz clic en cualquier tarjeta para ver información detallada de la raza
   - Pasa el mouse sobre las tarjetas para ver las animaciones
   - Abre la consola del navegador para ver los logs informativos

## 📚 Conceptos de JavaScript/TypeScript Demostrados

Este proyecto es una excelente referencia para aprender:

### TypeScript
- ✅ **Interfaces**: Definición de tipos para respuestas de API
- ✅ **Type Annotations**: Tipado de variables, parámetros y retornos
- ✅ **Type Guards**: Verificación de tipos en runtime
- ✅ **Generic Types**: Uso de tipos genéricos
- ✅ **Strict Mode**: Configuración estricta de TypeScript

### JavaScript Moderno
- ✅ **Async/Await**: Manejo de operaciones asíncronas
- ✅ **Promises**: Trabajo con promesas de JavaScript
- ✅ **Fetch API**: Peticiones HTTP a APIs externas
- ✅ **Try/Catch/Finally**: Manejo de errores
- ✅ **DOM Manipulation**: Creación dinámica de elementos
- ✅ **Event Listeners**: Manejo de eventos del usuario
- ✅ **Arrow Functions**: Sintaxis moderna de funciones
- ✅ **Destructuring**: Extracción de datos
- ✅ **Array Methods**: slice(), Object.keys(), for...of
- ✅ **ES Modules**: Import/Export de módulos

## 📁 Estructura del Proyecto

```
razas-perros-app/
├── src/
│   ├── main.ts          # Lógica principal con TypeScript
│   ├── breedData.ts     # Base de datos de información de razas
│   └── style.css        # Estilos de la aplicación
├── public/
│   └── vite.svg         # Assets públicos
├── index.html           # Estructura HTML
├── tsconfig.json        # Configuración de TypeScript
├── vite.config.ts       # Configuración de Vite
├── package.json         # Dependencias y scripts
├── .gitignore          # Archivos ignorados por Git
├── .nvmrc              # Versión de Node.js
├── pnpm-lock.yaml      # Lock file de pnpm
└── README.md           # Este archivo
```

## 🔧 Funcionalidades Implementadas y Futuras

### ✅ Implementado
- [x] Filtro de búsqueda por nombre de raza con debounce
- [x] Filtros por tamaño (Pequeño, Mediano, Grande)
- [x] Información detallada de cada raza al hacer clic (modal)
- [x] Sistema de clasificación de razas por tamaño
- [x] Caché de imágenes para mejor rendimiento
- [x] Animaciones suaves y transiciones

### 🚀 Ideas para mejorar el proyecto:
- [ ] Favoritos guardados en localStorage
- [ ] Modo oscuro
- [ ] Animación de skeleton loading
- [ ] Paginación o scroll infinito
- [ ] Compartir raza en redes sociales
- [ ] Tests unitarios con Vitest
- [ ] Tests E2E con Playwright
- [ ] Internacionalización (i18n)
- [ ] PWA (Progressive Web App)
- [ ] Filtros adicionales (temperamento, origen)

## 🧪 Testing

Para agregar tests en el futuro:

```bash
# Instalar Vitest
pnpm add -D vitest @vitest/ui

# Agregar script en package.json
"test": "vitest"
```

## 📦 Build para Producción

```bash
# Generar build optimizado
pnpm build

# Los archivos estarán en la carpeta dist/
# Puedes previsualizar con:
pnpm preview
```

El build de producción incluye:
- ✅ Minificación de código
- ✅ Tree-shaking
- ✅ Code splitting
- ✅ Optimización de assets
- ✅ Source maps (opcional)

## 🚀 Deployment en Vercel

Esta aplicación está desplegada en Vercel. Para desplegar tu propia versión:

### Opción 1: Deploy desde Git (Recomendado)
1. Conecta tu repositorio de GitHub con Vercel
2. Vercel detectará automáticamente la configuración de Vite
3. Cada push a `main` desplegará automáticamente

### Opción 2: Deploy con Vercel CLI
```bash
# Instalar Vercel CLI (si no la tienes)
npm i -g vercel

# Login en Vercel
vercel login

# Deploy a producción
vercel --prod
```

**🌐 URL de Producción:** https://razas-perros-qdv6pr14q-ready-sets-projects.vercel.app

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto:

1. Haz un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: alguna característica increíble'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

**Fer Sanz**

---

## 📖 Recursos Adicionales

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [Dog CEO API Docs](https://dog.ceo/dog-api/documentation/)
- [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

---

⭐ Si este proyecto te resultó útil, ¡considera darle una estrella!
