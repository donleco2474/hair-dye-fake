import * as React from "react"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/ui/countdown"
import { addDays } from "@/lib/utils"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  // Set the end time to 24 hours from now
  const endTime = React.useMemo(() => addDays(new Date(), 1), [])
  
  const handleScrollToForm = () => {
    const formElement = document.getElementById("order-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" })
    }
  }
  
  return (
    <section className="relative bg-gradient-to-br from-primary/10 to-primary/5 py-16 lg:py-24">
      <div className="container grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Finally! A Long-Lasting Hair Dye Treatment That Works Without Damaging Your Hair or Scalp
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Premium color blend, deep nourishment, and vibrant finish — no ammonia, no itch, no damage.
          </p>
          <div className="mb-6">
            <CountdownTimer endTime={endTime} />
          </div>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-full font-semibold"
            onClick={handleScrollToForm}
          >
            Choose Your Color & Order Now <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <div className="relative flex justify-center">
          <div className="relative z-10 shadow-xl rounded-lg overflow-hidden">
            <img 
              src="/assets/images/image.png" 
              alt="Professional hair dye product" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <div className="flex justify-center gap-3">
                <div className="w-8 h-8 rounded-full border-2 border-white" style={{ backgroundColor: '#000000' }}></div>
                <div className="w-8 h-8 rounded-full border-2 border-white" style={{ backgroundColor: '#4A2C2A' }}></div>
                <div className="w-8 h-8 rounded-full border-2 border-white" style={{ backgroundColor: '#800020' }}></div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg z-20">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary">24h</span>
              <div className="text-sm">
                <p className="font-medium">Limited Time</p>
                <p className="text-xs text-muted-foreground">Special Offer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}