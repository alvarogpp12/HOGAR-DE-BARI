export interface Room {
	id: string
	name: string
	description: string
	price: number
	image: string
	amenities: string[]
	capacity: number
}

export interface Service {
	id: string
	name: string
	description: string
	icon: string
}

export interface GalleryImage {
	id: string
	src: string
	alt: string
	category: string
}

export interface ContactFormData {
	name: string
	email: string
	phone?: string
	message: string
}

