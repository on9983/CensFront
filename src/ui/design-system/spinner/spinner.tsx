import clsx from "clsx";

interface Props {
    size?: "small" | "medium" | "large" | "page";
    variant?: "primary" | "secondary";
}

export const Spinner = ({ size = "medium", variant = "primary" }: Props) => {
    let variantStyles: string,
        variantBgStyle: string,
        sizeStyles: string,
        sizeRayon: string = "";

    switch (size) {
        case "small":
            sizeStyles = "w-6 h-6";
            sizeRayon = "40";
            break;
        case "medium": // Default
            sizeStyles = "w-9 h-9";
            sizeRayon = "40";
            break;
        case "large":
            sizeStyles = "w-12 h-12";
            sizeRayon = "45";
            break;
        case "page":
            sizeStyles = "w-24 h-24";
            sizeRayon = "45";
            break;
    }

    switch (variant) {
        case "primary": // Default
            variantStyles = "text-oniPrimary";
            variantBgStyle = "text-oniPrimary-100";
            break;
        case "secondary":
            variantStyles = "text-oniPrimary-100";
            variantBgStyle = "text-oniPrimary";
            break;
    }

    return (
        <svg
            role="spinner"
            className={clsx(sizeStyles, variantStyles, "animate-spin")}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                className={clsx("opacity-30")}
                cx="50"
                cy="50"
                r="50"
                fill="currentColor"
            />
            <path
                d="M0,50 a1,1 0 0,0 100,0"
                transform="rotate(90, 50 50)"
                fill="currentColor"
            />
            <circle
                className={variantBgStyle}
                cx="50"
                cy="50"
                r={sizeRayon}
                fill="currentColor"
            />
        </svg>
    );
};
