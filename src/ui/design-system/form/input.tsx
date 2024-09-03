import clsx from "clsx";
import { Typography } from "../typography/typography";
import { RiInformationFill, RiInformationLine } from "react-icons/ri";
import { useToggle } from "@/hooks/use-toggle";
import { SubmitHandler, useForm } from "react-hook-form";
import { Spinner } from "../spinner/spinner";
import { useState } from "react";

interface Props {
    size?: "Large" | "Medium" | "Small" | "Mini" | "None";
    variant?: "Normal" | "Discret";
    className?: string;
    children?: React.ReactNode;
    disabled?: boolean;
    isLoading: boolean;
    placeholder?: string;
    type?: "text" | "email" | "password" | "file" | "checkbox";
    accept?: string;
    register?: any;
    errors?: any;
    formProps?: any;
    errorMsg?: string;
    id: string;
    required?: boolean;
    isAutoCompleted?: boolean;
    textArea?: boolean;
    component?: "input" | "textarea";
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onClick?: (e: React.MouseEventHandler<HTMLInputElement>) => void;
    label?: string;
    value?: string | boolean;
    width?: string;
    height?: string;
    bgColor?: string;
    px?: string;
    autoSize?: boolean;
}

export const Input = ({
    size = "Medium",
    variant = "Normal",
    className,
    children,
    disabled = false,
    isLoading,
    placeholder = "",
    type = "text",
    accept,
    register,
    errors,
    formProps,
    errorMsg = "Veuillez renseigner ce champs avant de valider.",
    id,
    required = false,
    isAutoCompleted = false,
    component: Component = "input",
    onChange,
    onBlur,
    onClick,
    label,
    value,
    width = "w-full",
    height = "",
    bgColor = "bg-oniPrimary-100",
    px = "px-[16px]",
    autoSize = false,
}: Props) => {
    //const [autoW, setAutoW] = useState<string>(width);

    let sizeStyle: string = "",
        variantStyle: string = "",
        styleNonPrioritaire: string = "",
        stylePrioritaire: string = "";

    switch (size) {
        case "Large":
            sizeStyle = "h-[45px] text-oniCapLg";
            break;
        case "Medium":
            sizeStyle = "h-[40px] text-oniCapMd";
            break;
        case "Small":
            sizeStyle = "h-[35px] text-oniCapMd";
            break;
        case "Mini":
            sizeStyle = "h-[30px] text-oniCapSm";
            break;
        case "None":
            sizeStyle = "";
            break;
    }

    switch (variant) {
        case "Normal":
            variantStyle =
                px +
                " border-y border-oniPrimary rounded-lg focus:outline-none focus:ring-2 focus:ring-oniPrimary-400  hover:ring-1 hover:ring-oniPrimary";
            styleNonPrioritaire =
                "bg-oniBlanc-400 focus:bg-oniBlanc-300 placeholder-oniPrimary-300 text-oniPrimary-400";
            break;
        case "Discret":
            variantStyle =
                " outline-none ring-0 " +
                "overflow-visible " +
                bgColor +
                " " +
                "focus:border-b-2 focus:border-oniPrimary";
            styleNonPrioritaire = "bg-transparent";
            sizeStyle = "";
            break;
    }

    if (isLoading || disabled) {
        stylePrioritaire =
            "cursor-not-allowed bg-oniBlanc-600 placeholder-oniNoir-900 text-oniNoir-700 border-oniNoir-700";
    } else {
        if (errors && errors[id]) {
            stylePrioritaire =
                "placeholder-oniAlert-danger text-oniAlert-danger";
        } else {
            stylePrioritaire = styleNonPrioritaire;
        }
    }

    //console.log("errors", errors[id]);

    const handleOnchange = () => {
        //if (type === "file") {
        if (onChange) {
            return { onChange: onChange };
        }
        return {};
    };

    const handleOnblur = () => {
        if (onBlur) {
            //setAutoW("w-min");
            return { onBlur: onBlur };
        }
        return {};
    };

    const handleOnClick = () => {
        if (onClick) {
            return { onClick: onClick };
        }
        return {};
    };

    const handleRegistrer = () => {
        if (register) {
            return {
                ...register(id, {
                    required: {
                        value: required,
                        message: errorMsg,
                    },
                    // onChange: (e: any) => {
                    //     //setValeur(e.target.value);
                    //     formProps?.setValue(
                    //         "textValue",
                    //         e.target.value
                    //     );
                    //     console.log(formProps?.formState);
                    // },
                }),
            };
        }
        return {};
    };

    // const handleOnkeypress = () => {
    //     return {
    //         onkeydown: (el:any) => {
    //             el.style.width = "10px";
    //         },
    //     };
    // };

    return (
        <div className="relative space-y-1">
            {label && (
                <div
                    className={clsx(
                        sizeStyle,
                        "h-auto pb-1",
                        errors && errors[id]
                            ? "text-oniAlert-danger"
                            : "text-oniPrimary "
                    )}
                >
                    {label}
                </div>
            )}
            <label className={height}>
                <div
                    className={
                        type === "file"
                            ? "hidden"
                            : clsx(
                                  type !== "checkbox" && sizeStyle,
                                  className,
                                  height
                              )
                    }
                >
                    <Component
                        type={type}
                        accept={accept}
                        defaultValue={value}
                        //value={valeur}
                        placeholder={placeholder}
                        className={clsx(
                            //autoSize ? width : autoW,
                            !autoSize && width,
                            height,
                            variantStyle,
                            type === "checkbox" ? "cursor-pointer" : "h-full",
                            stylePrioritaire,
                            Component == "textarea" &&
                                "pt-2 overflow-auto resize-none"
                        )}
                        disabled={Boolean(Number(disabled) + Number(isLoading))}
                        {...handleRegistrer()}
                        autoComplete={isAutoCompleted ? "on" : "nope"}
                        {...handleOnchange()}
                        {...handleOnblur()}
                        {...handleOnClick()}
                        // {...handleOnkeypress()}
                    />
                </div>
                {children && children}
            </label>

            {errors && errors[id] && (
                <Typography
                    variant="Small"
                    component="div"
                    className="absolute w-full text-oniAlert-danger inset-y-full flex justify-center items-center gap-1 pt-2"
                >
                    <div>
                        <RiInformationLine size={14} />
                    </div>
                    <div>{errors[id]?.message}</div>
                </Typography>
            )}
            {isLoading && onBlur && (
                <div className="absolute -top-1 right-0 overflow-auto">
                    <Spinner size="small" />
                </div>
            )}
        </div>
    );
};
