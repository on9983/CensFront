import clsx from "clsx";

interface Props {
    children: React.ReactNode;
    className?: string;
    pX?: string;
    pY?: string;
    width?: string;
}

export const Box = ({
    children,
    className,
    pX = "px-7",
    pY = "py-5",
    width = "w-full",
}: Props) => {
    return (
        <div
            className={clsx(
                width,
                "border border-oniPrimary-150 rounded-lg bg-oniPrimary-100 z-10 shadow-lg ",
                pX,
                pY,
                className
            )}
        >
            {children}
        </div>
    );
};
