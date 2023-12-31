import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Flex, Theme } from '@radix-ui/themes'
import Header from "@/components/header"
import Footer from "@/components/footer"
import Social from "@/components/social"
import '@radix-ui/themes/styles.css'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Northeastern University Library',
  description: 'Oakland Campus',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.className} suppressHydrationWarning>
            <body className="bg-red-700 px-6">
                <Theme scaling="95%">
                    <Flex direction="column">
                        <Header />
                        <Social />
                        <main className="items-center justify-between rounded-t-lg bg-teal-50">
                            {children}
                        </main>
                        <div className="h-0.5 bg-red-700"></div>
                        <Footer />
                    </Flex>
                </Theme>
            </body>
        </html>
    )
}
