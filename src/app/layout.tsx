import { LayoutWrapper } from '@/components/layout'

export const metadata = {
  title: 'Blog App',
  description: '',
}

/** Server component base layout for all pages */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}
