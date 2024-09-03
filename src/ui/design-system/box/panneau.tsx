import clsx from "clsx";

interface Props {
    children: React.ReactNode;
    className?: string;
    pX?: string;
    pY?: string;
}

export const Panneau = ({
    children,
    className,
    pX = "px-12",
    pY = "py-8",
}: Props) => {
    return (
        <div
            className={clsx(
                "max-w-[330px] flex items-center justify-center text-center text-oniPrimary-600 text-oniCapMd border border-oniPrimary bg-oniPrimary-150 rounded-lg",
                pX,
                pY,
                className
            )}
        >
            {children}
        </div>
    );
};
