import Image from "next/image"
import type { ReactNode } from "react"

interface MenuSectionProps {
  title: string
  children: ReactNode
  imageSrc?: string
  imageAlt?: string
  titleMultiline?: boolean
  largeImage?: boolean
}

export function MenuSection({
  title,
  children,
  imageSrc,
  imageAlt,
  titleMultiline = false,
  largeImage = false,
}: MenuSectionProps) {
  if (imageSrc && largeImage) {
    return (
      <section className="mb-12 relative overflow-hidden">
        <div className="flex min-h-[300px]">
          {/* Content column - aligned to match regular sections */}
          <div className="w-2/3 md:w-2/3 px-6 md:px-0 py-8 flex flex-col justify-center">
            <h1
              className={`text-4xl font-title text-[#8B4513] mb-8 tracking-wide ${titleMultiline ? "leading-tight" : ""}`}
            >
              {title}
            </h1>
            <div className="space-y-2">{children}</div>
          </div>

          <div className="relative w-1/3 overflow-hidden">
            <div className="absolute top-0 left-0 w-[150%] md:w-full h-full">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={imageAlt || title}
                fill
                className="object-cover"
                style={{ objectPosition: "center center" }}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (imageSrc) {
    // Section with side image (for other sections)
    return (
      <section className="mb-12">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1">
            <h1
              className={`text-4xl font-title text-[#8B4513] mb-8 tracking-wide ${titleMultiline ? "leading-tight" : ""}`}
            >
              {title}
            </h1>
            <div className="space-y-2">{children}</div>
          </div>
          <div className="mt-6 lg:mt-0 lg:ml-8 flex justify-center lg:justify-end">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt || title}
              width={200}
              height={200}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    )
  }

  // Section without side image (for Блины)
  return (
    <section className="mb-12">
      <h1 className="text-4xl font-title text-[#8B4513] mb-8 tracking-wide">{title}</h1>
      {children}
    </section>
  )
}
