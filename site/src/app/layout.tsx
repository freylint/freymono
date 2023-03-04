import 'tailwindcss/tailwind.css'

export const metadata = {
  title: 'Freyground',
  description: 'Personal blog and project page.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/helvetica-neue-5" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
