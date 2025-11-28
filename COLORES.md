# Paleta de Colores - Hogar de Bari

## 🎨 Colores de la Marca

La paleta de colores está inspirada en la naturaleza; evoca calma, equilibrio y bienestar. Los tonos neutros y verdes transmiten cercanía y serenidad, reflejando la esencia acogedora de Hogar de Bari.

### Colores Principales

| Color | HEX | RGB | Uso |
|-------|-----|-----|-----|
| **Blanco** | `#ffffff` | `255, 255, 255` | Fondos, textos sobre fondos oscuros |
| **Crema** | `#F9F1E8` | `248, 241, 233` | Fondo principal, secciones alternas |
| **Verde** | `#645D1E` | `99, 93, 41` | Acentos, botones secundarios |
| **Verde Oscuro** | `#422B1C` | `63, 44, 30` | Texto principal, footer, navegación |

---

## 💻 Implementación en el Código

### Variables CSS (Tailwind)

```css
/* Crema de fondo */
--background: 35 50% 96%;  /* #F9F1E8 */

/* Verde oscuro para texto */
--foreground: 25 38% 13%;  /* #422B1C */

/* Verde oscuro para elementos principales */
--primary: 25 38% 13%;     /* #422B1C */

/* Crema para fondos de tarjetas */
--secondary: 35 50% 96%;   /* #F9F1E8 */

/* Verde para acentos */
--accent: 54 42% 26%;      /* #645D1E */
```

### Uso en Componentes

#### Fondos
```tsx
// Fondo crema
className="bg-background"

// Fondo verde oscuro
className="bg-[#422B1C]"

// Fondo blanco
className="bg-white"
```

#### Texto
```tsx
// Texto verde oscuro
className="text-foreground"

// Texto verde acento
className="text-accent"

// Texto crema sobre fondos oscuros
className="text-[#F9F1E8]"
```

#### Botones
```tsx
// Botón principal (verde oscuro)
className="bg-primary text-primary-foreground"

// Botón secundario (verde)
className="bg-accent text-accent-foreground"

// Botón outline
className="border border-primary text-primary"
```

---

## 🖋️ Tipografía

### Fuente Principal: "The Seasons"

**Nota:** Actualmente se usa **Cormorant Garamond** como fuente temporal.

Para implementar "The Seasons":

1. Coloca los archivos de fuente en `/public/fonts/`:
   - `TheSeasons-Regular.woff2`
   - `TheSeasons-Bold.woff2`

2. Actualiza `app/layout.tsx`:

```typescript
import localFont from 'next/font/local'

const theSeasons = localFont({
  src: [
    {
      path: '../public/fonts/TheSeasons-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/TheSeasons-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-seasons',
  display: 'swap',
})
```

### Uso de Fuentes

```tsx
// Fuente serif (The Seasons / Cormorant Garamond)
className="font-serif"

// Fuente sans-serif (Inter)
className="font-sans"
```

---

## 🎯 Aplicación Coherente

Estos colores y fuentes deben aplicarse de forma coherente en todos los soportes de comunicación para mantener la integridad y la armonía visual de la marca.

### Ejemplos de Uso

#### Hero Section
- Fondo: Imagen con overlay oscuro
- Texto: Blanco/Crema
- Botones: Verde oscuro con texto crema

#### Secciones Alternas
- Fondo par: Blanco
- Fondo impar: Crema (#F9F1E8)
- Texto: Verde oscuro (#422B1C)

#### Footer
- Fondo: Verde oscuro (#422B1C)
- Texto: Crema (#F9F1E8)
- Enlaces hover: Verde (#645D1E)

#### Tarjetas
- Fondo: Blanco
- Bordes: Crema más oscuro
- Iconos: Verde (#645D1E)
- Texto: Verde oscuro (#422B1C)

---

## 🔄 Cambios Aplicados

✅ Variables de color actualizadas en `app/globals.css`
✅ Configuración de fuentes en `app/layout.tsx`
✅ Logo integrado desde `/public/LOGO/Hogar de Bari.svg`
✅ Footer con fondo verde oscuro
✅ Navegación con logo responsive

---

## 📝 Pendiente

⏳ Agregar archivos de fuente "The Seasons" (actualmente usando Cormorant Garamond como placeholder)
⏳ Ajustar colores de botones si es necesario
⏳ Revisar contraste de accesibilidad

---

## 🎨 Visualización de Colores

```
████████  Blanco     #ffffff
████████  Crema      #F9F1E8
████████  Verde      #645D1E
████████  Verde OSC  #422B1C
```

