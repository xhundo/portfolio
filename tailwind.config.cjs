/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/*.html", "./pages/*.js"],
    theme: {
        extend: {
            colors: {
                darkGray: "rgba(255, 255, 255, 0.2)",
                lightGray: "rgba(217, 217, 217, 1)",
                semiDarkGray: "rgba(255, 255, 255, 0.25)",
            },
            width: {
                62: "3.875",
                60: "3.75em",
                124: "7.75em",
                74: "4.625em",
            },
            height: {
                50: "3.125em",
                60: "3.75em",
                25: "1.563em",
            },
            spacing: {
                99: "6.188em",
                38: "2.375em",
                50: "3.125em",
                34: "2.125em",
                27: "1.688em",
                90: "5.625em",
                64: "3.875em",
                45: "2.813em",
                25: "1.563em",
                74: "4.625em",
            },
            maxWidth: {
                152: "9.5em",
                362: "22.625em",
                802: "50.125em",
            },
            minHeight: {
                850: "53.125em",
            },
            minWidth: {
                1240: "77.5em",
            },
            gap: {
                30: "1.875em",
                6.5: "1.563em",
                7.5: "0.469em",
                22: "1.375em",
                72: "4.5rem",
                92: "5.75em",
            },
            opacity: {
                0.7: "0.70",
                0.8: "0.80",
                0.9: "0.90",
            },
            fontSize: {
                xs: "0.625em",
            },
            fontFamily: {
                sans: ["Manrope", "Arial", "sans-serif"],
            },
        },
    },
    plugins: [],
};
