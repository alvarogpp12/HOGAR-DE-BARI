import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/sections/hero-section'
import { MetodoDetalladoSection } from '@/components/sections/metodo-detallado-section'
import { CTASection } from '@/components/sections/cta-section'
import { ContactSection } from '@/components/sections/contact-section'

export default function Home() {
	return (
		<main>
			<Navigation />
			<HeroSection />
			<MetodoDetalladoSection />
			<CTASection />
			<ContactSection />
			<Footer />
		</main>
	)
}

