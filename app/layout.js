'use client';
import './globals.css'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Happy Houseplant</title>
        <meta></meta>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
