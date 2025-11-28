import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { ValoresSection } from '@/components/sections/valores-section'
import { VisionMisionSection } from '@/components/sections/vision-mision-section'
import { ServicesSection } from '@/components/sections/services-section'
import { CTASection } from '@/components/sections/cta-section'
import { ContactSection } from '@/components/sections/contact-section'

export default function Home() {
	return (
		<main>
			<Navigation />
			<HeroSection />
			<AboutSection />
			<ValoresSection />
			<VisionMisionSection />
			<ServicesSection />
			<CTASection />
			<ContactSection />
			<Footer />
		</main>
	)
}

