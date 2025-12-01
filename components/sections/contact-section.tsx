'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export function ContactSection() {
	const [isSubmitting, setIsSubmitting] = React.useState(false)
	const [message, setMessage] = React.useState('')

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSubmitting(true)

		const formData = new FormData(e.currentTarget)
		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			message: formData.get('message'),
		}

		await new Promise((resolve) => setTimeout(resolve, 1000))

		console.log('Form data:', data)
		setMessage('¡Gracias! Te contactaremos pronto.')
		setIsSubmitting(false)

		const form = e.target as HTMLFormElement
		form.reset()

		setTimeout(() => setMessage(''), 5000)
	}

	return (
		<section id='contacto' className='bg-[#F9F1E8] py-20'>
			<div className='container mx-auto px-4'>
				<div className='mb-12 text-center'>
					<h2 className='mb-4 font-serif text-4xl font-bold text-[#2c2c2c] md:text-5xl'>
						¡Contáctanos hoy!
					</h2>
					<p className='mx-auto max-w-2xl text-lg text-[#6b6b6b]'>
						Estamos aquí para responder tus preguntas y brindarte toda la
						información que necesitas
					</p>
				</div>

				<div className='grid gap-8 lg:grid-cols-2'>
					<div className='space-y-6'>
						<Card>
							<CardHeader>
								<CardTitle className='text-2xl'>
									Información de Contacto
								</CardTitle>
							</CardHeader>
							<CardContent className='space-y-4'>
								<div className='flex items-start gap-4'>
									<div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#909d7b]/10'>
										<MapPin className='h-5 w-5 text-[#909d7b]' />
									</div>
									<div>
										<h3 className='font-semibold'>Ubicación</h3>
										<p className='text-sm text-muted-foreground'>
											C/Periodista Ramón Resa, 9<br />
											Sevilla
										</p>
									</div>
								</div>

								<div className='flex items-start gap-4'>
									<div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#909d7b]/10'>
										<Phone className='h-5 w-5 text-[#909d7b]' />
									</div>
									<div>
										<h3 className='font-semibold'>Teléfono</h3>
										<p className='text-sm text-muted-foreground'>
											615 464 425
											<br />
											651 105 396
										</p>
									</div>
								</div>

								<div className='flex items-start gap-4'>
									<div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#909d7b]/10'>
										<Mail className='h-5 w-5 text-[#909d7b]' />
									</div>
									<div>
										<h3 className='font-semibold'>Email</h3>
										<p className='text-sm text-muted-foreground'>
											hogardebari@gmail.com
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className='border-[#909d7b] bg-white'>
							<CardHeader>
								<CardTitle className='flex items-center gap-2 text-2xl text-[#909d7b]'>
									<span>👉🏼</span> ¡Aún tenemos plazas disponibles!
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='space-y-2 text-sm'>
									<div className='flex justify-between'>
										<span className='font-medium'>Horario:</span>
										<span className='text-muted-foreground'>
											Lun - Domingo: 24 horas
										</span>
									</div>
									<div className='flex justify-between'>
										<span className='font-medium'>Disponibilidad:</span>
										<span className='text-muted-foreground'>365 días al año</span>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>

					<Card>
						<CardHeader>
							<CardTitle className='text-2xl'>Envíanos un Mensaje</CardTitle>
						</CardHeader>
						<CardContent>
							<div className='mb-6 space-y-3 text-sm text-[#6b6b6b]'>
								<p>
									Cuéntanos un poco vuestra situación y te responderemos lo
									antes posible.
								</p>
								<p>
									Si lo prefieres, también podemos agendar una llamada en un
									horario que te venga bien.
								</p>
							</div>

							<form onSubmit={handleSubmit} className='space-y-4'>
								<div>
									<label
										htmlFor='name'
										className='mb-2 block text-sm font-medium'
									>
										Nombre completo *
									</label>
									<Input
										id='name'
										name='name'
										placeholder='Tu nombre'
										required
										disabled={isSubmitting}
									/>
								</div>

								<div>
									<label
										htmlFor='email'
										className='mb-2 block text-sm font-medium'
									>
										Email *
									</label>
									<Input
										id='email'
										name='email'
										type='email'
										placeholder='tu@email.com'
										required
										disabled={isSubmitting}
									/>
								</div>

								<div>
									<label
										htmlFor='message'
										className='mb-2 block text-sm font-medium'
									>
										Mensaje *
									</label>
									<Textarea
										id='message'
										name='message'
										placeholder='Escribe tu mensaje aquí...'
										rows={5}
										required
										disabled={isSubmitting}
									/>
								</div>

								{message && (
									<div className='rounded-md bg-green-50 p-3 text-sm text-green-800'>
										{message}
									</div>
								)}

								<Button
									type='submit'
									className='w-full bg-[#909d7b] text-white hover:bg-[#7a8766]'
									disabled={isSubmitting}
								>
									{isSubmitting ? (
										'Enviando...'
									) : (
										<>
											<Send className='mr-2 h-4 w-4' />
											Enviar Mensaje
										</>
									)}
								</Button>

								<p className='pt-2 text-xs text-[#6b6b6b]/80'>
									Usaremos tus datos solo para responder a tu mensaje. No los
									compartimos con nadie más.
								</p>
							</form>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	)
}

