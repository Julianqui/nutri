import type { Metadata } from 'next'
import './styles.scss'

export const metadata: Metadata = {
  title: 'Nutri App',
  description: 'Aplicación de nutrición',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
