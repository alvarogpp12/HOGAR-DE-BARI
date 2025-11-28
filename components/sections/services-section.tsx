import Image from 'next/image'

const services = [
	{
		title: 'Introducción en las Redes Sociales',
		description:
			'Dotamos a los residentes de herramientas tecnológicas para relacionarse con personas de su edad. Incluye móvil personal y tablet con acceso controlado supervisado.',
		image:
			'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070',
	},
	{
		title: 'Estado Físico',
		description:
			'Programa de entrenamiento personalizado con cardiólogo, fisioterapeuta, nutricionista y monitores deportivos para mantener un estado saludable.',
		image:
			'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070',
	},
	{
		title: 'Integración',
		description:
			'Programa "SOMOS AMIGOS" basado en la integración total con la comunidad universitaria, compartiendo instalaciones con estudiantes.',
		image:
			'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2070',
	},
	{
		title: 'Instalaciones y Cuidados',
		description:
			'Trabajadora social, educadores, enfermería, fisioterapia, psicología, podología, estética y peluquería, terapia ocupacional.',
		image:
			'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053',
	},
	{
		title: 'Atención a Familias',
		description:
			'Apoyo integral y seguimiento continuo para las familias de nuestros residentes.',
		image:
			'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070',
	},
	{
		title: 'Respiro Familiar',
		description:
			'Servicio especializado para proporcionar descanso y apoyo a las familias.',
		image:
			'https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2069',
	},
	{
		title: 'Programas',
		description:
			'Variedad de programas especializados adaptados a las necesidades individuales.',
		image:
			'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070',
	},
	{
		title: 'Ocio',
		description:
			'Actividades recreativas y de entretenimiento para el desarrollo personal.',
		image:
			'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=2085',
	},
]

export function ServicesSection() {
	return (
		<section id='servicios' className='bg-white py-20'>
			<div className='container mx-auto px-4'>
				<div className='mb-16 text-center'>
					<h2 className='mb-4 font-serif text-4xl font-bold text-[#2c2c2c] md:text-5xl'>
						Nuestros Servicios
					</h2>
					<p className='mx-auto max-w-3xl text-xl font-bold text-[#909d7b] md:text-2xl'>
						CUIDADO PERSONALIZADO CON CADA UNO DE NUESTROS RESIDENTES
					</p>
				</div>

				<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
					{services.map((service, index) => (
						<div
							key={index}
							className='group relative aspect-[3/4] overflow-hidden rounded-lg'
						>
							{/* Imagen de fondo */}
							<Image
								src={service.image}
								alt={service.title}
								fill
								className='object-cover transition-transform duration-500 group-hover:scale-110'
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
							/>

							{/* Overlay con gradiente */}
							<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/90' />

							{/* Contenido de texto */}
							<div className='absolute inset-0 flex flex-col justify-end p-6'>
								<h3 className='mb-3 font-serif text-2xl font-bold text-white transition-transform duration-300 group-hover:translate-y-[-8px]'>
									{service.title}
								</h3>
								<p className='translate-y-4 text-sm leading-relaxed text-white/90 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
									{service.description}
								</p>
							</div>

							{/* Borde decorativo al hover */}
							<div className='absolute inset-0 border-2 border-[#909d7b] opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

