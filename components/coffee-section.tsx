"use client"

import type React from "react"
import { useIsMobile } from "@/hooks/use-mobile"

interface CoffeeSectionProps {
  title: string
  badge?: string
  children: React.ReactNode
  sizeHeaders?: string[]
}

export function CoffeeSection({ title, badge, children, sizeHeaders }: CoffeeSectionProps) {
  const isMobile = useIsMobile()

  return (
    <section className="mb-8 sm:mb-12">
      <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-title text-[#8B4513] leading-tight">{title}</h2>
        {badge && (
          <span className="bg-white border border-[#8B4513] text-[#8B4513] px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm">
            {badge}
          </span>
        )}
      </div>

      {sizeHeaders ? (
        isMobile ? (
          <div className="space-y-2">{children}</div>
        ) : (
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left"></th>
                {sizeHeaders.map((header, index) => (
                  <th
                    key={index}
                    className="text-right text-[#8B4513] text-xs sm:text-sm font-medium pb-2 sm:pb-4 min-w-[45px] sm:min-w-[60px]"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>{children}</tbody>
          </table>
        )
      ) : isMobile ? (
        <div className="space-y-2">{children}</div>
      ) : (
        <div className="space-y-0">{children}</div>
      )}
    </section>
  )
}
