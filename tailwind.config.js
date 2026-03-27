/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        steam: {
          bg: '#0f1623',
          panel: '#152033',
          panelSoft: '#1d2a3f',
          border: '#2a3a56',
          text: '#d3e3ff',
          muted: '#7f93b8',
          accent: '#55b3ff',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(85,179,255,0.2), 0 0 18px rgba(85,179,255,0.16)',
        trophy: '0 6px 30px rgba(255, 210, 86, 0.2)',
      },
    },
  },
  plugins: [],
};
