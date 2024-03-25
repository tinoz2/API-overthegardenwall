import keepPreset from "keep-react/preset";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [keepPreset],
  theme: {
    extend: {
      colors: {
        navbar: '#7A573D',
        get: '#362310',
        background: '#F2F4F3',
        main: '#adc178',
        crud: '#6420AA',
        jwt: "#6B240C",
        route: '#54B435',
        error: '#FF1700',
        characters: '#2D46B9',
        postman: '#FF9300',
        sidebar: '#49321D',
      }
    },
    screens: {
      'sm': {'max': '576px'},
      'md': {'min': '576px'},
    }
  }
};