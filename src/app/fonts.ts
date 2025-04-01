import { Poppins } from 'next/font/google'

// Main font for body text
export const poppinsRegular = Poppins({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins-regular',
})

// Font for headings and important text
export const poppinsBold = Poppins({
  weight: ['700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins-bold',
})
