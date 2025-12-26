import type React from "react"
import type { Metadata, Viewport } from "next"
import { Providers } from "./providers"
import "./globals.css"

export const metadata: Metadata = {
  title: "Kyte ERP - The Future of Enterprise Resource Planning",
  description: "AI-powered ERP that's simple, flexible, and lightning fast. Built for small businesses ready to compete with the giants.",
  keywords: ["ERP", "AI", "business management", "inventory", "sales", "HR", "finance", "small business"],
  authors: [{ name: "Kyte" }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
