'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const fases = [
	{
		numero: 1,
		titulo: 'Acogida y escucha',
		imagen: '/middle-aged-caucasian-woman-psychologist-listening-2025-11-19-14-33-58-utc.jpg',
		descripcion:
			'Empezamos sentándonos con la familia, sin prisas. Nos contáis quién es vuestro familiar, qué le gusta, qué le cuesta, qué ha pasado hasta ahora y qué esperáis del centro.',
		extra:
			'Si la persona puede participar, también hablamos con ella. Nos interesa conocerle más allá de los informes.',
	},
	{
		numero: 2,
		titulo: 'Evaluación completa',
		imagen: '/mother-and-preteen-daughter-in-individual-therapy-2024-12-08-03-08-20-utc.jpg',
		descripcion:
			'Después, nuestro equipo valora qué apoyos necesita en diferentes áreas: salud, autonomía en el día a día, comunicación, comportamiento, relaciones, emociones…',
		extra:
			'No se trata de "poner etiquetas", sino de entender bien en qué puntos podemos ayudar más.',
	},
	{
		numero: 3,
		titulo: 'Plan individual de apoyos',
		imagen: '/calendar-with-pencils-planning-concept-2025-03-08-07-25-16-utc.JPG',
		descripcion:
			'Con todo lo anterior, preparamos un plan claro:',
		lista: [
			'qué rutinas va a tener,',
			'qué tipo de ayuda necesitará,',
			'qué actividades le pueden venir bien,',
			'qué objetivos nos marcamos a corto y medio plazo.',
		],
		extra:
			'Este plan lo compartimos con la familia para asegurarnos de que estáis de acuerdo y que tiene sentido para todos.',
	},
	{
		numero: 4,
		titulo: 'Día a día en el centro',
		imagen: '/autonomia .jpg',
		descripcion:
			'Aquí es donde se ve de verdad el Método HDB: en las pequeñas cosas de cada día.',
		extra:
			'Cómo se levanta, quién le ayuda a vestirse, cómo se organiza la comida, qué hace por la tarde, cómo se gestionan los momentos de tensión…',
		extra2:
			'Nuestro equipo intenta que la persona se sienta en un lugar conocido, con rostros de confianza y una rutina que dé seguridad.',
	},
	{
		numero: 5,
		titulo: 'Revisión y comunicación',
		imagen: '/apoyo global.jpg',
		descripcion:
			'La vida cambia, y las personas también. Por eso revisamos regularmente cómo va todo: qué está funcionando, qué se puede mejorar, qué cambios han surgido.',
		extra:
			'Os lo contamos con claridad, sin ocultar problemas ni exagerar logros. Y si hay que ajustar algo del plan, se ajusta. Lo importante es que sintáis que caminamos juntos.',
	},
]

export function MetodoDetalladoSection() {
	const sectionRef = useRef<HTMLElement>(null)
	const fasesRefs = useRef<(HTMLDivElement | null)[]>([])

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Configuración para cada fase
			fasesRefs.current.forEach((fase, index) => {
				if (!fase) return

				const imagen = fase.querySelector('.fase-imagen')
				const numero = fase.querySelector('.fase-numero')
				const titulo = fase.querySelector('.fase-titulo')
				const contenido = fase.querySelector('.fase-contenido')

				// Timeline para cada fase
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: fase,
						start: 'top 70%',
						end: 'top 20%',
						toggleActions: 'play none none reverse',
						scrub: 0.5,
					},
				})

				// Fade in general de la fase
				tl.fromTo(
					fase,
					{
						opacity: 0,
						y: 60,
					},
					{
						opacity: 1,
						y: 0,
						duration: 1,
						ease: 'power2.out',
					}
				)

				// Ken Burns effect en imagen (zoom lento)
				if (imagen) {
					gsap.to(imagen, {
						scale: 1.1,
						scrollTrigger: {
							trigger: fase,
							start: 'top bottom',
							end: 'bottom top',
							scrub: 1,
						},
					})
				}

				// Número con efecto typewriter y glow
				if (numero) {
					tl.fromTo(
						numero,
						{
							opacity: 0,
							scale: 0.5,
							filter: 'blur(10px)',
						},
						{
							opacity: 1,
							scale: 1,
							filter: 'blur(0px)',
							duration: 0.6,
							ease: 'back.out(1.7)',
						},
						'-=0.5'
					)

					// Glow effect cuando está en viewport
					gsap.to(numero, {
						boxShadow: '0 0 20px rgba(144, 157, 123, 0.6)',
						scrollTrigger: {
							trigger: fase,
							start: 'top 50%',
							end: 'bottom 50%',
							toggleActions: 'play reverse play reverse',
						},
					})
				}

				// Título con slide from left
				if (titulo) {
					tl.fromTo(
						titulo,
						{
							opacity: 0,
							x: -30,
						},
						{
							opacity: 1,
							x: 0,
							duration: 0.8,
							ease: 'power2.out',
						},
						'-=0.4'
					)
				}

				// Contenido con fade in desde abajo
				if (contenido) {
					tl.fromTo(
						contenido,
						{
							opacity: 0,
							y: 20,
						},
						{
							opacity: 1,
							y: 0,
							duration: 0.8,
							ease: 'power2.out',
						},
						'-=0.6'
					)
				}
			})

			// Efecto parallax en el scroll general
			gsap.to('.parallax-bg', {
				yPercent: 30,
				ease: 'none',
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top bottom',
					end: 'bottom top',
					scrub: 1,
				},
			})
		}, sectionRef)

		return () => ctx.revert()
	}, [])

	return (
		<section
			ref={sectionRef}
			id='metodo-detallado'
			className='relative bg-white py-12 md:py-20 overflow-hidden'
		>
			{/* Parallax background element */}
			<div className='parallax-bg absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#F9F1E8]/20 to-transparent' />

			<div className='container mx-auto px-4'>
				<div className='mb-8 md:mb-16 text-center'>
					<h2 className='mb-4 md:mb-6 font-serif text-3xl md:text-5xl font-bold text-[#2c2c2c]'>
						Así es el Método HDB
					</h2>
					<p className='mx-auto max-w-3xl text-base md:text-lg leading-relaxed text-[#6b6b6b]'>
						El Método HDB no es una teoría complicada, es nuestra forma de
						asegurar que tu familiar recibe lo que necesita y que tú sabes en
						todo momento qué estamos haciendo y por qué.
					</p>
				</div>

				<div className='mx-auto max-w-6xl space-y-20 md:space-y-32'>
					{fases.map((fase, index) => (
						<div
							key={index}
							ref={(el) => {
								fasesRefs.current[index] = el
							}}
							className='relative'
						>
							<div
								className={`grid gap-6 md:gap-8 md:grid-cols-2 md:items-center ${
									index % 2 === 1 ? 'md:flex-row-reverse' : ''
								}`}
							>
								{/* Imagen con Ken Burns effect */}
								<div
									className={`relative aspect-[4/3] max-h-[300px] md:max-h-none overflow-hidden rounded-2xl shadow-2xl ${
										index % 2 === 1 ? 'md:order-2' : ''
									}`}
								>
									<div className='fase-imagen absolute inset-0'>
										<Image
											src={fase.imagen}
											alt={`Fase ${fase.numero}: ${fase.titulo}`}
											fill
											className='object-cover'
											sizes='(max-width: 768px) 100vw, 50vw'
										/>
									</div>
									{/* Overlay gradient */}
									<div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent' />
								</div>

								{/* Contenido */}
								<div className={index % 2 === 1 ? 'md:order-1' : ''}>
									<div className='mb-4 md:mb-6 flex items-center gap-4'>
										{/* Número con glow effect */}
										<div className='fase-numero flex h-16 w-16 md:h-20 md:w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#909d7b] to-[#7a8766] font-serif text-2xl md:text-3xl font-bold text-white shadow-lg transition-all duration-300'>
											{fase.numero}
										</div>
										<h3 className='fase-titulo font-serif text-2xl md:text-4xl font-bold text-[#2c2c2c]'>
											{fase.titulo}
										</h3>
									</div>

									<div className='fase-contenido space-y-4 md:space-y-5'>
										<p className='text-base md:text-lg leading-relaxed text-[#2c2c2c]'>
											{fase.descripcion}
										</p>

										{fase.lista && (
											<ul className='ml-5 md:ml-6 space-y-2'>
												{fase.lista.map((item, i) => (
													<li
														key={i}
														className='list-disc text-sm md:text-base text-[#6b6b6b] leading-relaxed'
													>
														{item}
													</li>
												))}
											</ul>
										)}

										{fase.extra && (
											<p className='text-sm md:text-base leading-relaxed text-[#6b6b6b] italic'>
												{fase.extra}
											</p>
										)}

										{fase.extra2 && (
											<p className='text-sm md:text-base leading-relaxed text-[#6b6b6b]'>
												{fase.extra2}
											</p>
										)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* CTA final con fade in */}
				<div className='mt-16 md:mt-24 text-center'>
					<Button
						className='bg-[#909d7b] text-white hover:bg-[#7a8766] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'
						size='lg'
						asChild
					>
						<a href='#contacto'>Quiero hablar sobre nuestro caso →</a>
					</Button>
				</div>
			</div>
		</section>
	)
}
