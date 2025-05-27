/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Enable class-based dark mode
    theme: {
      extend: {
        fontFamily: {
          sans: ['Poppins', 'sans-serif'], // Default sans-serif font
          heading: ['Montserrat', 'sans-serif'], // Font for headings
        },
        colors: {
          // Using purple accent theme from previous example
          light: {
            background: '#f9fafb', // gray-50
            text: '#4b5563',      // gray-600
            heading: '#1f2937',    // gray-800
            primary: '#8b5cf6',   // violet-500
            primaryHover: '#7c3aed', // violet-600
            secondary: '#f3f4f6', // gray-100
            card: '#ffffff',
            border: '#e5e7eb',    // gray-200
          },
          dark: {
            background: '#111827', // gray-900
            text: '#d1d5db',      // gray-300
            heading: '#f9fafb',    // gray-50
            primary: '#a78bfa',   // violet-400
            primaryHover: '#c4b5fd', // violet-300
            secondary: '#1f2937', // gray-800
            card: '#1f2937',      // gray-800
            border: '#374151',    // gray-700
          },
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-15px)' },
          },
          fadeInUp: {
              '0%': { opacity: '0', transform: 'translateY(20px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          pulseGlow: { // Example glow for buttons or elements
              '0%, 100%': { boxShadow: '0 0 8px rgba(167, 139, 250, 0.3)' }, /* violet-400 */
              '50%': { boxShadow: '0 0 20px rgba(167, 139, 250, 0.6)' },
          }
        },
        animation: {
          float: 'float 4s ease-in-out infinite', // Slightly slower float
          fadeInUp: 'fadeInUp 0.6s ease-out forwards',
          pulseGlow: 'pulseGlow 2.5s ease-in-out infinite',
        },
        backgroundImage: {
          'gradient-primary': 'linear-gradient(to right, #8b5cf6, #a78bfa)', // violet-500 to violet-400
          'gradient-primary-dark': 'linear-gradient(to right, #7c3aed, #8b5cf6)', // darker gradient for dark mode elements
        }
      },
    },
    plugins: [],
  }
  