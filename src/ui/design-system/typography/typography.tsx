import { TypeVariantGnrl } from "@/types/component/variantType";
import clsx from "clsx";
import { Component } from "react";

interface Props {
    variant?:
        | "display"
        | "h1"
        | "h2"
        | "h3"
        | "CapLg"
        | "CapMd"
        | "CapSm"
        | "Texte"
        | "Small";
    component?: "h1" | "h2" | "h3" | "div" | "p" | "span";
    theme?: "black" | "gray" | "grayLight" | "white" | TypeVariantGnrl | "";
    weight?: "heavy" | "light";
    className?: string;
    children: React.ReactNode;
    truncate?: boolean;
}

export const Typography = ({
    variant = "CapMd",
    component: Component = "div",
    theme = "",
    weight = "heavy",
    className,
    children,
    truncate = false,
}: Props) => {
    let variantStyles: string = "",
        colorStyle: string = "";

    switch (variant) {
        case "display":
            variantStyles = "text-oniDisplay";
            break;
        case "h1":
            variantStyles = "text-oniH1";
            break;
        case "h2":
            variantStyles = "text-oniH2";
            break;
        case "h3":
            variantStyles = "text-oniH3";
            break;
        case "CapLg":
            variantStyles =
                weight == "heavy" ? "text-oniCapLg" : "text-oniCapLgLight";
            break;
        case "CapMd": //Default
            variantStyles =
                weight == "heavy" ? "text-oniCapMd" : "text-oniCapMdLight";
            break;
        case "CapSm":
            variantStyles =
                weight == "heavy" ? "text-oniCapSm" : "text-oniCapSmLight";
            break;
        case "Texte":
            variantStyles = "text-oniTexte";
            break;
        case "Small":
            variantStyles = "text-oniSmall";
            break;
    }

    switch (theme) {
        case "black":
            colorStyle = "text-oniPrimary-800";
            break;
        case "gray":
            colorStyle = "text-oniNoir";
            break;
        case "grayLight":
            colorStyle = "text-oniNoir-700";
            break;
        case "white":
            colorStyle = "text-oniBlanc";
            break;
        case "primary":
            colorStyle = "text-oniPrimary";
            break;
        case "secondary":
            colorStyle = "text-oniPrimary-100";
            break;
    }

    return (
        <Component
            className={clsx(
                variantStyles,
                colorStyle,
                className,
                truncate && "relative truncate"
            )}
        >
            {children}
            {/* {truncate && (
                <div className="absolute bottom-0 left-0 opacity-0 hover:opacity-100">
                    <div className="text-oniSmall text-oniPrimary bg-oniBlanc-100">{children}</div>
                </div>
            )} */}
        </Component>
    );
};
