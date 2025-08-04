import * as React from "react"
import { priceOptions } from "@/data/hairDyeData"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { formatPrice } from "@/lib/utils"
import { CheckCircle2 } from "lucide-react"

interface PricingSectionProps {
  onSelectPackage: (packageId: string) => void
  selectedPackage: string
}

export function PricingSection({ onSelectPackage, selectedPackage }: PricingSectionProps) {
  return (
    <section className="py-12 lg:py-20 bg-white" id="pricing">
      <div className="container">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
          Choose Your Hair Dye Package
        </h2>
        <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
          Each full treatment requires 2 tubes — one for your roots, one for your full hair length. One tube won't do the job right.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {priceOptions.map((option) => (
            <Card 
              key={option.id} 
              className={`transition-all ${selectedPackage === option.id ? 'border-primary shadow-lg shadow-primary/20' : 'border-muted shadow'}`}
            >
              <CardHeader>
                <CardTitle className="text-xl">{option.name}</CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-end gap-2">
                  {option.isDiscounted && option.discountedPrice ? (
                    <>
                      <span className="text-2xl font-bold">{formatPrice(option.discountedPrice)}</span>
                      <span className="text-muted-foreground line-through">{formatPrice(option.price)}</span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold">{formatPrice(option.price)}</span>
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>{option.tubeCount} Tubes Included</span>
                  </div>
                  {option.tubeCount >= 3 && (
                    <div className="flex items-center gap-2 mt-1">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Perfect for thick or long hair</span>
                    </div>
                  )}
                  {option.tubeCount >= 4 && (
                    <div className="flex items-center gap-2 mt-1">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Mix and match colors</span>
                    </div>
                  )}
                </div>
                {option.isDiscounted && option.discountNote && (
                  <p className="text-sm font-medium text-primary">{option.discountNote}</p>
                )}
              </CardContent>
              <CardFooter>
                <Button
                  variant={selectedPackage === option.id ? "default" : "outline"} 
                  className="w-full"
                  onClick={() => onSelectPackage(option.id)}
                >
                  {selectedPackage === option.id ? "Selected" : "Select Package"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}