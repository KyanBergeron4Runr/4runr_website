import localFont from 'next/font/local'

// Main font for body text
export const poppinsRegular = localFont({

  src: '../public/fonts/Poppins-Regular-1.ttf',

  src: '../fonts/Poppins-Regular.ttf',

  variable: '--font-poppins-regular',
  display: 'swap',
})

// Font for headings and important text
export const poppinsBold = localFont({

  src: '../public/fonts/Poppins-Bold-1.ttf'
  src: '../fonts/Poppins-Bold.ttf',

  variable: '--font-poppins-bold',
  display: 'swap',
})