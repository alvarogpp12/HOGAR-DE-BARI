'use client'

import * as React from 'react'
import Image from 'next/image'
import {
	Dialog,
	DialogContent,
	DialogTrigger,
} from '@/components/ui/dialog'

const galleryImages = [
	{
		id: '1',
		src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070',
		alt: 'Hotel Exterior',
		category: 'exterior',
	},
	{
		id: '2',
		src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080',
		alt: 'Hotel Pool',
		category: 'facilities',
	},
	{
		id: '3',
		src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070',
		alt: 'Restaurant',
		category: 'restaurant',
	},
	{
		id: '4',
		src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070',
		alt: 'Luxury Room',
		category: 'rooms',
	},
	{
		id: '5',
		src: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070',
		alt: 'Spa Area',
		category: 'spa',
	},
	{
		id: '6',
		src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070',
		alt: 'Hotel Lobby',
		category: 'lobby',
	},
]

export function GallerySection() {
	return (
		<section id='galeria' className='py-20'>
			<div className='container mx-auto px-4'>
				<div className='mb-12 text-center'>
					<h2 className='mb-4 font-serif text-4xl font-bold md:text-5xl'>
						Galería
					</h2>
					<p className='mx-auto max-w-2xl text-lg text-muted-foreground'>
						Un vistazo a las experiencias que te esperan en nuestro hotel
					</p>
				</div>

				<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
					{galleryImages.map((image) => (
						<Dialog key={image.id}>
							<DialogTrigger asChild>
								<button className='group relative aspect-[4/3] overflow-hidden rounded-lg'>
									<Image
										src={image.src}
										alt={image.alt}
										fill
										className='object-cover transition-transform duration-300 group-hover:scale-110'
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									/>
									<div className='absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20' />
								</button>
							</DialogTrigger>
							<DialogContent className='max-w-4xl'>
								<div className='relative aspect-video w-full'>
									<Image
										src={image.src}
										alt={image.alt}
										fill
										className='object-contain'
										sizes='90vw'
									/>
								</div>
							</DialogContent>
						</Dialog>
					))}
				</div>
			</div>
		</section>
	)
}

