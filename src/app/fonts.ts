import localFont from 'next/font/local'

// Main font for body text
export const poppinsRegular = localFont({
  src: '../app/assets/fonts/Poppins-Regular (1).ttf',
  variable: '--font-poppins-regular',
})

// Font for headings and important text
export const poppinsBold = localFont({
  src: '../app/assets/fonts/Poppins-Bold (1).ttf',
  variable: '--font-poppins-bold',
}) 