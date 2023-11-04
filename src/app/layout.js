import { Anybody } from 'next/font/google'
import Login from "./components/Login"

const fontes = Anybody({
   subsets: ['latin'], 
  weight: ['300', '400', '700']
  })

export default function RootLayout({ children }) {
  return (
    <head> 
    <html lang="pt-br"> 
      <body className={fontes.className}>
        <Login/>
        {children}
        </body>
         </html>
      </head>
   
  )
}