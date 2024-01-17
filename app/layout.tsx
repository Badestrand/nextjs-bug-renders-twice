'use client'

import {useEffect} from 'react'

export default function RootLayout({ children }) {
  useEffect(() => {
    console.log('RootLayout mounted', new Date().getTime())
  }, [])
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
}
