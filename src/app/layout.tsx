import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Huddling Club Report',
  description: 'Huddling Club 주간 리포트',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
