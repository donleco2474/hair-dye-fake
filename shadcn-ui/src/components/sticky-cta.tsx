import * as React from "react"
import { Button } from "@/components/ui/button"
import { useScrollPosition } from "@/hooks/use-scroll-position"

interface StickyCTAProps {
  text?: string
  onClick?: () => void
}

export function StickyCTA({ text = "Buy Now", onClick }: StickyCTAProps) {
  const scrollPosition = useScrollPosition()
  const [isVisible, setIsVisible] = React.useState(false)
  
  // Show sticky CTA after scrolling 500px
  React.useEffect(() => {
    setIsVisible(scrollPosition > 500)
  }, [scrollPosition])
  
  const handleClick = () => {
    // Scroll to order form
    const orderForm = document.getElementById('order-form')
    if (orderForm) {
      orderForm.scrollIntoView({ behavior: 'smooth' })
    }
    
    // Call onClick if provided
    if (onClick) {
      onClick()
    }
  }
  
  if (!isVisible) return null
  
  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300">
      <div className="flex">
        <Button 
          size="lg" 
          onClick={handleClick}
          className="animate-pulse px-8 py-6 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-white"
        >
          {text}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Button>
      </div>
    </div>
  )
}