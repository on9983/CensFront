import { IconProps } from "@/types/iconProps";
import clsx from "clsx";
import { Spinner } from "../spinner/spinner";
import { TypeDeLien, TypeDeLiens } from "@/lib/typeDeLien";
import Link from "next/link";
import { TypeVariantGnrl } from "@/types/component/variantType";

interface Props {
    size?: "small" | "medium" | "large";
    variant?: TypeVariantGnrl;
    disabled?: boolean;
    icon?: string | IconProps | any;
    iconPosition?: "left" | "right";
    isLoading?: boolean;
    children?: React.ReactNode;
    baseUrl?: string;
    linkType?: TypeDeLien;
    action?: Function;
    type?: "button" | "submit";
    fullWidth?: boolean;
    active?: boolean;
    className?: string;
}

export const Button = ({
    size = "medium",
    variant = "primary",
    disabled = false,
    icon,
    iconPosition = "right",
    isLoading,
    children,
    baseUrl,
    linkType = "internal",
    action = () => {},
    type = "button",
    fullWidth = false,
    active = false,
    className = "",
}: Props) => {
    // console.log(icon);

    let variantStyles: string = "",
        sizeStyles: string = "",
        iconStyle: string = "",
        iconSizeStyle: string = "",
        icoSizeTest: number = 0;

    switch (variant) {
        case "primary": // Default
            variantStyles =
                "bg-oniPrimary text-oniPrimary-100 rounded-lg " +
                (disabled
                    ? "opacity-30"
                    : "hover:bg-oniPrimary-700 hover:text-oniBlanc-100 ");
            // iconStyle = " fill-oniBlanc ";
            break;
        case "secondary":
            variantStyles =
                "outline outline-2 outline-offset-[-2px] outline-oniPrimary text-oniPrimary rounded-lg " +
                (disabled
                    ? "opacity-40"
                    : "hover:bg-oniPrimary-200 hover:bg-opacity-60 hover:outline-oniPrimary-600 hover:text-oniPrimary-700");
            // iconStyle = " fill-oniPrimary ";
            break;
        case "danger":
            variantStyles =
                "opacity-55 bg-oniAlert-danger text-oniBlanc-100 rounded-lg font-extrabold " +
                (disabled
                    ? "opacity-30"
                    : "hover:opacity-100 hover:text-oniBlanc-100 ");
            // iconStyle = " fill-oniBlanc ";
            break;
    }

    switch (size) {
        case "small":
            sizeStyles =
                "text-oniCapSm " +
                (icon ? "px-[6px] py-[6px] " : "px-[16px] py-[10px] ") +
                (!children && "aspect-square");
            iconSizeStyle = "h-[28px] w-[28px]";
            icoSizeTest = 28;
            break;
        case "medium": // Default
            sizeStyles =
                "text-oniCapMd " +
                (icon ? "px-[10px] py-[10px] " : "px-[20px] py-[13px] ") +
                (!children && "aspect-square");
            iconSizeStyle = "h-[30px] w-[30px]";
            icoSizeTest = 30;
            break;
        case "large":
            sizeStyles =
                "text-oniCapLg " +
                (icon ? "px-[14px] py-[14px] " : "px-[27px] py-[17px] ") +
                (!children && "aspect-square");
            iconSizeStyle = "h-[32px] w-[32px]";
            icoSizeTest = 32;
            break;
    }

    const handleClick = () => {
        if (action) {
            action();
        }
    };

    const buttonContent = (
        <>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center ">
                    {variant === "primary" ? (
                        <Spinner variant="secondary" size="small" />
                    ) : (
                        <Spinner size="small" />
                    )}
                </div>
            )}
            <div
                className={clsx(
                    "flex items-center justify-center",
                    isLoading && "invisible",
                    className
                )}
            >
                {icon ? (
                    <div className="flex items-center gap-1">
                        {iconPosition === "right" && <>{children}</>}

                        {icon.icon ? (
                            <icon.icon size={icoSizeTest} />
                        ) : (
                            // <svg
                            //     className={clsx(iconSizeStyle)}
                            //     viewBox="0 0 48 48"
                            // >
                            //     <path fill="currentColor" d="M47,5.025c0.006,0.258-0.085,0.518-0.281,0.715  c-0.043,0.042-0.096,0.062-0.144,0.095l-2.69,2.69l0.69,0.69c0.048,0.033,0.102,0.053,0.144,0.095  c0.196,0.197,0.287,0.457,0.281,0.714c0.006,0.258-0.085,0.518-0.281,0.715c-0.042,0.042-0.096,0.062-0.144,0.095L12.861,42.55  c-0.111,0.213-0.287,0.392-0.523,0.481l-9.8,3.844c-0.058,0.031-0.117,0.051-0.181,0.071l-0.012,0.005  c-0.008,0.003-0.017,0.001-0.024,0.004C2.228,46.98,2.135,47.001,2.035,47c-0.098,0.003-0.189-0.015-0.283-0.041  c-0.02-0.006-0.039-0.002-0.06-0.009c-0.008-0.003-0.013-0.01-0.021-0.013c-0.088-0.033-0.164-0.083-0.24-0.141  c-0.039-0.028-0.08-0.053-0.113-0.086s-0.058-0.074-0.086-0.113c-0.058-0.075-0.107-0.152-0.141-0.24  c-0.004-0.008-0.01-0.013-0.013-0.021c-0.007-0.02-0.003-0.04-0.009-0.061c-0.025-0.092-0.043-0.184-0.041-0.281  c0-0.1,0.02-0.193,0.045-0.287c0.004-0.008,0.001-0.016,0.004-0.023l0.006-0.013c0.02-0.063,0.039-0.123,0.07-0.181l3.844-9.8  c0.09-0.236,0.269-0.412,0.482-0.523L33.242,7.406c-0.264-0.834-1.035-1.443-1.957-1.443c-0.609,0-1.151,0.269-1.528,0.689  L29.754,6.65l-3.25,3.25l0.003,0.003L19.67,16.74c-0.381,0.381-0.999,0.381-1.381,0c-0.381-0.381-0.381-1,0-1.381L28.338,5.311  c0.017-0.017,0.038-0.022,0.056-0.037c0.729-0.766,1.751-1.249,2.892-1.249c1.45,0,2.699,0.784,3.396,1.942l2.514-2.513  c0.033-0.047,0.053-0.101,0.095-0.143c0.197-0.197,0.457-0.288,0.715-0.281c0.258-0.007,0.518,0.084,0.715,0.281  c0.042,0.042,0.062,0.096,0.095,0.143l0.69,0.69l2.69-2.69c0.033-0.047,0.053-0.101,0.095-0.143  c0.197-0.197,0.457-0.288,0.715-0.281c0.258-0.007,0.518,0.084,0.715,0.281c0.042,0.042,0.062,0.096,0.095,0.143l2.762,2.762  c0.048,0.033,0.101,0.053,0.144,0.095C46.915,4.508,47.006,4.768,47,5.025z M3.875,44.155l6.376-2.502l-3.875-3.875L3.875,44.155z   M38.004,5.406L7.385,36.025l4.619,4.619l30.619-30.619L38.004,5.406z M43.004,3.406l-2.119,2.119l1.619,1.619l2.119-2.119  L43.004,3.406z" />
                            // </svg>
                            // <Image
                            //     className="text-oniPrimary"
                            //     src="/svg/gear_icon.svg"
                            //     width={28}
                            //     height={28}
                            //     alt=""
                            // />
                            <svg
                                className={clsx(iconSizeStyle)}
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M424.5,216.5h-15.2c-12.4,0-22.8-10.7-22.8-23.4c0-6.4,2.7-12.2,7.5-16.5l9.8-9.6c9.7-9.6,9.7-25.3,0-34.9l-22.3-22.1  c-4.4-4.4-10.9-7-17.5-7c-6.6,0-13,2.6-17.5,7l-9.4,9.4c-4.5,5-10.5,7.7-17,7.7c-12.8,0-23.5-10.4-23.5-22.7V89.1  c0-13.5-10.9-25.1-24.5-25.1h-30.4c-13.6,0-24.4,11.5-24.4,25.1v15.2c0,12.3-10.7,22.7-23.5,22.7c-6.4,0-12.3-2.7-16.6-7.4l-9.7-9.6  c-4.4-4.5-10.9-7-17.5-7s-13,2.6-17.5,7L110,132c-9.6,9.6-9.6,25.3,0,34.8l9.4,9.4c5,4.5,7.8,10.5,7.8,16.9  c0,12.8-10.4,23.4-22.8,23.4H89.2c-13.7,0-25.2,10.7-25.2,24.3V256v15.2c0,13.5,11.5,24.3,25.2,24.3h15.2  c12.4,0,22.8,10.7,22.8,23.4c0,6.4-2.8,12.4-7.8,16.9l-9.4,9.3c-9.6,9.6-9.6,25.3,0,34.8l22.3,22.2c4.4,4.5,10.9,7,17.5,7  c6.6,0,13-2.6,17.5-7l9.7-9.6c4.2-4.7,10.2-7.4,16.6-7.4c12.8,0,23.5,10.4,23.5,22.7v15.2c0,13.5,10.8,25.1,24.5,25.1h30.4  c13.6,0,24.4-11.5,24.4-25.1v-15.2c0-12.3,10.7-22.7,23.5-22.7c6.4,0,12.4,2.8,17,7.7l9.4,9.4c4.5,4.4,10.9,7,17.5,7  c6.6,0,13-2.6,17.5-7l22.3-22.2c9.6-9.6,9.6-25.3,0-34.9l-9.8-9.6c-4.8-4.3-7.5-10.2-7.5-16.5c0-12.8,10.4-23.4,22.8-23.4h15.2  c13.6,0,23.3-10.7,23.3-24.3V256v-15.2C447.8,227.2,438.1,216.5,424.5,216.5z M336.8,256L336.8,256c0,44.1-35.7,80-80,80  c-44.3,0-80-35.9-80-80l0,0l0,0c0-44.1,35.7-80,80-80C301.1,176,336.8,211.9,336.8,256L336.8,256z"
                                />
                            </svg>
                        )}

                        {iconPosition === "left" && <>{children}</>}
                    </div>
                ) : (
                    <>{children}</>
                )}
            </div>
        </>
    );

    const buttonElement = (
        <button
            type={type}
            className={clsx(
                variantStyles,
                sizeStyles,
                isLoading && "cursor-not-allowed",
                // disabled &&
                //     (() => {
                //         if (variantStyles === "secondary") {
                //             return "opacity-60";
                //         } else {
                //             return "opacity-30";
                //         }
                //     })(),
                disabled && "cursor-not-allowed",
                fullWidth && "w-full flex justify-center",
                active && "bg-oniPrimary-150",
                "relative oniAnimated"
            )}
            onClick={handleClick}
            disabled={disabled || isLoading ? true : false}
        >
            {buttonContent}
        </button>
    );

    if (baseUrl) {
        if (baseUrl === "none") {
            return <Link href="/page-travaux">{buttonElement}</Link>;
        }
        if (linkType === TypeDeLiens.EXTERNAL) {
            return (
                <a href={baseUrl} target="_blank">
                    {buttonElement}
                </a>
            );
        } else {
            return <Link href={baseUrl}>{buttonElement}</Link>;
        }
    }
    return buttonElement;
};
