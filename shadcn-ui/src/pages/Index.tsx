import * as React from "react"
import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { PricingSection } from "@/components/pricing-section"
import { ColorSelectionSection } from "@/components/color-selection-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { OrderForm } from "@/components/order-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SocialProofSection } from "@/components/social-proof-section"
import { FaqSection } from "@/components/faq-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { ChatWidget } from "@/components/chat-widget"
import { StickyCTA } from "@/components/sticky-cta"

export default function LandingPage() {
  // Default to first color and package
  const [selectedColor, setSelectedColor] = React.useState('natural-black')
  const [selectedPackage, setSelectedPackage] = React.useState('complete-treatment')
  
  React.useEffect(() => {
    // Track page view for Facebook Pixel
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
    
    // Track page view for Google Analytics
    if (window.gtag) {
      window.gtag('event', 'page_view');
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <SocialProofSection />
      <BenefitsSection />
      <HowItWorksSection />
      <PricingSection 
        onSelectPackage={setSelectedPackage} 
        selectedPackage={selectedPackage}
      />
      <ColorSelectionSection 
        selectedColor={selectedColor}
        onSelectColor={setSelectedColor}
      />
      <TestimonialsSection />
      <FaqSection />
      <NewsletterSection />
      <div id="order-form">
        <OrderForm 
          selectedColor={selectedColor}
          selectedPackage={selectedPackage}
          onSelectColor={setSelectedColor}
          onSelectPackage={setSelectedPackage}
        />
      </div>
      <Footer />
      <StickyCTA text="Shop Now" />
      <ChatWidget />
    </div>
  )
}