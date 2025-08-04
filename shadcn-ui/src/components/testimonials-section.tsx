import * as React from "react"
import { testimonials } from "@/data/hairDyeData"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="py-12 lg:py-20 bg-gradient-to-b from-white to-slate-100" id="testimonials">
      <div className="container">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-2">
          What Our Customers Say
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Join thousands of satisfied customers who have transformed their hair with our premium dye
        </p>
        
        <div className="mb-10 flex justify-center">
          <img 
            src="/assets/images/image (1).png" 
            alt="Customer with beautifully dyed hair" 
            className="rounded-lg shadow-xl max-h-[300px] w-auto"
          />
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-2 mb-4">
                  <CheckCircle2 className="text-primary h-5 w-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">{testimonial.message}</p>
                </div>
                {testimonial.colorUsed && (
                  <p className="text-xs text-muted-foreground mb-2">
                    Used: <span className="font-medium">{testimonial.colorUsed}</span>
                  </p>
                )}
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Want to share yours? Email lincomarket@gmail.com or WhatsApp us. We rotate new testimonials every week!
          </p>
        </div>
      </div>
    </section>
  )
}