import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'navbarBlack': '#111111',
                'backgroundGray': '#222222',
                'tagGreen': '#00ffbb',
                'liveGreen': '#33ee33',
                'supportYellow': '#BB9900',
                'telexBlue': '#88DDFF',
            },
        },
    },

    plugins: [forms],
};
