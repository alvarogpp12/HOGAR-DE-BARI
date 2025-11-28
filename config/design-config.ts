/**
 * ╔═══════════════════════════════════════════════════════════════╗
 * ║  CONFIGURACIÓN DE DISEÑO - HOGAR DE BARI                      ║
 * ║  Edita este archivo para cambiar posiciones, tamaños, etc.    ║
 * ╚═══════════════════════════════════════════════════════════════╝
 */

export const designConfig = {
	/**
	 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	 * 🎨 COLORES DE LA MARCA - PALETA MODERNA
	 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	 * Cambia los códigos HEX para modificar los colores del sitio
	 */
	colors: {
		// Colores principales
		fondoCrema: '#F9F1E8',       // Fondo suave y cálido
		boton: '#909d7b',            // Verde moderno para botones
		textoOscuro: '#2c2c2c',      // Gris oscuro moderno para textos
		blanco: '#ffffff',           // Blanco puro
		
		// Colores de estado
		botonHover: '#7a8766',       // Botón al pasar el ratón (más oscuro)
		textoSecundario: '#6b6b6b',  // Texto secundario (gris medio)
	},

	/**
	 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	 * 📐 HEADER / BARRA DE NAVEGACIÓN
	 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	 */
	header: {
		// Altura total del header
		altura: '96px', // Puedes usar: '80px', '100px', '120px', etc.

		// LOGO
		logo: {
			// Tamaño del logo (altura)
			tamaño: '115px', // Ajusta: '80px', '100px', '150px', '200px'

			// Posición horizontal del logo
			// Valores positivos lo mueven a la DERECHA
			// Valores negativos lo mueven a la IZQUIERDA
			posicionHorizontal: '-16px', // Ejemplo: '0px', '-10px', '-20px', '10px'

			// Posición vertical del logo
			posicionVertical: 'center', // Opciones: 'top', 'center', 'bottom'
		},

		// MENÚ DE NAVEGACIÓN
		menu: {
			// Espacio entre items del menú
			espaciadoItems: '40px', // Ajusta: '20px', '30px', '50px', '60px'

			// Tamaño del texto del menú
			tamañoTexto: '16px', // Ajusta: '14px', '16px', '18px', '20px'

			// Espacio del menú desde el borde derecho
			margenDerecha: '16px', // Ajusta: '0px', '20px', '40px'
		},
	},

	/**
	 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	 * 🏠 SECCIÓN HERO (Banner Principal)
	 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	 */
	hero: {
		// Altura del banner principal
		altura: '100vh', // '100vh' = Pantalla completa. También: '80vh', '600px', '800px'

		// Imagen de fondo
		imagenFondo:
			'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2076',

		// Oscurecer la imagen (0 = sin oscurecer, 1 = totalmente negro)
		oscurecerImagen: '0.5', // Valores: '0', '0.3', '0.5', '0.7', '1'

		// Posición del contenido
		alineacionContenido: 'center', // Opciones: 'left', 'center', 'right'

		// Tamaño del título principal
		tamañoTitulo: {
			movil: '48px', // Tamaño en móvil
			desktop: '72px', // Tamaño en desktop
		},
	},

	/**
	 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	 * 📦 CONTENEDORES / MÁRGENES GENERALES
	 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	 */
	contenedores: {
		// Ancho máximo del contenido
		anchoMaximo: '1400px', // Opciones: '1200px', '1400px', '1600px', 'full'

		// Márgenes laterales en móvil
		margenLateralMovil: '16px', // Ajusta: '12px', '16px', '20px', '24px'

		// Márgenes laterales en desktop
		margenLateralDesktop: '32px', // Ajusta: '24px', '32px', '48px', '64px'

		// Espacio vertical entre secciones
		espacioEntreSecciones: '80px', // Ajusta: '60px', '80px', '100px', '120px'
	},

	/**
	 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	 * 🖼️ IMÁGENES Y GALERÍAS
	 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	 */
	imagenes: {
		// Borde redondeado de las imágenes
		bordeRedondeado: '8px', // Opciones: '0px', '4px', '8px', '12px', '16px', '50%'

		// Relación de aspecto de imágenes
		relacionAspecto: {
			// Para imágenes de sección "Quiénes somos"
			aboutSection: '4/3', // Opciones: '16/9', '4/3', '1/1', '3/4'

			// Para tarjetas de servicios
			servicios: '16/9',
		},
	},

	/**
	 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	 * 📝 TIPOGRAFÍA
	 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	 */
	tipografia: {
		// Tamaños de títulos
		titulos: {
			h1: {
				movil: '40px',
				desktop: '56px',
			},
			h2: {
				movil: '32px',
				desktop: '48px',
			},
			h3: {
				movil: '24px',
				desktop: '32px',
			},
		},

		// Tamaño del texto normal
		textoNormal: '16px',

		// Tamaño del texto pequeño
		textoPequeño: '14px',
	},

	/**
	 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	 * 🔘 BOTONES
	 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	 */
	botones: {
		// Borde redondeado de botones
		bordeRedondeado: '6px', // Opciones: '0px', '4px', '6px', '8px', '50px'

		// Tamaño de botones
		tamaños: {
			pequeño: {
				altura: '36px',
				paddingHorizontal: '16px',
			},
			mediano: {
				altura: '44px',
				paddingHorizontal: '24px',
			},
			grande: {
				altura: '52px',
				paddingHorizontal: '32px',
			},
		},
	},

	/**
	 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	 * 🦶 FOOTER
	 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	 */
	footer: {
		// Espacio vertical del footer
		paddingVertical: '48px', // Ajusta: '32px', '48px', '64px', '80px'

		// Tamaño del texto del footer
		tamañoTexto: '14px', // Ajusta: '12px', '14px', '16px'
	},
}

/**
 * ╔═══════════════════════════════════════════════════════════════╗
 * ║  💡 PROMPTS PARA EDICIONES RÁPIDAS                            ║
 * ╚═══════════════════════════════════════════════════════════════╝
 * 
 * Usa estos prompts para pedirle cambios al diseño:
 * 
 * 📍 PARA MOVER EL LOGO:
 *    "Mueve el logo 20px a la izquierda"
 *    "Mueve el logo 10px a la derecha"
 *    "Centra el logo verticalmente"
 * 
 * 📏 PARA CAMBIAR TAMAÑOS:
 *    "Haz el logo más grande, 150px"
 *    "Reduce el header a 80px de altura"
 *    "Aumenta el espacio entre items del menú a 50px"
 * 
 * 🎨 PARA CAMBIAR COLORES:
 *    "Cambia el verde oscuro a #3B2616"
 *    "Usa #E8DFD5 como color crema"
 * 
 * 📐 PARA ESPACIADOS:
 *    "Aumenta el espacio entre secciones a 120px"
 *    "Reduce los márgenes laterales en móvil a 12px"
 * 
 * 🖼️ PARA IMÁGENES:
 *    "Haz las esquinas más redondeadas (16px)"
 *    "Cambia la imagen del hero a [URL]"
 *    "Oscurece más la imagen del hero (0.7)"
 * 
 */

