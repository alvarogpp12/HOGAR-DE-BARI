# Hogar de Bari - Sitio Web

Sitio web para Hogar de Bari, residencia para personas con discapacidad intelectual en Sevilla. Construido con Next.js 15, TypeScript, Tailwind CSS y Shadcn UI.

## Sobre Hogar de Bari

Residencia dedicada a la integración social de personas con discapacidad intelectual en la comunidad universitaria de Sevilla. Ofrecemos cuidado personalizado, programas de desarrollo y un ambiente propicio para el crecimiento integral.

## Características del Sitio

- ✨ Diseño moderno y accesible
- 🎨 Tailwind CSS para estilos
- 🔧 TypeScript con modo estricto
- 📱 Mobile-first
- ⚡ Next.js 15 con App Router
- 🎯 Componentes accesibles con Radix UI
- 🖼️ Optimización automática de imágenes

## Estructura del Proyecto

```
/app                 # Páginas y rutas (App Router)
/components          # Componentes reutilizables
  /ui               # Componentes base (Shadcn UI)
  /sections         # Secciones de la página principal
/lib                # Utilidades y helpers
/types              # Tipos TypeScript
```

## Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar en producción
npm start
```

## Desarrollo Local

Abre [http://localhost:3000](http://localhost:3000) en tu navegador después de ejecutar `npm run dev`.

## Despliegue en Vercel

1. Sube tu código a GitHub
2. Conecta tu repositorio en [vercel.com](https://vercel.com)
3. Vercel detectará automáticamente Next.js y configurará el build
4. ¡Listo! Tu sitio estará en producción

## Personalización

### Cambiar Imágenes

Las imágenes actualmente usan Unsplash como placeholder. Para usar las imágenes reales:

1. Coloca las imágenes en `/public/images/`
2. Actualiza las rutas en los componentes
3. Actualiza `next.config.ts` si usas un CDN externo

### Cambiar Colores

Edita las variables de color en `/app/globals.css` bajo `:root` y `.dark` para ajustar la paleta de colores.

### Modificar Contenido

- **Hero**: `components/sections/hero-section.tsx`
- **Quiénes somos**: `components/sections/about-section.tsx`
- **Servicios**: `components/sections/services-section.tsx`
- **Contacto**: `components/sections/contact-section.tsx`
- **Footer**: `components/footer.tsx`

## Tecnologías

- **Next.js 15** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utility-first
- **Shadcn UI** - Componentes accesibles
- **Radix UI** - Primitivos headless
- **Lucide React** - Iconos
- **Zod** - Validación de esquemas

## Contacto

**Hogar de Bari**
- Dirección: C/Periodista Ramón Resa, 9, Sevilla
- Teléfono: 615 464 425 / 651 105 396
- Email: hogardebari@gmail.com
- Horario: 24 horas, 365 días al año

## Desarrollo

Desarrollado por **Vulqo**

## Licencia

© 2024 Hogar de Bari. Todos los derechos reservados.

