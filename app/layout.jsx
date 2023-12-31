import Footer from "@/components/footer"
import Navigation from "../components/navigation"
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Users List Page',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="body">
<Navigation/>
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  )
}
