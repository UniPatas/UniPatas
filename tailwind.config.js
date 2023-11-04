/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      cores:{
        'darker-purple': '#a110a9',
        'ligther-purple': '#d141e1',
        'pool-green': '#33b3a6',
        'yellow': '#ffc501',
        'brown': '714329',

        theme: {
          extend: {
            backgroundImage: {
              'capa': "url('/assets/capa.png')",
              'logo':  "url('/assets/logo.png')",
            },
          },
        },
       
      },
     
    spacing: {
      '400': 400,
    }
    },
  },
  plugins: [],
}
