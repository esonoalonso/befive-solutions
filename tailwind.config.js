/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#FFFFFF',
          secondary: '#F7F8FA',
        },
        ink: {
          primary: '#0A0A0A',
          secondary: '#5B5F66',
        },
        accent: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
          soft: '#EFF4FF',
        },
        border: {
          DEFAULT: '#E7E9EC',
        },
        success: '#16A34A',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        recoleta: ['var(--font-recoleta)', 'serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(2.75rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '700' }],
        h2: ['clamp(3rem, 8vw, 7rem)', { lineHeight: '0.98', letterSpacing: '-0.02em', fontWeight: '700' }],
        h3: ['clamp(1.375rem, 2.5vw, 1.75rem)', { lineHeight: '1.25', fontWeight: '600' }],
        body: ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        small: ['0.8125rem', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0.05em' }],
        stack: ['clamp(1.5rem, 3.4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        wordmark: ['clamp(4rem, 16vw, 13rem)', { lineHeight: '0.85', letterSpacing: '-0.03em', fontWeight: '800' }],
      },
      spacing: {
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '48px',
        xl: '96px',
        '2xl': '160px',
      },
      borderRadius: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        pill: '999px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.06)',
        nav: '0 2px 20px rgba(0,0,0,0.08)',
      },
      maxWidth: {
        container: '1240px',
      },
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'marquee-left': 'marquee-left 22s linear infinite',
        'marquee-right': 'marquee-right 26s linear infinite',
      },
    },
  },
  plugins: [],
}
