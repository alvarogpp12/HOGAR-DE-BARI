import { Users, Lightbulb, Heart, Target, Award } from 'lucide-react'

const valores = [
	{
		icon: Users,
		title: 'Cuidado personalizado',
		description:
			'Cada persona merece una atención única. Escuchamos, comprendemos y adaptamos nuestros programas a las necesidades individuales de cada residente, ofreciendo un acompañamiento humano, cercano y profesional.',
	},
	{
		icon: Lightbulb,
		title: 'Inclusión Digital',
		description:
			'Utilizamos la tecnología como herramienta de inclusión. Nuestro programa de redes sociales fomenta la comunicación, la creatividad y el aprendizaje digital, abriendo nuevas vías para relacionarse de forma segura y responsable.',
	},
	{
		icon: Heart,
		title: 'Bienestar',
		description:
			'El equilibrio entre cuerpo y mente es fundamental. Por ello, desarrollamos programas personalizados de salud física y emocional, guiados por profesionales en medicina, fisioterapia, nutrición y psicología, promoviendo un estilo de vida saludable.',
	},
	{
		icon: Target,
		title: 'Trabajo en equipo',
		description:
			'Creemos en la fuerza de la convivencia intergeneracional. A través del programa "Somos Amigos", impulsamos la integración de los residentes en la vida universitaria y social, fortaleciendo los lazos entre generaciones y fomentando la empatía y la cooperación.',
	},
	{
		icon: Award,
		title: 'Excelencia',
		description:
			'Nuestro equipo interdisciplinario trabaja de forma coordinada para ofrecer cuidados de alta calidad, garantizando el bienestar, la seguridad y confianza. Cada gesto y cada decisión reflejan nuestro compromiso con la excelencia profesional y humana.',
	},
]

export function ValoresSection() {
	return (
		<section id='valores' className='bg-[#F9F1E8] py-20'>
			<div className='container mx-auto px-4'>
				<div className='mb-16 text-center'>
					<h2 className='mb-4 font-serif text-4xl font-bold text-[#2c2c2c] md:text-5xl'>
						Valores
					</h2>
				</div>

				<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
					{valores.map((valor, index) => {
						const Icon = valor.icon
						return (
							<div
								key={index}
								className='rounded-lg bg-[#909d7b] p-8 text-white transition-transform duration-300 hover:scale-105'
							>
								<div className='mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/20'>
									<Icon className='h-8 w-8 text-white' />
								</div>
								<h3 className='mb-4 font-serif text-2xl font-bold'>
									{valor.title}
								</h3>
								<p className='leading-relaxed text-white/90'>
									{valor.description}
								</p>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

