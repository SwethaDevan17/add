export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: '#6F8E76', beige: '#F7F2EA', cream: '#FFFDF8', gold: '#D6B370', brown: '#8B7355', charcoal: '#2E2E2E'
      },
      fontFamily: { heading: ['"Playfair Display"', 'serif'], body: ['Inter', 'sans-serif'] },
      boxShadow: { premium: '0 12px 32px rgba(111,142,118,.18)' }
    }
  },
  plugins: []
}
