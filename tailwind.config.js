/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',                
    './src/**/*.{js,jsx,ts,tsx}',   
    './components/**/*.{js,jsx}',   
  ],
  theme: {
    extend: {
      screens: { 
        'xl1340': '1340px',
      },
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
      backgroundImage: {
        'footerImg': "url('/assets/footer.jpg')",
        'BookingImg': "url(/assets/bookingFirst.jpg)",
      },
      boxShadow: {
        'shadow': '0 75px 100px -50px rgba(56, 66, 85, 0.5)', 
      },
    },
  },
  plugins: [],
}

