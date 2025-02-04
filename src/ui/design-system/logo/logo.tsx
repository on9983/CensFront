
import { TypeLogoSize } from "@/types/component/images/logo-types";
import { TypeThemeGnrl } from "@/types/component/variantType";
import clsx from "clsx";

interface Props {
    size?: TypeLogoSize;
    theme?: TypeThemeGnrl | "";
}

export const Logo = ({ size = "medium", theme = "" }: Props) => {
    let sizeLogo: number, themeStyle: string;

    switch (size) {
        case "very-small":
            sizeLogo = 60;
            break;
        case "small":
            sizeLogo = 80;
            break;
        case "medium": // Default
            sizeLogo = 100;
            break;
        case "large":
            sizeLogo = 138;
            break;
    }
    themeStyle = "";
    switch (theme) {
        case "reversed":
            themeStyle = "text-oniPrimary-100";
            break;
        case "primary":
            themeStyle = "text-oniPrimary";
            break;
    }

    return (
        <svg
            width={sizeLogo}
            viewBox="0 0 80 80"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <rect width="80" height="80" fill="url(#pattern0)" />
            <defs>
                <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlinkHref="#image0_641_32" transform="scale(0.005)" />
                </pattern>
                <image
                    id="image0_641_32"
                    width="200"
                    height="200"
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    );
};
