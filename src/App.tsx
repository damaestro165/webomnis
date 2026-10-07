import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { DigitalChallenges } from './components/DigitalChallenges'
import { Services } from './components/Services'
import { WhyChooseUs } from './components/WhyChooseUs'
import { WorkShowcase } from './components/WorkShowcase'
import { MotionShowcaseBand } from './components/MotionShowcaseBand'
import { WorkflowDarkSection } from './components/WorkflowDarkSection'
import { RotatingShowcase } from './components/RotatingShowcase'
import { ToolsMarquee } from './components/ToolsMarquee'
import { Testimonial } from './components/Testimonial'
import { FAQ } from './components/FAQ'
import { Process } from './components/Process'
import { ConsultationCTA } from './components/ConsultationCTA'
import { Footer } from './components/Footer'
import { Reveal } from './components/Reveal'
import { WhatsAppButton } from './components/WhatsAppButton'

export function App() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#EEEBFF] text-[#130B2B] flex flex-col antialiased selection:bg-[#6754E9] selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenConsultation={scrollToContact} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section with Trust Strip */}
        <Hero onOpenConsultation={scrollToContact} />

        {/* 2. Real Results. Built to Perform, Designed to Convert */}
        <Reveal>
          <DigitalChallenges />
        </Reveal>

        {/* 3. Core Capabilities / Services Grid */}
        <Reveal>
          <Services />
        </Reveal>

        {/* 4. A Process Built for Results (How We Work) */}
        <Reveal>
          <Process />
        </Reveal>

        {/* 5. Midway Deep Navy Automation & Workflows Section (Ordina Dark Block) */}
        {/* <Reveal>
          <WorkflowDarkSection />
        </Reveal> */}

        {/* 6. Why WebOmnis Comparison & Performance Specs */}
        <Reveal>
          <WhyChooseUs />
        </Reveal>

        {/* 7. Selected Work (Toserah, Plusmed, Eyomoa Farms) - Commented out for now */}
        {/* <Reveal>
          <WorkShowcase />
        </Reveal> */}

        {/* 8. Moving Showcase Band (Positioned lower after Work Showcase) */}
        {/* <Reveal>
          <MotionShowcaseBand />
        </Reveal> */}

        {/* 9. Ordina Orbital Rotating Showcase around Unified Statement */}
        <Reveal>
          <RotatingShowcase />
        </Reveal>

        {/* 10. Tools Ecosystem Marquee (Tools your team already uses) */}
        <Reveal>
          <ToolsMarquee />
        </Reveal>

        {/* 11. Client Love Testimonials */}
        <Reveal>
          <Testimonial />
        </Reveal>

        {/* 12. Common Questions Accordion */}
        <Reveal>
          <FAQ />
        </Reveal>

        {/* 13. Dark, Calm Centered Pre-Footer Consultation CTA */}
        <Reveal>
          <ConsultationCTA />
        </Reveal>
      </main>

      {/* Agency Footer with Global Offices and Sitemap */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
  )
}

export default App
