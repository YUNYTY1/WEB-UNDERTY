/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        surface: '#1a1c19',
        plum: '#1f1c27',
        line: '#2c2e2a',
        cream: '#f1eee3',
        lilac: '#b9a7f5',
        mint: '#b7d4a5',
        mute: '#9a9a92',
        dim: '#85857e',
      },
      fontFamily: {
        display: ['"Space Grotesk Variable"', 'system-ui', 'sans-serif'],
        body: ['"Manrope Variable"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        orbit: { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } },
        sweep: { '0%': { transform: 'translateX(-100%)' }, '100%': { transform: 'translateX(500%)' } },
        pop: { '0%': { opacity: 0, transform: 'translateY(12px) scale(.98)' }, '100%': { opacity: 1, transform: 'none' } },
      },
      animation: {
        marquee: 'marquee 45s linear infinite',
        float: 'float 8s ease-in-out infinite',
        orbit: 'orbit 30s linear infinite',
        sweep: 'sweep 4.5s ease-in-out infinite',
        pop: 'pop .28s ease-out both',
      },
    },
  },
  plugins: [],
}