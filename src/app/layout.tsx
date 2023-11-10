import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@radix-ui/themes/styles.css';
import { Flex, Theme } from '@radix-ui/themes';
import Header from "@/components/header"
import Footer from "@/components/footer"
import Social from "@/components/social"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="bg-red-700 {inter.className}">
        <Theme appearance="light">
          <Flex direction="column">
            <Header />
            <Social />
            <main className="flex flex-col items-center justify-between p-2 rounded-t-md bg-teal-50">
              {children}
            </main>
            <div className="h-0.5 bg-cyan-600"></div>
            <Footer />
          </Flex>
        </Theme>
      </body>
    </html>
  )
}
