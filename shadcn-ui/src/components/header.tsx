import * as React from "react"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Header() {
  const handleScrollToForm = () => {
    const formElement = document.getElementById("order-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" })
    }
  }
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-border/40 py-3">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="font-bold text-primary text-xl">LincoDye</div>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="tel:07030151874" 
            className="flex items-center gap-2 text-sm md:text-base hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="font-medium">07030151874</span>
          </a>
          
          <Button 
            variant="outline" 
            onClick={handleScrollToForm}
            className="hidden md:flex"
          >
            Order Now
          </Button>
        </div>
      </div>
    </header>
  )
}