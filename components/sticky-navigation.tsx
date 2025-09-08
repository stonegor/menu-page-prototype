"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const sections = [
  { id: "drinks", label: "Напитки" },
  { id: "author-coffee", label: "Авторские кофейные напитки" },
  { id: "author-lemonades", label: "Авторские лимонады" },
  { id: "pancakes", label: "Блины" },
  { id: "croissants", label: "Круассаны" },
  { id: "sandwiches", label: "Сэндвичи" },
  { id: "breakfasts", label: "Завтраки" },
  { id: "pizza", label: "Пицца" },
  { id: "dumplings", label: "Пельмени и вареники" },
  { id: "main-dishes", label: "Вторые блюда" },
]

export function StickyNavigation() {
  const [activeSection, setActiveSection] = useState("drinks")
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const checkScrollCapabilities = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollLeft = container.scrollLeft
      const scrollWidth = container.scrollWidth
      const clientWidth = container.clientWidth

      const tolerance = 1

      setCanScrollLeft(scrollLeft > tolerance)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - tolerance)
    }
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200 // Account for header + nav height

      // Find the section that's currently most visible
      let currentSection = "drinks" // Default to first section

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop } = element
          if (scrollPosition >= offsetTop) {
            currentSection = section.id
            break
          }
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      const handleContainerScroll = () => {
        checkScrollCapabilities()
      }

      container.addEventListener("scroll", handleContainerScroll)
      // Check initial state
      checkScrollCapabilities()

      // Also check on resize
      const handleResize = () => {
        setTimeout(checkScrollCapabilities, 100)
      }
      window.addEventListener("resize", handleResize)

      return () => {
        container.removeEventListener("scroll", handleContainerScroll)
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeButton = scrollContainerRef.current.querySelector(`[data-section="${activeSection}"]`) as HTMLElement
      if (activeButton) {
        const container = scrollContainerRef.current
        const containerWidth = container.offsetWidth
        const buttonLeft = activeButton.offsetLeft
        const buttonWidth = activeButton.offsetWidth

        // Calculate scroll position to center the active button
        const scrollLeft = buttonLeft - containerWidth / 2 + buttonWidth / 2

        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        })
      }
    }
  }, [activeSection])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 68
      const navHeight = 48
      const padding = 20
      const offsetTop = element.offsetTop - headerHeight - navHeight - padding

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="sticky top-[46px] z-40 bg-[#f5f1e8] border-b border-[#e8dcc0]">
      <div className="flex justify-center py-2 px-0">
        <div className="relative w-full max-w-4xl">
          {/* Left scroll button - overlay style */}
          {canScrollLeft && (
            <button
              onClick={scrollLeft}
              className="absolute left-1 top-1/2 -translate-y-1/2 z-20 p-1.5 bg-[#f5f1e8]/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-[#e8dcc0]/90 transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 text-[#8B4513]" />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            className="flex gap-2 justify-center overflow-x-auto scrollbar-hide scroll-smooth w-full px-6"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
            onScroll={checkScrollCapabilities}
          >
            {sections.map((section) => (
              <button
                key={section.id}
                data-section={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors flex-shrink-0 ${
                  activeSection === section.id
                    ? "bg-[#8B4513] text-white"
                    : "bg-[#e8dcc0] text-[#8B4513] hover:bg-[#d4c5a0]"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Right scroll button - overlay style */}
          {canScrollRight && (
            <button
              onClick={scrollRight}
              className="absolute right-1 top-1/2 -translate-y-1/2 z-20 p-1.5 bg-[#f5f1e8]/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-[#e8dcc0]/90 transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 text-[#8B4513]" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
