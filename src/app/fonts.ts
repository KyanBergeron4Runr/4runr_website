
import localFont from 'next/font/local'

// Main font for body text
export const poppinsRegular = localFont({
  src: '../app/assets/fonts/Poppins-Regular.ttf',
  variable: '--font-poppins-regular',
  display: 'swap',
})

// Font for headings and important text
export const poppinsBold = localFont({
  src: '../app/assets/fonts/Poppins-Bold.ttf',
  variable: '--font-poppins-bold',
  display: 'swap',
})
