"use client"

import { Leaf, MilkOff, Thermometer, Snowflake } from "lucide-react"

interface AdditionalOption {
  title: string
  price: string
  subtitle?: string
  icons?: string[]
}

interface AdditionalOptionsProps {
  options: AdditionalOption[]
  freeSyrups?: string // Made freeSyrups optional since plant-based options don't have this
}

export function AdditionalOptions({ options, freeSyrups }: AdditionalOptionsProps) {
  const renderIcon = (icon: string) => {
    const iconProps = { size: 12, className: "sm:w-3 sm:h-3" }

    switch (icon) {
      case "V": // Hot
        return <Thermometer {...iconProps} />
      case "L": // Cold
        return <Snowflake {...iconProps} />
      case "G": // Vegan
        return <Leaf {...iconProps} />
      case "N": // No lactose
        return <MilkOff {...iconProps} />
      default:
        return <span className="text-[10px] sm:text-xs">{icon}</span>
    }
  }

  return (
    <div className="border-2 border-[#8B4513] rounded-2xl p-6 mt-6 mb-6">
      <div className="space-y-2">
        {options.map((option, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                {option.icons && (
                  <div className="flex gap-1">
                    {option.icons.map((icon, iconIndex) => (
                      <span
                        key={iconIndex}
                        className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-white ${
                          icon === "V"
                            ? "bg-orange-500"
                            : icon === "L"
                              ? "bg-blue-500"
                              : icon === "G"
                                ? "bg-green-500"
                                : icon === "N"
                                  ? "bg-purple-500"
                                  : "bg-gray-500"
                        }`}
                      >
                        {renderIcon(icon)}
                      </span>
                    ))}
                  </div>
                )}
                <span className="text-[#8B4513] text-sm sm:text-base">{option.title}</span>
              </div>
              {option.subtitle && (
                <div className="text-[#8B4513] text-xs sm:text-sm opacity-80 mt-1">{option.subtitle}</div>
              )}
            </div>
            <span className="text-[#8B4513] font-bold text-sm sm:text-base ml-4">{option.price}</span>
          </div>
        ))}
        {freeSyrups && (
          <div className="pt-2 border-t border-[#8B4513]/20">
            <span className="text-[#8B4513] text-sm sm:text-base">{freeSyrups}</span>
          </div>
        )}
      </div>
    </div>
  )
}
