import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Header } from "@/components/header"
import { Suspense } from "react"
import "./globals.css"

const villula = localFont({
  src: "../public/fonts/Villula-Regular.woff2",
  variable: "--font-villula",
  display: "swap",
  preload: true,
})

const euclidRegular = localFont({
  src: "../public/fonts/EuclidCircularB-Regular-WebXL.woff2",
  variable: "--font-euclid-regular",
  display: "swap",
  preload: true,
})

const euclidBold = localFont({
  src: "../public/fonts/EuclidCircularB-Bold-WebXL.woff2",
  variable: "--font-euclid-bold",
  display: "swap",
  preload: true,
})

const euclidSemibold = localFont({
  src: "../public/fonts/EuclidCircularB-Semibold-WebXL.woff",
  variable: "--font-euclid-semibold",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body
        className={`font-sans ${villula.variable} ${euclidRegular.variable} ${euclidBold.variable} ${euclidSemibold.variable}`}
      >
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        {children}
      </body>
    </html>
  )
}
