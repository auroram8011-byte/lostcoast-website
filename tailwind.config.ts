import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                playfair: ['var(--font-playfair)'],
                source: ['var(--font-source-sans)'],
                amadine: ['Amadine', 'sans-serif'],
            },
            colors: {
                brand: {
                    dark: 'var(--color-brand-dark)',
                    primary: 'var(--color-brand-primary)',
                    accent: 'var(--color-brand-accent)',
                    gold: 'var(--color-brand-gold)',
                    mist: 'var(--color-brand-mist)',
                    forest: 'var(--color-brand-forest)',
                }
            }
        },
    },
    plugins: [],
};
export default config;
