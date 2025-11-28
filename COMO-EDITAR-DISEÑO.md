# 🎨 Guía Rápida para Editar el Diseño

## 📁 Archivo Principal de Configuración

**Ubicación:** `/config/design-config.ts`

Este archivo controla TODO el diseño visual del sitio web.

---

## 🚀 Cómo Hacer Cambios Rápidos

### 1️⃣ MOVER EL LOGO

**Quiero mover el logo a la izquierda:**
```typescript
logo: {
  posicionHorizontal: '-20px',  // Más negativo = más a la izquierda
}
```

**Quiero mover el logo a la derecha:**
```typescript
logo: {
  posicionHorizontal: '10px',   // Más positivo = más a la derecha
}
```

**Quiero el logo más grande:**
```typescript
logo: {
  tamaño: '150px',  // Era 115px, ahora más grande
}
```

---

### 2️⃣ CAMBIAR COLORES

**Archivo:** `config/design-config.ts` → sección `colors`

```typescript
colors: {
  blanco: '#ffffff',      // Color blanco
  crema: '#F9F1E8',       // Color crema/beige
  verde: '#645D1E',       // Verde acento
  verdeOscuro: '#422B1C', // Verde oscuro para textos
}
```

💡 **Consejo:** Usa un selector de color online para obtener códigos HEX.

---

### 3️⃣ AJUSTAR ESPACIOS

**Aumentar espacio entre secciones:**
```typescript
contenedores: {
  espacioEntreSecciones: '120px',  // Antes: 80px
}
```

**Cambiar márgenes laterales:**
```typescript
contenedores: {
  margenLateralMovil: '20px',    // Más espacio en móvil
  margenLateralDesktop: '48px',  // Más espacio en desktop
}
```

---

### 4️⃣ MODIFICAR EL HEADER

**Cambiar altura del header:**
```typescript
header: {
  altura: '100px',  // Antes: 96px
}
```

**Espaciar más el menú:**
```typescript
menu: {
  espaciadoItems: '50px',  // Antes: 40px
}
```

**Texto del menú más grande:**
```typescript
menu: {
  tamañoTexto: '18px',  // Antes: 16px
}
```

---

### 5️⃣ CAMBIAR IMAGEN DEL HERO

```typescript
hero: {
  imagenFondo: 'URL_DE_TU_IMAGEN',
  oscurecerImagen: '0.6',  // 0 = claro, 1 = muy oscuro
}
```

---

## 🎯 PROMPTS PARA PEDIRME CAMBIOS

Copia y pega estos ejemplos adaptándolos a lo que necesites:

### Para el Logo:
- "Mueve el logo 25px a la izquierda"
- "Haz el logo de 140px de altura"
- "Centra el logo verticalmente en el header"

### Para Colores:
- "Cambia el verde oscuro a #3B2616"
- "Usa #E5D9CC como color crema"
- "Haz el verde más claro, tipo #7A7330"

### Para Espacios:
- "Aumenta el espacio entre secciones a 100px"
- "Reduce los márgenes en móvil a 12px"
- "El menú debe tener 60px de separación entre items"

### Para Tamaños:
- "Haz el header de 85px de altura"
- "Los títulos H1 deben ser de 64px en desktop"
- "Botones grandes de 56px de altura"

### Para Imágenes:
- "Bordes más redondeados, 12px"
- "Oscurece más la imagen del hero (0.7)"
- "Cambia la relación de aspecto a 16:9"

---

## ⚠️ IMPORTANTE

Después de editar `design-config.ts`, debes:

1. **Guardar el archivo** (Ctrl+S o Cmd+S)
2. **Recargar el navegador** (F5 o Ctrl+R)

Si los cambios no se ven, es posible que necesites:
- Limpiar caché del navegador
- Reiniciar el servidor de desarrollo (`npm run dev`)

---

## 📞 ¿Necesitas Ayuda?

Si algo no funciona o necesitas cambios más complejos, simplemente dime:

**"Quiero que [descripción del cambio]"**

Ejemplos:
- "Quiero que el logo sea el doble de grande"
- "Quiero cambiar todos los colores verdes a azul"
- "Quiero que el hero ocupe solo el 70% de la pantalla"
- "Quiero más espacio arriba y abajo del contenido"

---

## 🎨 Recursos Útiles

**Para elegir colores:**
- [Coolors.co](https://coolors.co) - Generador de paletas
- [Adobe Color](https://color.adobe.com) - Rueda de colores

**Para medir píxeles en pantalla:**
- Usa las herramientas de desarrollo del navegador (F12)
- Click derecho → Inspeccionar elemento

---

¡Listo! Con este archivo puedes controlar todo el diseño visual sin tocar código complicado. 🚀

