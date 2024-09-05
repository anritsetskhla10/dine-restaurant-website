/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',                
    './src/**/*.{js,jsx,ts,tsx}',   
    './components/**/*.{js,jsx}',   
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          Beaver: '#9e7f66', 
          CodGray: '#111111',
        },
       secondary: {
          Mirage: '#17192b',
          EbonyClay: '#242b37', 
          ShuttleGray: '#AAB8C2',
        },
      },
    },
  },
  plugins: [],
}

