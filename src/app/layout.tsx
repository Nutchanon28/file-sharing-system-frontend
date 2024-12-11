import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { CustomApolloProvider } from '@/shared/apollo-client'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'File Sharing System',
  description: 'GraphQL Study',
  icons: '/favicon.gif',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomApolloProvider>{children}</CustomApolloProvider>
      </body>
    </html>
  )
}
