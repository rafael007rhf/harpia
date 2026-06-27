import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Harpia — Gestão de Investidores",
  description: "Plataforma B2B para gestão de investidores de incorporadoras",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className={`${inter.className} h-full bg-[#F5F7FA] text-[#2C3E50]`}>
        {children}
      </body>
    </html>
  )
}
