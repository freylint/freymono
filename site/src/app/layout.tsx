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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/firacode/6.2.0/fira_code.min.css" integrity="sha512-MbysAYimH1hH2xYzkkMHB6MqxBqfP0megxsCLknbYqHVwXTCg9IqHbk+ZP/vnhO8UEW6PaXAkKe2vQ+SWACxxA==" />
      </head>
      <body className='font-sans'>{children}</body>
    </html>
  )
}
