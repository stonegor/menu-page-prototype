"use client"

import { Leaf, MilkOff, Thermometer, Snowflake } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

interface CoffeeItemSimpleProps {
  title: string
  subtitle?: string
  icons?: string[]
  price: string
  badge?: string
  volume?: string
}

export function CoffeeItemSimple({ title, subtitle, icons = [], price, badge, volume }: CoffeeItemSimpleProps) {
  const isMobile = useIsMobile()

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

  if (isMobile) {
    return (
      <div className="py-1.5">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-[#8B4513] font-semibold text-base">{title}</h3>
          {badge && <span className="bg-[#8B4513] text-white px-2 py-1 rounded-full text-xs">{badge}</span>}
          {icons.length > 0 && (
            <div className="flex items-center gap-1">
              {icons.map((icon, index) => (
                <span
                  key={index}
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-white ${
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
        </div>
        {subtitle && <p className="text-[#8B4513] text-sm mb-2">{subtitle}</p>}
        <div className="flex justify-between items-center py-1">
          <span className="text-[#8B4513] text-sm">{volume}</span>
          <span className="text-[#8B4513] font-bold text-sm">{price}</span>
        </div>
      </div>
    )
  }

  return (
    <tr className="border-b border-transparent">
      <td className="py-1 sm:py-2 pr-2 sm:pr-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-[#8B4513] font-semibold text-xs sm:text-sm md:text-base">{title}</span>
            {badge && (
              <span className="bg-[#8B4513] text-white px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-[10px] sm:text-xs">
                {badge}
              </span>
            )}
          </div>
          {icons.length > 0 && (
            <div className="flex items-center gap-1 mt-1 sm:mt-0">
              {icons.map((icon, index) => (
                <span
                  key={index}
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
        </div>
        {subtitle && <div className="text-[#8B4513] text-xs sm:text-sm mt-0.5 sm:mt-1">{subtitle}</div>}
      </td>
      <td className="text-right text-[#8B4513] font-bold text-xs sm:text-sm md:text-base py-1 sm:py-2 min-w-[40px] sm:min-w-[60px] px-1 sm:px-0">
        {price}
      </td>
    </tr>
  )
}
