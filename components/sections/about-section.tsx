import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const pasos = [
	{
		numero: '01',
		titulo: 'Conocerte a ti y a tu familiar',
		descripcion:
			'Entrevista inicial + revisión de necesidades + historial + objetivos personales.',
	},
	{
		numero: '02',
		titulo: 'Diseño de un plan personalizado',
		descripcion:
			'Salud, psicología, terapias ocupacionales, ocio, autonomía, integración social.',
	},
	{
		numero: '03',
		titulo: 'Acompañamiento diario y cuidado integral',
		descripcion:
			'Vivienda adaptada, alimentación, medicación si hace falta, actividades, psicología, fisioterapia, ocio.',
	},
	{
		numero: '04',
		titulo: 'Desarrollo y autonomía',
		descripcion:
			'Talleres, actividades comunitarias, habilidades sociales, integración con entorno.',
	},
	{
		numero: '05',
		titulo: 'Revisiones periódicas + comunicación con la familia',
		descripcion:
			'Evaluaciones regulares, informes, reuniones, ajuste del plan cuando sea necesario.',
	},
	{
		numero: '06',
		titulo: 'Apoyo global a la persona y su familia',
		descripcion:
			'Acompañamiento, orientación, participación, respiro familiar si hace falta.',
	},
]

export function AboutSection() {
	return (
		<section id='quienes-somos' className='bg-[#F9F1E8] py-20'>
			<div className='container mx-auto px-4'>
				<div className='mb-16 text-center'>
					<h2 className='mb-6 font-serif text-4xl font-bold text-[#2c2c2c] md:text-5xl'>
						Nuestro método
					</h2>
					<p className='mx-auto max-w-3xl text-2xl font-medium text-[#909d7b] md:text-3xl'>
						Cómo trabajamos — un acompañamiento a medida
					</p>
				</div>

				<div className='mx-auto max-w-5xl space-y-8'>
					{pasos.map((paso, index) => (
						<div
							key={index}
							className='group rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg md:p-8'
						>
							<div className='flex flex-col gap-4 md:flex-row md:items-start md:gap-6'>
								<div className='flex items-center gap-4 md:gap-6'>
									<div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#909d7b] font-serif text-2xl font-bold text-white'>
										{paso.numero}
									</div>
									{index < pasos.length - 1 && (
										<ArrowRight className='hidden h-6 w-6 shrink-0 text-[#909d7b] md:block' />
									)}
								</div>

								<div className='flex-1 space-y-2'>
									<h3 className='font-serif text-xl font-bold text-[#2c2c2c] md:text-2xl'>
										{paso.titulo}
									</h3>
									<p className='text-base leading-relaxed text-[#6b6b6b] md:text-lg'>
										{paso.descripcion}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className='mt-16 rounded-lg bg-[#909d7b] p-8 text-center md:p-12'>
					<p className='mb-6 font-serif text-2xl font-bold text-white md:text-3xl'>
						¿Quieres que tu familiar tenga calidad de vida y tú tranquilidad?
					</p>
					<Button
						size='lg'
						className='bg-white text-[#909d7b] hover:bg-white/90'
						asChild
					>
						<a href='#contacto'>Contáctanos hoy</a>
					</Button>
				</div>
			</div>
		</section>
	)
}

