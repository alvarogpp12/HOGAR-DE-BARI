import Image from 'next/image'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Wifi, Coffee, Bath } from 'lucide-react'
import type { Room } from '@/types'

const rooms: Room[] = [
	{
		id: '1',
		name: 'Suite Deluxe',
		description:
			'Amplia suite con vistas panorámicas, sala de estar separada y baño de lujo con bañera de hidromasaje.',
		price: 250,
		image:
			'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2070',
		amenities: ['Wi-Fi', 'Desayuno', 'Minibar', 'Jacuzzi'],
		capacity: 2,
	},
	{
		id: '2',
		name: 'Habitación Premium',
		description:
			'Elegante habitación con cama king size, zona de trabajo y baño moderno con ducha de lluvia.',
		price: 180,
		image:
			'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070',
		amenities: ['Wi-Fi', 'Desayuno', 'Minibar', 'Smart TV'],
		capacity: 2,
	},
	{
		id: '3',
		name: 'Habitación Estándar',
		description:
			'Acogedora habitación con todas las comodidades necesarias para una estancia perfecta.',
		price: 120,
		image:
			'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070',
		amenities: ['Wi-Fi', 'Desayuno', 'TV', 'Aire acondicionado'],
		capacity: 2,
	},
]

export function RoomsSection() {
	return (
		<section id='habitaciones' className='py-20'>
			<div className='container mx-auto px-4'>
				<div className='mb-12 text-center'>
					<h2 className='mb-4 font-serif text-4xl font-bold md:text-5xl'>
						Nuestras Habitaciones
					</h2>
					<p className='mx-auto max-w-2xl text-lg text-muted-foreground'>
						Cada habitación está cuidadosamente diseñada para ofrecerte el
						máximo confort y una experiencia inolvidable
					</p>
				</div>

				<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
					{rooms.map((room) => (
						<Card key={room.id} className='overflow-hidden'>
							<div className='relative h-64 w-full'>
								<Image
									src={room.image}
									alt={room.name}
									fill
									className='object-cover transition-transform duration-300 hover:scale-105'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
								/>
							</div>
							<CardHeader>
								<div className='flex items-start justify-between'>
									<div>
										<CardTitle className='text-2xl'>{room.name}</CardTitle>
										<CardDescription className='mt-2'>
											{room.description}
										</CardDescription>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<div className='mb-4 flex flex-wrap gap-2'>
									<div className='flex items-center gap-1 text-sm text-muted-foreground'>
										<Users className='h-4 w-4' />
										<span>{room.capacity} personas</span>
									</div>
									<div className='flex items-center gap-1 text-sm text-muted-foreground'>
										<Wifi className='h-4 w-4' />
										<span>Wi-Fi gratis</span>
									</div>
									<div className='flex items-center gap-1 text-sm text-muted-foreground'>
										<Coffee className='h-4 w-4' />
										<span>Desayuno</span>
									</div>
									<div className='flex items-center gap-1 text-sm text-muted-foreground'>
										<Bath className='h-4 w-4' />
										<span>Baño privado</span>
									</div>
								</div>
								<div className='flex items-center justify-between'>
									<div>
										<span className='text-3xl font-bold'>${room.price}</span>
										<span className='text-muted-foreground'> / noche</span>
									</div>
									<Button asChild>
										<a href='#contacto'>Consultar</a>
									</Button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}

