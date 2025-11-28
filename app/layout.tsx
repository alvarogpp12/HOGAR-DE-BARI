import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
})

const playfair = Playfair_Display({
	subsets: ['latin'],
	variable: '--font-playfair',
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Hotel Boutique | Experiencia de Lujo',
	description:
		'Disfruta de una experiencia única en nuestro hotel boutique. Habitaciones elegantes, servicio excepcional y una ubicación privilegiada.',
	keywords: ['hotel', 'boutique', 'lujo', 'vacaciones', 'alojamiento'],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='es' className='scroll-smooth'>
			<body
				className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
			>
				{children}
			</body>
		</html>
	)
}

