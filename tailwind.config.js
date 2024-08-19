/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Включаем поддержку темной темы с помощью класса 'dark'
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      margin: {
        'custom-top': '50px', // Ваше кастомное значение
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        tertiary: 'var(--tertiary-color)',
        text: 'var(--text-color)',
        background: 'var(--background-color)',
      },
      backgroundImage: {
        'primary-gradient': 'var(--primary-gradient)',
      },
      opacity: {
        '1': '0.1', // Добавляем кастомное значение прозрачности 10%
        // Можно добавить другие значения, если нужно
      },
    },
  },
  plugins: [],
};
