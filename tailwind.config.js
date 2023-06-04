/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "../components"],
    theme: {
        container: {
            center: true,
        },
        extend: {
            fontFamily: {
                jua: ["Jua", "sans-serif"],
                outfit: ["Outfit Variable", "san-serif"],
            },
            colors: {
                1: "#263238",
                2: "#75A3C8",
                3: "#90CAF9",
                4: "#BCDFFB",
                5: "#DDEFFD",
            },
            backgroundImage: {
                "illust-2": "url('/image/illust-2.svg')",
            },
            dropShadow: {
                "custom-1": "0px 4px 15px rgba(0, 0, 0, 0.15)",
            },
        },
    },
    plugins: [],
};
