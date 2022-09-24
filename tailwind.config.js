/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
    colors: {
      "main": "#A88929",
      "dark": "#431396",
      "ligth": "#3BC996",
      "whi":"#B9B5C0",
      "grey":"#999999"
    },
    spacing: {
      "250":"250px",
      "350":"350px",
      "50":"50px",
      "15":"15px",
      "10":"10px",
      "8":"8px"
    },
    fontSize: {
      "small":"10px",
      "large":"14px"
    },
    borderRadius: {
      DEFAULT:"10px",
      "10":"20px"
    }
  },
},
  plugins: [],
}
