import * as React from "react"
import { howItWorks } from "@/data/hairDyeData"
import { Palette, Sparkle } from "lucide-react"
import { MixIcon } from "@radix-ui/react-icons"

const iconMap: Record<string, React.ReactNode> = {
  'palette': <Palette className="h-12 w-12 text-primary" />,
  'mix': <MixIcon className="h-12 w-12 text-primary" />,
  'sparkle': <Sparkle className="h-12 w-12 text-primary" />
}

export function HowItWorksSection() {
  return (
    <section className="py-12 lg:py-20 bg-white" id="how-it-works">
      <div className="container">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {howItWorks.map((step) => (
            <div key={step.step} className="flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                {iconMap[step.icon]}
              </div>
              <h3 className="text-xl font-semibold mb-2">Step {step.step}: {step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}