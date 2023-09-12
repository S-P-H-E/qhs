import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import Navbar from './component/Navbar'

const inter = Inter({ subsets: ['latin'] })

const ClashGrotesk = localFont({
  src: '../public/fonts/ClashGrotesk-Semibold.otf',
  variable: '--clash-grotesk',
})

export const metadata: Metadata = {
  title: 'Read A Lot',
  description: 'Dive into the world of words and experience new places and people',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${ClashGrotesk.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
