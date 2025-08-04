import * as React from "react"
import { cn } from "@/lib/utils"
import { HairColorOption } from "@/types"
import { CheckIcon } from "@radix-ui/react-icons"

interface ColorSwatchProps {
  color: HairColorOption
  selected: boolean
  onClick: () => void
  className?: string
}

export function ColorSwatch({ color, selected, onClick, className }: ColorSwatchProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative w-8 h-8 rounded-full cursor-pointer border-2",
        selected ? "border-primary" : "border-muted",
        className
      )}
      style={{ backgroundColor: color.hexCode }}
      aria-label={`Select ${color.displayName} color`}
    >
      {selected && (
        <div className="absolute inset-0 flex items-center justify-center">
          <CheckIcon className="text-white h-4 w-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]" />
        </div>
      )}
    </button>
  )
}