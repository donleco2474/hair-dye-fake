import * as React from "react"
import { getTimeRemaining } from "@/lib/utils"

interface CountdownTimerProps {
  endTime: Date
  className?: string
}

export function CountdownTimer({ endTime, className = "" }: CountdownTimerProps) {
  const [timeRemaining, setTimeRemaining] = React.useState(getTimeRemaining(endTime))
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      const remaining = getTimeRemaining(endTime)
      setTimeRemaining(remaining)
      
      if (remaining.hours <= 0 && remaining.minutes <= 0 && remaining.seconds <= 0) {
        clearInterval(timer)
      }
    }, 1000)
    
    return () => clearInterval(timer)
  }, [endTime])
  
  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0')
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <p className="text-sm font-semibold uppercase mb-2">Offer Ends In:</p>
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-center">
          <div className="bg-primary text-primary-foreground font-bold text-xl px-3 py-2 rounded">
            {formatNumber(timeRemaining.hours)}
          </div>
          <span className="text-xs mt-1">Hours</span>
        </div>
        <span className="text-xl font-bold">:</span>
        <div className="flex flex-col items-center">
          <div className="bg-primary text-primary-foreground font-bold text-xl px-3 py-2 rounded">
            {formatNumber(timeRemaining.minutes)}
          </div>
          <span className="text-xs mt-1">Minutes</span>
        </div>
        <span className="text-xl font-bold">:</span>
        <div className="flex flex-col items-center">
          <div className="bg-primary text-primary-foreground font-bold text-xl px-3 py-2 rounded">
            {formatNumber(timeRemaining.seconds)}
          </div>
          <span className="text-xs mt-1">Seconds</span>
        </div>
      </div>
    </div>
  )
}