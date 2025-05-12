import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'
import QueryClientProvider from '@/shared/providers/query-client-provider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: 'Nepse AI',
  description: 'Nepse AI is a Nepali stock market prediction tool.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} ${inter.className} antialiased`}>
        <main>
          <QueryClientProvider>{children}</QueryClientProvider>
        </main>
      </body>
    </html>
  )
}
