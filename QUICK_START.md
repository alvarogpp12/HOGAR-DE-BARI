# 🚀 Inicio Rápido

## El servidor ya está corriendo en:
👉 **http://localhost:3000**

Abre tu navegador y visita esa dirección para ver tu sitio web.

## Comandos Útiles

```bash
# Detener el servidor
# Presiona Ctrl+C en la terminal donde está corriendo

# Iniciar el servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar la versión de producción localmente
npm start

# Verificar errores de linting
npm run lint
```

## Estructura del Proyecto

```
HDB/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de inicio
├── components/
│   ├── navigation.tsx     # Barra de navegación
│   ├── footer.tsx         # Pie de página
│   ├── sections/          # Secciones de la página
│   │   ├── hero-section.tsx
│   │   ├── rooms-section.tsx
│   │   ├── services-section.tsx
│   │   ├── gallery-section.tsx
│   │   └── contact-section.tsx
│   └── ui/               # Componentes UI base
├── lib/                  # Utilidades
├── types/               # Tipos TypeScript
├── public/              # Archivos estáticos
└── ...archivos de config
```

## Próximos Pasos

### 1. Personaliza el Contenido
- Edita `/components/sections/rooms-section.tsx` para tus habitaciones
- Actualiza `/components/sections/services-section.tsx` con tus servicios
- Cambia la información de contacto en `/components/footer.tsx`

### 2. Cambia las Imágenes
- Coloca tus imágenes en `/public/images/`
- O usa tu propio CDN y actualiza `next.config.ts`
- Ver guía completa en `CUSTOMIZATION.md`

### 3. Ajusta los Colores
- Edita `/app/globals.css` para cambiar el esquema de colores
- Ver sección de personalización en `CUSTOMIZATION.md`

### 4. Prepara para Producción
- Revisa `DEPLOYMENT.md` para instrucciones de despliegue en Vercel
- Conecta tu repositorio a GitHub
- Despliega con un click en Vercel

## Características del Sitio

✅ **Diseño Responsive** - Se adapta a móviles, tablets y desktop  
✅ **Navegación Fluida** - Scroll suave entre secciones  
✅ **Imágenes Optimizadas** - Carga rápida con Next.js Image  
✅ **Accesibilidad** - Componentes accesibles con Radix UI  
✅ **SEO Friendly** - Metadata optimizada para buscadores  
✅ **Formulario de Contacto** - Listo para integrar con tu servicio de email  
✅ **Galería Interactiva** - Modal para ver imágenes en grande  
✅ **TypeScript** - Código tipado y seguro  

## Secciones Incluidas

1. **Hero** - Banner principal con call-to-action
2. **Habitaciones** - Grid de habitaciones con precios y detalles
3. **Servicios** - Servicios e instalaciones del hotel
4. **Galería** - Galería de fotos interactiva
5. **Contacto** - Formulario de contacto e información
6. **Footer** - Enlaces y redes sociales

## Tecnologías

- **Next.js 15** - Framework React con App Router
- **TypeScript** - JavaScript con tipos
- **Tailwind CSS** - Framework de utilidades CSS
- **Shadcn UI** - Componentes UI accesibles
- **Radix UI** - Primitivos headless
- **Lucide React** - Iconos modernos

## Documentación Adicional

- 📖 `README.md` - Información general del proyecto
- 🚀 `DEPLOYMENT.md` - Guía de despliegue en Vercel
- 🎨 `CUSTOMIZATION.md` - Guía completa de personalización

## Soporte

### Documentación Oficial
- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn UI](https://ui.shadcn.com)
- [TypeScript](https://www.typescriptlang.org/docs)

### Problemas Comunes

**El servidor no inicia**
```bash
# Limpia node_modules e reinstala
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

**Errores de TypeScript**
```bash
# Verifica errores
npx tsc --noEmit
```

**Errores de ESLint**
```bash
# Auto-fix cuando sea posible
npm run lint -- --fix
```

## ¿Listo para Desplegar?

Una vez que hayas personalizado el sitio:

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Importa tu repositorio
4. ¡Deploy automático!

Ver guía completa en `DEPLOYMENT.md`

---

**¡Disfruta construyendo tu sitio web de hotel! 🏨✨**

