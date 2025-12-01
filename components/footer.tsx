import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
	return (
		<footer className='border-t bg-[#2c2c2c] text-primary-foreground'>
			<div className='container mx-auto px-4 py-12'>
				<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
					<div>
						<h3 className='mb-4 font-serif text-2xl font-bold'>
							Hogar de Bari
						</h3>
						<p className='text-sm text-primary-foreground/80'>
							Estamos aquí para responder tus preguntas, programar consultas y
							brindarte el apoyo que necesitas.
						</p>
					</div>

					<div>
					<h4 className='mb-4 font-semibold'>Enlaces Rápidos</h4>
					<ul className='space-y-2 text-sm'>
						<li>
							<Link
								href='#inicio'
								className='text-primary-foreground/80 transition-colors hover:text-primary-foreground'
							>
								Inicio
							</Link>
						</li>
						<li>
							<Link
								href='#metodo-detallado'
								className='text-primary-foreground/80 transition-colors hover:text-primary-foreground'
							>
								Nuestro método
							</Link>
						</li>
						<li>
							<Link
								href='#contacto'
								className='text-primary-foreground/80 transition-colors hover:text-primary-foreground'
							>
								Contacto
							</Link>
						</li>
					</ul>
					</div>

					<div>
						<h4 className='mb-4 font-semibold'>Contacto</h4>
						<ul className='space-y-3 text-sm text-primary-foreground/80'>
							<li className='flex items-start gap-2'>
								<MapPin className='mt-0.5 h-4 w-4 shrink-0' />
								<span>C/Periodista Ramón Resa, 9 Sevilla</span>
							</li>
							<li className='flex items-center gap-2'>
								<Phone className='h-4 w-4 shrink-0' />
								<span>615 464 425 / 651 105 396</span>
							</li>
							<li className='flex items-center gap-2'>
								<Mail className='h-4 w-4 shrink-0' />
								<span>hogardebari@gmail.com</span>
							</li>
						</ul>
						<p className='mt-4 text-xs text-primary-foreground/70'>
							Lun - Domingo: 24 horas, 365 días al año
						</p>
					</div>

					<div>
						<h4 className='mb-4 font-semibold'>Síguenos</h4>
						<div className='flex gap-4'>
							<Link
								href='#'
								className='text-primary-foreground/80 transition-colors hover:text-primary-foreground'
								aria-label='Facebook'
							>
								<Facebook className='h-5 w-5' />
							</Link>
							<Link
								href='#'
								className='text-primary-foreground/80 transition-colors hover:text-primary-foreground'
								aria-label='Instagram'
							>
								<Instagram className='h-5 w-5' />
							</Link>
							<Link
								href='#'
								className='text-primary-foreground/80 transition-colors hover:text-primary-foreground'
								aria-label='Twitter'
							>
								<Twitter className='h-5 w-5' />
							</Link>
						</div>
					</div>
				</div>

				<div className='mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60'>
					<p>
						&copy; {new Date().getFullYear()} Hogar de Bari. Todos los derechos
						reservados.
					</p>
				</div>
			</div>
		</footer>
	)
}

