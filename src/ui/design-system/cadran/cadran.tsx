import { CadranSizeType } from "@/types/component/images/imagePreview";
import clsx from "clsx";
import Image from "next/image";
import { ReactNode } from "react";

interface Props {
    size?: CadranSizeType;
    ratio?: number;
    src?: string;
    alt?: string;
    children?: React.ReactNode;
}

export const Cadran = ({
    size = "Medium2",
    ratio = 4 / 3,
    src,
    alt,
    children,
}: Props) => {
    let sizeWCadran: number, sizeHCadran: number, cadranStyle: string;

    switch (size) {
        case "tresLarge1":
            sizeWCadran = 360;
            break;
        case "tresLarge2":
            sizeWCadran = 400;
            break;
        case "Large1":
            sizeWCadran = 280;
            break;
        case "Large2":
            sizeWCadran = 320;
            break;
        case "Medium1":
            sizeWCadran = 200;
            break;
        case "Medium2": // Default
            sizeWCadran = 240;
            break;
        case "Vignette":
            sizeWCadran = 80;
            break;
        case "Small1":
            sizeWCadran = 120;
            break;
        case "Small2":
            sizeWCadran = 160;
            break;
    }
    sizeHCadran = sizeWCadran / ratio;

    cadranStyle =
        "rounded-tl-[16px] rounded-br-[16px] rounded-tr-[8px] rounded-bl-[8px] border ";

    return (
        <div>
            <div
                style={{
                    width: `${sizeWCadran}px`,
                    height: `${sizeHCadran}px`,
                }}
                className={clsx(
                    "relative",
                    cadranStyle,
                    "border-0 overflow-hidden"
                )}
            >
                {src ? (
                    <>
                        <Image
                            fill
                            sizes={sizeWCadran + "px " + sizeHCadran + "px"}
                            priority
                            className={clsx(
                                "object-scale-down blur-xl",
                                cadranStyle
                            )}
                            src={src}
                            alt={
                                alt
                                    ? "Arrière-plan flouté de l'image suivante : " +
                                      alt
                                    : "Arrière-plan flouté de l'image suivante : " +
                                      "Un exemple d'affichage."
                            }
                        />
                        <Image
                            fill
                            sizes={sizeWCadran + "px " + sizeHCadran + "px"}
                            priority
                            className={clsx("object-scale-down ", cadranStyle)}
                            src={src}
                            alt={alt ? alt : "Un exemple d'affichage."}
                        />
                        <>{children}</>
                    </>
                ) : (
                    <>{children}</>
                )}
            </div>
        </div>
    );
};
// object-cover object-center
