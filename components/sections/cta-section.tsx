import { Button } from '@/components/ui/button'

export function CTASection() {
	return (
		<section className='bg-[#909d7b] py-20'>
			<div className='container mx-auto px-4'>
				<div className='mx-auto max-w-4xl text-center'>
					<h2 className='mb-4 font-serif text-4xl font-bold text-white md:text-5xl'>
						Comienza el Viaje Hoy
					</h2>
					<p className='mb-6 text-xl text-white md:text-2xl'>
						¿Listo para comenzar el viaje hacia el desarrollo pleno de tu hijo?
					</p>
					<p className='mb-8 text-lg text-white'>
						Bienvenido al Hogar de Bari, donde cada persona encuentra un espacio
						para crecer, aprender y prosperar.
					</p>
					<Button
						size='lg'
						asChild
						className='bg-white text-[#2c2c2c] hover:bg-white/90'
					>
						<a href='#contacto'>Contáctanos</a>
					</Button>
				</div>
			</div>
		</section>
	)
}

