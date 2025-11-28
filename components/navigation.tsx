'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
	{ href: '#inicio', label: 'Inicio' },
	{ href: '#quienes-somos', label: '¿Quiénes somos?' },
	{ href: '#servicios', label: 'Servicios' },
	{ href: '#contacto', label: 'Contacto' },
]

export function Navigation() {
	const [isOpen, setIsOpen] = React.useState(false)
	const [isScrolled, setIsScrolled] = React.useState(false)

	React.useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<nav
			className={`fixed top-0 z-50 w-full transition-all duration-300 ${
				isScrolled
					? 'bg-white/95 shadow-md backdrop-blur-sm'
					: 'bg-transparent'
			}`}
		>
			<div className='container mx-auto px-0'>
				<div className='flex h-24 items-center justify-between'>
					<Link href='/' className='-ml-4 shrink-0'>
						<img
							src='/LOGO/Hogar de Bari.svg'
							alt='Hogar de Bari'
							className={`h-[115px] w-auto transition-all ${
								isScrolled ? 'brightness-0' : 'brightness-0 invert'
							}`}
						/>
					</Link>
					
					<div className='hidden items-center gap-10 pr-4 md:flex'>

						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={`text-base font-medium transition-colors hover:text-[#909d7b] ${
									isScrolled ? 'text-[#2c2c2c]' : 'text-white'
								}`}
							>
								{item.label}
							</Link>
						))}
					</div>

					<button
						onClick={() => setIsOpen(!isOpen)}
						className='md:hidden'
						aria-label='Toggle menu'
					>
						{isOpen ? (
							<X
								className={`h-6 w-6 ${isScrolled ? 'text-foreground' : 'text-white'}`}
							/>
						) : (
							<Menu
								className={`h-6 w-6 ${isScrolled ? 'text-foreground' : 'text-white'}`}
							/>
						)}
					</button>
				</div>
			</div>

			{isOpen && (
				<div className='border-t bg-white md:hidden'>
					<div className='container mx-auto px-4 py-4'>
						<div className='flex flex-col gap-4'>
							{navItems.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									onClick={() => setIsOpen(false)}
									className='text-sm font-medium text-foreground transition-colors hover:text-primary'
								>
									{item.label}
								</Link>
							))}
						</div>
					</div>
				</div>
			)}
		</nav>
	)
}

