import * as React from "react"
import { benefits } from "@/data/hairDyeData"
import { 
  ShieldCheck, 
  Paintbrush, 
  Home, 
  CheckCircle2, 
  Calendar, 
  Sparkles 
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const iconMap: Record<string, React.ReactNode> = {
  'shield-check': <ShieldCheck className="h-10 w-10 text-primary" />,
  'paint-brush': <Paintbrush className="h-10 w-10 text-primary" />,
  'home': <Home className="h-10 w-10 text-primary" />,
  'check-circle': <CheckCircle2 className="h-10 w-10 text-primary" />,
  'calendar': <Calendar className="h-10 w-10 text-primary" />,
  'sparkles': <Sparkles className="h-10 w-10 text-primary" />
}

export function BenefitsSection() {
  return (
    <section className="py-12 lg:py-20 bg-slate-50" id="benefits">
      <div className="container">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
          Benefits You'll Love
        </h2>
        <div className="flex justify-center mb-10">
          <img 
            src="/assets/images/image (4).png" 
            alt="Hair dye application results" 
            className="rounded-lg shadow-xl max-h-[300px] w-auto"
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  {iconMap[benefit.icon]}
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}