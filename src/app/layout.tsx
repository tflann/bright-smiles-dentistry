import type { Metadata } from 'next'
import { Lato, Open_Sans, Roboto_Slab, Merriweather } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
})

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
})

export const metadata: Metadata = {
  title: 'Bright Smiles Dentistry | Family Dental Care in Spokane',
  description: 'Trusted family dental care in Spokane, Spokane Valley, and Post Falls. Gentle, modern dentistry for all ages. Book your appointment today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${openSans.variable} ${robotoSlab.variable} ${merriweather.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
} 