/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage: {
        'bgSVG': "url('/coil.svg')",
        'noisy': "url('/noisy.webp')",
      },
      colors: {
        dark: '#0e0e0e',
        accent2: "#1f2328"
      }
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      lgm: {max: '1200px'},
      lgx: '1350px',
      xl: '1700px'
    }
  },
  plugins: [
    require('daisyui'),
  ]
}
