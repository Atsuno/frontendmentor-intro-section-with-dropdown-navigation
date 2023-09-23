import './globals.css'

import type { Metadata } from 'next'
import { Epilogue } from 'next/font/google'

const epilogue = Epilogue({ weight: ['500', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Frontend Mentor | Intro section with dropdown navigation',
  description: 'Your challenge is to build out this intro section with dropdown navigation and get it looking as close to the design as possible.',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <html lang="en">
    <body className={`${epilogue.className} flex justify-center`}>{children}</body>
  </html>
)

export default RootLayout
