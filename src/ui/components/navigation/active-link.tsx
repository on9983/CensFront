import { TypeVariantGnrl } from "@/types/component/variantType";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

interface Props {
    variant?: TypeVariantGnrl;
    href?: string;
    externe?: boolean;
    className?: string;
    children: React.ReactNode;
    action?: Function;
    isActive?: boolean;
}

export const ActiveLink = ({
    variant = "primary",
    href = "/page-travaux",
    externe = false,
    className,
    children,
    action,
    isActive = false,
}: Props) => {
    const router = useRouter();
    let themeStyle: string = "",
        activeStyle: String = "";

    switch (variant) {
        case "primary":
            themeStyle =
                "text-oniNoir hover:text-oniPrimary-600 hover:bg-oniPrimary-150 hover:bg-opacity-60";
            activeStyle =
                "text-oniPrimary bg-oniPrimary-120 hover:bg-oniPrimary-150  font-medium";
            break;
        case "secondary":
            themeStyle =
                "text-oniBlanc hover:bg-oniPrimary-600 hover:text-oniBlanc-100";
            activeStyle =
                "text-oniBlanc-100 hover:bg-oniPrimary-600 hover:text-oniBlanc-100 font-medium";
            break;
        case "rien":
            break;
    }

    const handleClick = () => {
        if (action) {
            action();
        }
    };

    if (action) {
        return (
            <div
                className={clsx(
                    "oniAnimated rounded-lg p-[3px] cursor-pointer",
                    themeStyle,
                    isActive ? activeStyle : "",
                    className
                )}
                onClick={handleClick}
            >
                {children}
            </div>
        );
    }

    isActive = useMemo(() => {
        return router.pathname === href;
    }, [router.pathname, href]);

    return !externe ? (
        <Link
            href={href}
            className={clsx(
                "rounded-lg p-[3px]",
                themeStyle,
                isActive ? activeStyle : "",
                className
            )}
        >
            {children}
        </Link>
    ) : (
        <a
            href={href}
            className={clsx(
                "rounded-lg p-[3px]",
                themeStyle,
                isActive ? activeStyle : "",
                className
            )}
            target="_blank"
        >
            {children}
        </a>
    );
};
