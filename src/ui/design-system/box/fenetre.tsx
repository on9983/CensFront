import clsx from "clsx";
import { Box } from "./box";
import { Button } from "../button/button";

interface Props {
    titre: string;
    children: React.ReactNode;
    className?: string;
    actionFermeture: Function;
    width?: string;
    height?: string;
    hauteur?: string;
}

export const Fenetre = ({
    titre,
    children,
    className,
    actionFermeture,
    width = "w-[460px]",
    height = "h-[200px]",
    hauteur = "top-1/4",
}: Props) => {
    return (
        <Box
            width={width}
            className={clsx(
                "absolute",
                hauteur,
                "left-1/4 text-left text-oniCapMd text-oniPrimary"
            )}
        >
            <div className="w-full pb-2 flex items-center justify-between border-b border-b-oniPrimary-150">
                <div className="text-oniH2 text-oniPrimary-700">{titre}</div>
                <Button size="small" action={actionFermeture}>
                    {"Fermer"}
                </Button>
            </div>
            <div
                className={clsx(
                    height,
                    " p-2 overflow-auto border-b border-b-oniPrimary-150"
                )}
            >
                {children}
            </div>
        </Box>
    );
};
