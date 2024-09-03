import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        colors: {
            oniDevMode: {
                100: "#FEE0FF",
                DEFAULT: "#FC82FF",
            },
            oniAlert: {
                danger: "#FF1F00",
                success: "#37C85B",
                warning: "#DFA941",
            },
            oniPrimary: {
                100: "#DFE5E5",
                120: "#d7dddd",
                150: "#CAD6D6",
                200: "#BECBCB",
                300: "#9EB1B1",
                400: "#7D9797",
                DEFAULT: "#5D7D7D",
                600: "#4A6464",
                700: "#384B4B",
                800: "#253232",
                900: "#131919",
            },
            oniBlanc: {
                100: "#ffffff",
                200: "#F8F8F8",
                300: "#F1F1F1",
                400: "#EAEAEA",
                DEFAULT: "#E3E3E3",
                600: "#DBDBDB",
                700: "#D4D4D4",
                800: "#CDCDCD",
                900: "#C6C6C6",
            },
            oniNoir: {
                100: "#000000",
                200: "#161616",
                300: "#2B2B2B",
                400: "#414141",
                DEFAULT: "#575757",
                600: "#6C6C6C",
                700: "#828282",
                800: "#979797",
                900: "#ADADAD",
            },
        },
        fontSize: {
            oniDisplay: [
                "48px",
                {
                    fontWeight: "300",
                },
            ],
            oniH1: [
                "36px",
                {
                    fontWeight: "300",
                },
            ],
            oniH2: [
                "32px",
                {
                    fontWeight: "300",
                    letterSpacing: "0.025em",
                },
            ],
            oniH3: [
                "24px",
                {
                    fontWeight: "300",
                    letterSpacing: "0.025em",
                },
            ],
            oniCapLg: [
                "20px",
                {
                    fontWeight: "400",
                    letterSpacing: "0.025em",
                    lineHeight: "26px",
                },
            ],
            oniCapMd: [
                "18px",
                {
                    fontWeight: "400",
                    letterSpacing: "0.025em",
                    lineHeight: "24px",
                },
            ],
            oniCapSm: [
                "16px",
                {
                    fontWeight: "400",
                    letterSpacing: "0.025em",
                    lineHeight: "20px",
                },
            ],
            oniCapLgLight: [
                "20px",
                {
                    fontWeight: "300",
                    letterSpacing: "0.03em",
                    lineHeight: "26px",
                },
            ],
            oniCapMdLight: [
                "18px",
                {
                    fontWeight: "300",
                    letterSpacing: "0.03em",
                    lineHeight: "24px",
                },
            ],
            oniCapSmLight: [
                "16px",
                {
                    fontWeight: "300",
                    letterSpacing: "0.03em",
                    lineHeight: "20px",
                },
            ],
            oniTexte: [
                "14px",
                {
                    fontWeight: "300",
                    letterSpacing: "0.03em",
                    lineHeight: "150%",
                },
            ],
            oniSmall: [
                "11px",
                {
                    fontWeight: "300",
                    letterSpacing: "0.03em",
                    lineHeight: "150%",
                },
            ],
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
