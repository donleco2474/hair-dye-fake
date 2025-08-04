import * as React from "react"
import { colorOptions } from "@/data/hairDyeData"
import { ColorSwatch } from "@/components/ui/color-swatch"

interface ColorSelectionSectionProps {
  selectedColor: string
  onSelectColor: (colorName: string) => void
}

export function ColorSelectionSection({ selectedColor, onSelectColor }: ColorSelectionSectionProps) {
  return (
    <section className="py-12 lg:py-20 bg-slate-50" id="colors">
      <div className="container">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
          Choose Your Perfect Shade
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Our premium hair dye collection features 6 beautiful shades specifically formulated for African hair types
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {colorOptions.map((color) => (
            <div 
              key={color.name}
              className="flex flex-col items-center"
            >
              <div 
                className="mb-4 rounded-md overflow-hidden shadow-md w-full aspect-square cursor-pointer hover:shadow-lg transition-shadow"
                style={{ background: color.hexCode }}
                onClick={() => onSelectColor(color.name)}
              >
                <div className="w-full h-full bg-gradient-to-b from-transparent to-black/30 flex items-end justify-center p-3">
                  {selectedColor === color.name && (
                    <div className="bg-white text-primary font-medium text-xs px-2 py-1 rounded-full">
                      Selected
                    </div>
                  )}
                </div>
              </div>
              <h3 className="font-medium text-center">{color.displayName}</h3>
              <div className="mt-2 flex justify-center">
                <ColorSwatch 
                  color={color}
                  selected={selectedColor === color.name}
                  onClick={() => onSelectColor(color.name)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}