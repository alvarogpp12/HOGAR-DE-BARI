import Image from 'next/image'

export function AboutSection() {
	return (
		<section id='quienes-somos' className='bg-[#F9F1E8] py-20'>
			<div className='container mx-auto px-4'>
				<div className='mb-12 text-center'>
					<h2 className='mb-4 font-serif text-4xl font-bold text-[#2c2c2c] md:text-5xl'>
						Quienes somos
					</h2>
					<p className='mx-auto mb-6 max-w-3xl text-xl font-bold text-[#909d7b] md:text-2xl'>
						APOSTAMOS POR LA INTEGRACIÓN DE NUESTROS RESIDENTES EN LA COMUNIDAD
						UNIVERSITARIA
					</p>
					<p className='mx-auto max-w-2xl text-lg uppercase tracking-wide text-[#6b6b6b]'>
						Centro para personas con discapacidad
					</p>
				</div>

				<div className='grid gap-12 md:grid-cols-2 md:items-center'>
					<div className='relative aspect-[4/3] overflow-hidden rounded-lg'>
						<Image
							src='https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2073'
							alt='Hogar de Bari - Instalaciones'
							fill
							className='object-cover'
							sizes='(max-width: 768px) 100vw, 50vw'
						/>
					</div>

					<div className='space-y-6'>
						<p className='text-lg leading-relaxed text-[#2c2c2c]'>
							Descubre la cálida y acogedora residencia, diseñada para fomentar
							la capacidad de relacionarse y el entretenimiento. Con ubicaciones
							estratégicas, Hogar de Bari está equipado con instalaciones
							modernas, jardines muy amplios, piscina adaptada y segura en el
							corazón de Sevilla, creando un ambiente propicio para el
							desarrollo integral de nuestros residentes.
						</p>

						<div className='border-l-4 border-[#909d7b] bg-white p-6'>
							<p className='font-semibold text-[#2c2c2c]'>
								Nuestro compromiso es crear un espacio donde cada persona pueda
								crecer, aprender y prosperar en un ambiente de respeto y
								dignidad.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

