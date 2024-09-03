import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    className?: string;
}

export const CtnDroit = ({ children, className }: Props) => {
    return (
        <div className={clsx(className)}>
            {children ? children : <div className="h-full w-[265px] "></div>}
        </div>
    );
};
