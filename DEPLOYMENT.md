# Guía de Despliegue en Vercel

Esta guía te ayudará a desplegar tu sitio web de Hotel Boutique en Vercel conectado con GitHub.

## Preparación

### 1. Subir el código a GitHub

```bash
# Inicializar git (si no lo has hecho)
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit: Hotel Boutique website"

# Crear un nuevo repositorio en GitHub y seguir las instrucciones para conectarlo
git remote add origin https://github.com/tu-usuario/tu-repo.git
git branch -M main
git push -u origin main
```

## Despliegue en Vercel

### Método 1: Dashboard de Vercel (Recomendado)

1. **Ir a Vercel**
   - Visita [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub

2. **Importar Proyecto**
   - Click en "Add New..." → "Project"
   - Selecciona tu repositorio de GitHub
   - Click en "Import"

3. **Configuración del Proyecto**
   - **Framework Preset**: Next.js (detectado automáticamente)
   - **Root Directory**: `./` (por defecto)
   - **Build Command**: `npm run build` (por defecto)
   - **Output Directory**: `.next` (por defecto)
   - **Install Command**: `npm install --legacy-peer-deps`

4. **Variables de Entorno (Opcional)**
   - No son necesarias para la versión básica
   - Si agregas servicios externos (email, analytics, etc.), añádelas aquí

5. **Deploy**
   - Click en "Deploy"
   - Espera 2-3 minutos
   - ¡Tu sitio estará en vivo!

### Método 2: Vercel CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login a Vercel
vercel login

# Deploy
vercel

# Deploy a producción
vercel --prod
```

## Post-Despliegue

### Configurar Dominio Personalizado

1. En el dashboard de Vercel, ve a tu proyecto
2. Click en "Settings" → "Domains"
3. Agrega tu dominio personalizado
4. Sigue las instrucciones para configurar los DNS

### Configurar Variables de Entorno

Si necesitas agregar variables de entorno:

1. Ve a "Settings" → "Environment Variables"
2. Agrega las variables necesarias
3. Re-deploy para aplicar los cambios

## Actualizaciones Automáticas

Vercel está configurado para:
- ✅ Deploy automático en cada push a `main`
- ✅ Preview deployments para cada Pull Request
- ✅ HTTPS automático
- ✅ CDN global
- ✅ Optimización automática de imágenes

## Personalización

### Cambiar Imágenes

1. **Opción 1: Usar tu propio CDN**
   - Sube las imágenes a tu CDN
   - Actualiza `next.config.ts` con tu dominio
   - Actualiza las rutas en los componentes

2. **Opción 2: Usar la carpeta public**
   - Coloca imágenes en `/public/images/`
   - Actualiza las rutas: `/images/nombre.jpg`
   - Las imágenes se optimizarán automáticamente

### Actualizar Contenido

Para cambiar textos, precios, etc.:
- **Habitaciones**: `components/sections/rooms-section.tsx`
- **Servicios**: `components/sections/services-section.tsx`
- **Galería**: `components/sections/gallery-section.tsx`
- **Contacto**: `components/sections/contact-section.tsx`
- **Footer**: `components/footer.tsx`

## Monitoreo

Vercel te proporciona:
- 📊 Analytics (en el plan Pro)
- 🐛 Error tracking
- ⚡ Performance metrics
- 📈 Visitor statistics

Accede desde el dashboard: `Analytics` y `Speed Insights`

## Solución de Problemas

### Build falla

```bash
# Probar el build localmente
npm run build

# Si funciona localmente pero falla en Vercel,
# verifica las variables de entorno
```

### Imágenes no se cargan

- Verifica que las URLs en `next.config.ts` estén en `remotePatterns`
- Para Unsplash: ya está configurado
- Para otros dominios: agrégalos a la configuración

### Formulario de contacto no funciona

El formulario actual es solo frontend. Para hacerlo funcional:

1. Crea un API Route en `/app/api/contact/route.ts`
2. Integra con un servicio de email (SendGrid, Resend, etc.)
3. Actualiza el formulario para usar el endpoint

## Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Shadcn UI Docs](https://ui.shadcn.com)

## Soporte

Para problemas específicos:
- Next.js: [GitHub Issues](https://github.com/vercel/next.js/issues)
- Vercel: [Support](https://vercel.com/support)

