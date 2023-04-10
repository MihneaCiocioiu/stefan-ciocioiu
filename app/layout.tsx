import './globals.css'

export const metadata = {
  title: 'Stefan Ciocioiu',
  description: 'Crescator de iepuri',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
