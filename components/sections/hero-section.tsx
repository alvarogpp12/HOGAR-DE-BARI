import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
	return (
		<section id='inicio' className='relative h-screen w-full'>
			<Image
				src='https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2076'
				alt='Hogar de Bari'
				fill
				priority
				className='object-cover'
				sizes='100vw'
			/>
			<div className='absolute inset-0 bg-black/50' />

			<div className='relative flex h-full flex-col items-center justify-center px-4 text-center text-white'>
				<p className='mb-4 text-sm uppercase tracking-widest text-white/90 md:text-base'>
					Residencia para Personas con Discapacidad Intelectual
				</p>
				<h1 className='mb-6 font-serif text-5xl font-bold leading-tight text-white md:text-7xl'>
					Bienvenido al
					<br />
					Hogar de Bari
				</h1>
				<p className='mb-8 max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl'>
					En HdB, ofrecemos un entorno seguro, humano y profesional donde cada
					persona es tratada con respeto, cariño y con un plan de vida propio.
				</p>
				<div className='flex flex-col gap-4 sm:flex-row'>
					<Button
						size='lg'
						className='bg-[#909d7b] text-white hover:bg-[#7a8766]'
						asChild
					>
						<a href='#contacto'>Contáctanos</a>
					</Button>
					<Button
						size='lg'
						variant='outline'
						className='border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white/20'
						asChild
					>
						<a href='#quienes-somos'>Conocer Más</a>
					</Button>
				</div>

				<a
					href='#quienes-somos'
					className='absolute bottom-8 animate-bounce'
					aria-label='Scroll down'
				>
					<ChevronDown className='h-8 w-8 text-white' />
				</a>
			</div>
		</section>
	)
}

