'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { ChevronDown, Clock, UserCheck, Users, MessageCircle, Phone, Mail } from 'lucide-react'

const beneficios = [
	{
		icon: Clock,
		titulo: 'Atención 24 horas',
		descripcion:
			'Siempre hay alguien pendiente. De día y de noche hay profesionales en el centro, preparados para actuar si ocurre cualquier cosa.',
	},
	{
		icon: UserCheck,
		titulo: 'Plan a medida',
		descripcion:
			'No hacemos "lo mismo para todos". Hablamos con vosotros, vemos qué necesita y qué le ayuda, y a partir de ahí marcamos rutinas y apoyos a su medida.',
	},
	{
		icon: Users,
		titulo: 'Profesionales',
		descripcion:
			'Psicología, enfermería, fisioterapia, educación… pero sobre todo personas que tratan a los residentes con respeto y paciencia.',
	},
	{
		icon: MessageCircle,
		titulo: 'Seguimiento continuo',
		descripcion:
			'No quieres enterarte de las cosas "cuando ya han pasado". Mantenemos el contacto, contamos cómo va todo y escuchamos vuestras dudas.',
	},
]

export function HeroSection() {
	return (
		<section id='inicio' className='relative min-h-screen w-full'>
			<Image
				src='https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2076'
				alt='Hogar de Bari'
				fill
				priority
				className='object-cover'
				sizes='100vw'
			/>
			<div className='absolute inset-0 bg-black/60' />

			<div className='relative flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center text-white'>
				<h1 className='mb-6 font-serif text-5xl font-bold leading-tight text-white md:text-7xl'>
					Bienvenido al
					<br />
					Hogar de Bari
				</h1>
				<p className='mb-12 max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl'>
					En HdB, ofrecemos un entorno seguro, humano y profesional donde cada
					persona es tratada con respeto, cariño y con un plan de vida propio.
				</p>

				{/* Grid de beneficios */}
				<div className='mb-12 grid w-full max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4'>
					{beneficios.map((beneficio, index) => {
						const Icon = beneficio.icon
						return (
							<div
								key={index}
								className='group relative rounded-lg bg-white/10 p-6 pt-12 backdrop-blur-md transition-all duration-300 hover:bg-white/20'
							>
								{/* Icono sobresaliendo 50% */}
								<div className='absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#909d7b] shadow-lg'>
									<Icon className='h-8 w-8 text-white' />
								</div>
								<h3 className='mb-3 mt-4 h-7 font-serif text-lg font-bold text-white'>
									{beneficio.titulo}
								</h3>
								<p className='text-sm leading-relaxed text-white/80'>
									{beneficio.descripcion}
								</p>
							</div>
						)
					})}
				</div>

				<div className='flex flex-col gap-4 sm:flex-row'>
					<Dialog>
						<DialogTrigger asChild>
							<Button
								size='lg'
								className='bg-[#909d7b] text-white hover:bg-[#7a8766]'
							>
								Contáctanos
							</Button>
						</DialogTrigger>
						<DialogContent className='sm:max-w-md'>
							<DialogHeader>
								<DialogTitle className='text-center text-2xl font-bold text-[#2c2c2c]'>
									¿Cómo prefieres contactarnos?
								</DialogTitle>
							</DialogHeader>
							<div className='grid gap-4 py-4'>
								<Button
									size='lg'
									className='flex items-center gap-3 bg-[#909d7b] text-white hover:bg-[#7a8766]'
									asChild
								>
									<a href='tel:615464425'>
										<Phone className='h-5 w-5' />
										Llamar ahora: 615 464 425
									</a>
								</Button>
								<Button
									size='lg'
									className='flex items-center gap-3 bg-[#909d7b] text-white hover:bg-[#7a8766]'
									asChild
								>
									<a href='tel:651105396'>
										<Phone className='h-5 w-5' />
										Llamar ahora: 651 105 396
									</a>
								</Button>
								<Button
									size='lg'
									variant='outline'
									className='flex items-center gap-3 border-[#909d7b] text-[#909d7b] hover:bg-[#909d7b] hover:text-white'
									asChild
								>
									<a href='#contacto'>
										<Mail className='h-5 w-5' />
										Ir al formulario
									</a>
								</Button>
							</div>
						</DialogContent>
					</Dialog>
					<Button
						size='lg'
						variant='outline'
						className='border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white/20'
						asChild
					>
						<a href='#metodo-detallado'>Ver nuestro método</a>
					</Button>
				</div>

				<a
					href='#metodo-detallado'
					className='absolute bottom-8 animate-bounce'
					aria-label='Scroll down'
				>
					<ChevronDown className='h-8 w-8 text-white' />
				</a>
			</div>
		</section>
	)
}

