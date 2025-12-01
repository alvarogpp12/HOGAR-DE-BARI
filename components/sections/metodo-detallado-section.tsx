import Image from 'next/image'
import { Button } from '@/components/ui/button'

const fases = [
	{
		numero: 1,
		titulo: 'Acogida y escucha',
		imagen: '/middle-aged-caucasian-woman-psychologist-listening-2025-11-19-14-33-58-utc.jpg',
		descripcion:
			'Empezamos sentándonos con la familia, sin prisas. Nos contáis quién es vuestro familiar, qué le gusta, qué le cuesta, qué ha pasado hasta ahora y qué esperáis del centro.',
		extra:
			'Si la persona puede participar, también hablamos con ella. Nos interesa conocerle más allá de los informes.',
	},
	{
		numero: 2,
		titulo: 'Evaluación completa',
		imagen: '/mother-and-preteen-daughter-in-individual-therapy-2024-12-08-03-08-20-utc.jpg',
		descripcion:
			'Después, nuestro equipo valora qué apoyos necesita en diferentes áreas: salud, autonomía en el día a día, comunicación, comportamiento, relaciones, emociones…',
		extra:
			'No se trata de "poner etiquetas", sino de entender bien en qué puntos podemos ayudar más.',
	},
	{
		numero: 3,
		titulo: 'Plan individual de apoyos',
		imagen: '/calendar-with-pencils-planning-concept-2025-03-08-07-25-16-utc.JPG',
		descripcion:
			'Con todo lo anterior, preparamos un plan claro:',
		lista: [
			'qué rutinas va a tener,',
			'qué tipo de ayuda necesitará,',
			'qué actividades le pueden venir bien,',
			'qué objetivos nos marcamos a corto y medio plazo.',
		],
		extra:
			'Este plan lo compartimos con la familia para asegurarnos de que estáis de acuerdo y que tiene sentido para todos.',
	},
	{
		numero: 4,
		titulo: 'Día a día en el centro',
		imagen: '/autonomia .jpg',
		descripcion:
			'Aquí es donde se ve de verdad el Método HDB: en las pequeñas cosas de cada día.',
		extra:
			'Cómo se levanta, quién le ayuda a vestirse, cómo se organiza la comida, qué hace por la tarde, cómo se gestionan los momentos de tensión…',
		extra2:
			'Nuestro equipo intenta que la persona se sienta en un lugar conocido, con rostros de confianza y una rutina que dé seguridad.',
	},
	{
		numero: 5,
		titulo: 'Revisión y comunicación',
		imagen: '/apoyo global.jpg',
		descripcion:
			'La vida cambia, y las personas también. Por eso revisamos regularmente cómo va todo: qué está funcionando, qué se puede mejorar, qué cambios han surgido.',
		extra:
			'Os lo contamos con claridad, sin ocultar problemas ni exagerar logros. Y si hay que ajustar algo del plan, se ajusta. Lo importante es que sintáis que caminamos juntos.',
	},
]

export function MetodoDetalladoSection() {
	return (
		<section id='metodo-detallado' className='bg-white py-20'>
			<div className='container mx-auto px-4'>
			<div className='mb-16 text-center'>
				<h2 className='mb-6 font-serif text-4xl font-bold text-[#2c2c2c] md:text-5xl'>
					Así es el Método HDB
				</h2>
				<p className='mx-auto max-w-3xl text-lg leading-relaxed text-[#6b6b6b]'>
					El Método HDB no es una teoría complicada, es nuestra forma de
					asegurar que tu familiar recibe lo que necesita y que tú sabes en
					todo momento qué estamos haciendo y por qué.
				</p>
			</div>

				<div className='mx-auto max-w-6xl space-y-16'>
					{fases.map((fase, index) => (
						<div
							key={index}
							className={`grid gap-8 md:grid-cols-2 md:items-center ${
								index % 2 === 1 ? 'md:flex-row-reverse' : ''
							}`}
						>
							{/* Imagen */}
							<div
								className={`relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg ${
									index % 2 === 1 ? 'md:order-2' : ''
								}`}
							>
								<Image
									src={fase.imagen}
									alt={`Fase ${fase.numero}: ${fase.titulo}`}
									fill
									className='object-cover'
									sizes='(max-width: 768px) 100vw, 50vw'
								/>
							</div>

							{/* Contenido */}
							<div className={index % 2 === 1 ? 'md:order-1' : ''}>
								<div className='mb-4 flex items-center gap-4'>
									<div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#909d7b] font-serif text-2xl font-bold text-white'>
										{fase.numero}
									</div>
									<h3 className='font-serif text-3xl font-bold text-[#2c2c2c]'>
										{fase.titulo}
									</h3>
								</div>

								<div className='space-y-4'>
									<p className='text-lg leading-relaxed text-[#2c2c2c]'>
										{fase.descripcion}
									</p>

									{fase.lista && (
										<ul className='ml-6 space-y-2'>
											{fase.lista.map((item, i) => (
												<li
													key={i}
													className='list-disc text-lg text-[#6b6b6b]'
												>
													{item}
												</li>
											))}
										</ul>
									)}

									{fase.extra && (
										<p className='leading-relaxed text-[#6b6b6b]'>
											{fase.extra}
										</p>
									)}

									{fase.extra2 && (
										<p className='leading-relaxed text-[#6b6b6b]'>
											{fase.extra2}
										</p>
									)}
								</div>
							</div>
						</div>
					))}
				</div>

			{/* CTA final */}
			<div className='mt-20 text-center'>
				<Button
					size='lg'
					className='bg-[#909d7b] text-white hover:bg-[#7a8766]'
					asChild
				>
					<a href='#contacto'>Quiero hablar sobre nuestro caso →</a>
				</Button>
			</div>
			</div>
		</section>
	)
}

