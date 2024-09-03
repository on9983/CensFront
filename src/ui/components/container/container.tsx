import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
    sizeW?: "large" | "normal";
}

export const Container = ({ children, className, sizeW = "normal" }: Props) => {
    let sizeWStyle: string = "max-w-5xl";

    switch (sizeW) {
        case "large":
            sizeWStyle = "max-w-7xl";
            break;
    }

    return (
        <div
            className={clsx(
                // "w-full max-w-7xl mx-auto px-5 lg:px-10",
                "w-full " + sizeWStyle + " mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};
