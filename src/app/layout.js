import { Lato } from 'next/font/google'
import './globals.css'
import Image from 'next/image'


const lato = Lato({
   subsets: ['latin'], 
  weight: ['300', '400', '700']
  })

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={lato.className}>{children}</body>
      <head>
      <link rel="icon" href="/image/logo-unipatas.png"/>
      </head>
    </html>
  )
}
