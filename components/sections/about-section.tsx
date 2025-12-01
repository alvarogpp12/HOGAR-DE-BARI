import { Button } from '@/components/ui/button'

export function AboutSection() {
	return (
		<section id='metodo' className='bg-[#F9F1E8] py-20'>
			<div className='container mx-auto px-4'>
				<div className='mb-12 text-center'>
					<h2 className='mb-6 font-serif text-4xl font-bold text-[#2c2c2c] md:text-5xl'>
						El Método HDB: primero escuchar, luego decidir juntos
					</h2>
				</div>

				<div className='mx-auto max-w-4xl space-y-8'>
					<p className='text-lg leading-relaxed text-[#2c2c2c]'>
						Cada persona es diferente. Hay quien necesita más apoyo físico,
						quien necesita más ayuda emocional, quien se desorienta si cambian
						las rutinas, quien disfruta de mucha actividad…
					</p>

					<p className='text-lg font-semibold leading-relaxed text-[#2c2c2c]'>
						El Método HDB consiste en algo muy sencillo, pero que no siempre se
						hace:
					</p>

					<div className='space-y-6'>
						<div className='flex gap-4'>
							<div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#909d7b] font-bold text-white'>
								1
							</div>
							<div>
								<h3 className='mb-2 text-xl font-bold text-[#2c2c2c]'>
									Primero escuchamos:
								</h3>
								<p className='leading-relaxed text-[#6b6b6b]'>
									os pedimos que nos contéis vuestra historia y la de vuestro
									familiar. Lo que os preocupa, lo que ha funcionado y lo que
									no.
								</p>
							</div>
						</div>

						<div className='flex gap-4'>
							<div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#909d7b] font-bold text-white'>
								2
							</div>
							<div>
								<h3 className='mb-2 text-xl font-bold text-[#2c2c2c]'>
									Luego valoramos con el equipo qué apoyos necesita:
								</h3>
								<p className='leading-relaxed text-[#6b6b6b]'>
									en salud, en su día a día, en su forma de relacionarse, en su
									bienestar.
								</p>
							</div>
						</div>

						<div className='flex gap-4'>
							<div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#909d7b] font-bold text-white'>
								3
							</div>
							<div>
								<h3 className='mb-2 text-xl font-bold text-[#2c2c2c]'>
									Y a partir de ahí diseñamos un plan:
								</h3>
								<p className='leading-relaxed text-[#6b6b6b]'>
									horarios, actividades, terapias, rutinas… todo con un objetivo
									claro: que la persona esté mejor y que la familia pueda estar
									tranquila confiando en HdB.
								</p>
							</div>
						</div>
					</div>

					<div className='rounded-lg border-l-4 border-[#909d7b] bg-white p-6'>
						<p className='text-lg font-semibold text-[#2c2c2c]'>
							Este plan no se queda "guardado en un cajón": lo revisamos con
							vosotros y lo vamos adaptando cuando cambian las necesidades.
						</p>
					</div>

					<div className='text-center'>
						<Button
							size='lg'
							className='bg-[#909d7b] text-white hover:bg-[#7a8766]'
							asChild
						>
							<a href='#metodo-detallado'>
								Quiero entender mejor el Método HDB →
							</a>
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}

