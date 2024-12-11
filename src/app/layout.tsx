import type { Metadata } from 'next'
import { IBM_Plex_Sans_Thai } from 'next/font/google'
import './globals.css'
import { CustomApolloProvider } from '@/shared/apollo-client'
import { cn } from '@/lib/utils'

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ['thai'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
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
      <body className={cn('antialiased', ibmPlexSansThai.className)}>
        <CustomApolloProvider>{children}</CustomApolloProvider>
      </body>
    </html>
  )
}
