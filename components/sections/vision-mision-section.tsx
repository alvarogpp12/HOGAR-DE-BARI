export function VisionMisionSection() {
	return (
		<section id='vision-mision' className='bg-white py-20'>
			<div className='container mx-auto px-4'>
				{/* Banner HOGAR DE BARI */}
				<div className='mb-16 rounded-lg bg-[#909d7b] py-16 text-center'>
					<h2 className='font-serif text-5xl font-bold text-white md:text-6xl lg:text-7xl'>
						HOGAR DE BARI
					</h2>
				</div>

				{/* Visión y Misión */}
				<div className='grid gap-12 lg:grid-cols-2'>
					{/* Visión */}
					<div className='space-y-6'>
						<h3 className='font-serif text-4xl font-bold text-[#2c2c2c]'>
							Visión
						</h3>
						<div className='space-y-4 text-lg leading-relaxed text-[#6b6b6b]'>
							<p>
								Ser un referente en el cuidado y la integración de personas con
								discapacidad, donde cada residente encuentre una vida con
								propósito, participación y crecimiento personal con la ayuda de
								nuestros programas.
							</p>
							<p>
								Queremos que Hogar de Bari sea reconocido como modelo de
								innovación social, colaboración y excelencia en el cuidado.
							</p>
						</div>
					</div>

					{/* Línea divisoria vertical */}
					<div className='hidden lg:block'>
						<div className='h-full w-px bg-[#909d7b]/30'></div>
					</div>

					{/* Línea divisoria horizontal en móvil */}
					<div className='lg:hidden'>
						<div className='h-px w-full bg-[#909d7b]/30'></div>
					</div>

					{/* Misión */}
					<div className='space-y-6 lg:col-start-2 lg:row-start-1'>
						<h3 className='font-serif text-4xl font-bold text-[#2c2c2c]'>
							Misión
						</h3>
						<div className='space-y-4 text-lg leading-relaxed text-[#6b6b6b]'>
							<p>
								Ofrecer un entorno integral, acogedor y estimulante donde las
								personas con discapacidad intelectual puedan desarrollar su
								autonomía, fortalecer su bienestar y participar activamente en
								la vida social de Sevilla.
							</p>
							<p>
								Nos comprometemos con un acompañamiento profesional y humano que
								promueve la inclusión, el desarrollo social y la felicidad de
								cada residente.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

