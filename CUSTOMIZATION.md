# Guía de Personalización

Esta guía te ayudará a personalizar el sitio web para tu hotel.

## 🎨 Cambiar Colores y Estilos

### Esquema de Colores

Edita `/app/globals.css` para cambiar los colores principales:

```css
:root {
  --primary: 240 5.9% 10%;        /* Color principal (botones, enlaces) */
  --secondary: 240 4.8% 95.9%;    /* Color secundario (fondos) */
  --accent: 240 4.8% 95.9%;       /* Color de acento */
  /* ... más colores */
}
```

### Fuentes

En `/app/layout.tsx`, puedes cambiar las fuentes:

```typescript
// Cambiar Inter por otra fuente sans-serif
import { Montserrat } from 'next/font/google'

// Cambiar Playfair Display por otra serif
import { Merriweather } from 'next/font/google'
```

[Explora fuentes en Google Fonts](https://fonts.google.com)

## 📝 Cambiar Contenido

### Información del Hotel

Edita `/components/footer.tsx` y `/components/sections/contact-section.tsx`:

```typescript
// Dirección, teléfono, email, redes sociales
```

### Habitaciones

En `/components/sections/rooms-section.tsx`:

```typescript
const rooms: Room[] = [
  {
    id: '1',
    name: 'Tu Suite',
    description: 'Tu descripción',
    price: 250,
    image: 'url-de-tu-imagen',
    amenities: ['Wi-Fi', 'Desayuno', ...],
    capacity: 2,
  },
  // Agrega más habitaciones...
]
```

### Servicios

En `/components/sections/services-section.tsx`:

```typescript
const services = [
  {
    icon: Wifi,  // Iconos de lucide-react
    title: 'Tu Servicio',
    description: 'Tu descripción',
  },
  // Agrega más servicios...
]
```

## 🖼️ Imágenes

### Opción 1: Usar tus propias imágenes

1. Coloca las imágenes en `/public/images/`
2. Actualiza las rutas:

```typescript
// Cambiar de:
src='https://images.unsplash.com/photo-...'

// A:
src='/images/mi-hotel.jpg'
```

### Opción 2: Usar un CDN

1. Sube tus imágenes a Cloudinary, Imgix, etc.
2. Actualiza `/next.config.ts`:

```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'tu-cdn.com',
    },
  ],
}
```

### Optimización de Imágenes

- **Formato recomendado**: WebP o AVIF
- **Tamaño recomendado**:
  - Hero: 1920x1080px
  - Habitaciones: 800x600px
  - Galería: 1200x800px
- **Compresión**: Usa [TinyPNG](https://tinypng.com) o [Squoosh](https://squoosh.app)

## 📱 Navegación

Edita `/components/navigation.tsx`:

```typescript
const navItems = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#habitaciones', label: 'Habitaciones' },
  // Agrega más secciones...
]
```

## 🔧 Funcionalidades Adicionales

### Formulario de Contacto Funcional

1. Crea un API Route:

```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
})

export async function POST(request: Request) {
  const body = await request.json()
  
  const validation = schema.safeParse(body)
  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error },
      { status: 400 }
    )
  }

  // Enviar email con tu servicio preferido
  // await sendEmail(validation.data)

  return NextResponse.json({ success: true })
}
```

2. Actualiza el formulario para usar el endpoint:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  const formData = new FormData(e.currentTarget)
  
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Object.fromEntries(formData)),
  })
  
  // Manejar respuesta...
}
```

### Sistema de Reservas

Si quieres agregar un sistema de reservas:

1. **Opción 1**: Integrar con Booking.com, Airbnb API
2. **Opción 2**: Construir tu propio sistema:
   - Base de datos (Prisma + PostgreSQL)
   - Calendario de disponibilidad
   - Sistema de pagos (Stripe)

### Multiidioma

Para soporte de múltiples idiomas:

```bash
npm install next-intl
```

[Guía de next-intl](https://next-intl-docs.vercel.app)

### Analytics

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### SEO

1. **Actualiza metadata en cada página**:

```typescript
// app/page.tsx
export const metadata: Metadata = {
  title: 'Tu Hotel | Inicio',
  description: 'Tu descripción',
  keywords: ['hotel', 'tu ciudad', ...],
  openGraph: {
    images: ['/og-image.jpg'],
  },
}
```

2. **Agrega un sitemap**:

```typescript
// app/sitemap.ts
export default function sitemap() {
  return [
    {
      url: 'https://tuhotel.com',
      lastModified: new Date(),
    },
    // más URLs...
  ]
}
```

3. **Agrega robots.txt**:

```typescript
// app/robots.ts
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://tuhotel.com/sitemap.xml',
  }
}
```

## 🎯 Nuevas Secciones

### Agregar "Testimonios"

1. Crea el componente:

```typescript
// components/sections/testimonials-section.tsx
export function TestimonialsSection() {
  // Tu componente
}
```

2. Impórtalo en la página principal:

```typescript
// app/page.tsx
import { TestimonialsSection } from '@/components/sections/testimonials-section'

export default function Home() {
  return (
    <main>
      {/* ... otras secciones */}
      <TestimonialsSection />
    </main>
  )
}
```

### Agregar "Ubicación" (Mapa)

Usa Google Maps Embed:

```typescript
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  className="h-96 w-full"
  loading="lazy"
/>
```

## 📊 Performance

### Lazy Loading

Para componentes pesados:

```typescript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(
  () => import('@/components/heavy-component'),
  { loading: () => <p>Cargando...</p> }
)
```

### Caché de Imágenes

Next.js cachea automáticamente las imágenes optimizadas.

## 🐛 Debugging

```bash
# Ver errores de build
npm run build

# Ver errores de TypeScript
npx tsc --noEmit

# Ver problemas de ESLint
npm run lint
```

## 💡 Consejos

1. **Mobile First**: Diseña primero para móvil
2. **Accesibilidad**: Usa etiquetas semánticas y ARIA labels
3. **Performance**: Optimiza imágenes y usa lazy loading
4. **SEO**: Completa metadata y Open Graph tags
5. **Testing**: Prueba en diferentes navegadores y dispositivos

## 📚 Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Shadcn UI Components](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)
- [React Docs](https://react.dev)

