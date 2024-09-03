import { v4 } from "uuid";
import { Typography } from "../typography/typography";
import clsx from "clsx";
import { Carte } from "../cadran/carte";
import { CarteData } from "@/types/component/carteElement";
import { Cadran } from "../cadran/cadran";
import {
    RiAlertFill,
    RiCheckFill,
    RiCloseCircleFill,
    RiQuestionFill,
    RiSkullFill,
} from "react-icons/ri";
import Link from "next/link";
import { Spinner } from "../spinner/spinner";
import { Panneau } from "../box/panneau";
import { ActiveLink } from "@/ui/components/navigation/active-link";
import { useRouter } from "next/router";
import { TableauByIdType } from "@/types/component/liste/tableau-type";

interface Props {
    data: any;
    cartes?: CarteData[];
    className?: string;
    msgVide?: string;
    // type: "Espaces" | "Vehicules";
    action?: (labelToClick: string, valeur: any) => void;
    height?: string;
}

export const Tableau = ({
    data,
    cartes,
    className,
    msgVide = "Aucun élément enregistré.",
    // type,
    action,
    height = "h-[332px]",
}: Props) => {
    // const router = useRouter();

    let i = 0,
        j = 0,
        k = 0;
    let colWSize = "",
        colorStyle = "";

    // console.log(cartes);
    // console.log(data);

    return (
        <div
            className={clsx(className, data[0] && "border-b border-oniPrimary")}
        >
            <>
                {data[0] ? (
                    <>
                        <Typography
                            truncate
                            variant="CapLg"
                            theme="primary"
                            className="w-full pb-2 pr-4 flex justify-between text-center border-b border-b-oniPrimary-150"
                        >
                            {data[0] &&
                                data[0].map((valeur: string) => {
                                    switch (i) {
                                        case 0:
                                            if (cartes) {
                                                colWSize = "w-[80px]";
                                                break;
                                            } else {
                                                i = i - 1;
                                                break;
                                            }

                                        case 1:
                                            colWSize = "w-[280px]";
                                            break;
                                        case 2:
                                            colWSize = "w-[140px]";
                                            break;
                                        case 3:
                                            colWSize = "w-[70px]";
                                            break;
                                        case 4:
                                            colWSize = "w-[140px]";
                                            break;
                                        default:
                                            colWSize = "";
                                            break;
                                    }
                                    i = i + 1;
                                    return (
                                        <div
                                            key={v4()}
                                            className={clsx(colWSize, "")}
                                        >
                                            {valeur}
                                        </div>
                                    );
                                })}
                        </Typography>
                        <div className={clsx(height, "w-full overflow-auto")}>
                            {Object.keys(data).map((key: any) => {
                                if (key !== "0") {
                                    j = 0;

                                    //console.log(data[key]);

                                    return (
                                        <div
                                            key={v4()}
                                            className="w-full py-[1px] pr-4 flex justify-between text-oniCapSm text-oniNoir border-b border-b-oniPrimary-150"
                                        >
                                            {data[key].map(
                                                (
                                                    valeur: any,
                                                    index: number
                                                ) => {
                                                    // console.log(
                                                    //     valeur
                                                    // );
                                                    switch (j) {
                                                        case 0:
                                                            if (cartes) {
                                                                colWSize =
                                                                    "w-[80px]";
                                                                valeur = (
                                                                    <Cadran
                                                                        src={
                                                                            cartes[
                                                                                key
                                                                            ]
                                                                                .imgUrl
                                                                        }
                                                                        alt={
                                                                            cartes[
                                                                                key
                                                                            ]
                                                                                .imgAlt
                                                                        }
                                                                        size="Vignette"
                                                                    />
                                                                );
                                                                break;
                                                            } else {
                                                                j = j - 1;
                                                                break;
                                                            }
                                                        case 1:
                                                            colWSize =
                                                                "w-[280px] justify-start";
                                                            break;
                                                        case 2:
                                                            colWSize =
                                                                "w-[140px] justify-center";
                                                            break;
                                                        case 3:
                                                            colWSize =
                                                                "w-[70px] justify-center";
                                                            break;
                                                        case 4:
                                                            colWSize =
                                                                "w-[140px] justify-center";
                                                            break;
                                                        default:
                                                            colWSize = "";
                                                            break;
                                                    }
                                                    j = j + 1;

                                                    switch (valeur) {
                                                        case "OK":
                                                            valeur = (
                                                                <RiCheckFill
                                                                    size={40}
                                                                />
                                                            );
                                                            colorStyle =
                                                                "text-oniAlert-success";
                                                            break;
                                                        case "RETIRED":
                                                            valeur = (
                                                                <RiCloseCircleFill
                                                                    size={40}
                                                                />
                                                            );
                                                            colorStyle =
                                                                "text-oniAlert-noir-100";
                                                            break;
                                                        case "URGENT":
                                                            valeur = (
                                                                <RiAlertFill
                                                                    size={40}
                                                                />
                                                            );
                                                            colorStyle =
                                                                "text-oniAlert-danger";
                                                            break;
                                                        case "PRESQUE":
                                                            valeur = (
                                                                <RiAlertFill
                                                                    size={40}
                                                                />
                                                            );
                                                            colorStyle =
                                                                "text-oniAlert-warning";
                                                            break;
                                                        case "PERIMED":
                                                            valeur = (
                                                                <RiSkullFill
                                                                    size={40}
                                                                />
                                                            );
                                                            colorStyle =
                                                                "text-oniAlert-danger";
                                                            break;
                                                        case "INCONNU":
                                                            valeur = (
                                                                <RiQuestionFill
                                                                    size={40}
                                                                />
                                                            );
                                                            colorStyle =
                                                                "text-oniAlert-danger";
                                                            break;
                                                        default:
                                                            colorStyle =
                                                                "text-oniPrimary-600";
                                                            break;
                                                    }

                                                    return (
                                                        <ActiveLink
                                                            href={
                                                                "/mes-espaces/mes-vehicules/mon-vehicule"
                                                            }
                                                            key={v4()}
                                                            action={() => {
                                                                action &&
                                                                    action(
                                                                        key,
                                                                        valeur
                                                                    );
                                                            }}
                                                            variant="rien"
                                                            className={clsx(
                                                                "oniAnimated rounded-lg hover:bg-oniPrimary-150 hover:text-oniPrimary-700",
                                                                colorStyle,
                                                                colWSize,
                                                                "h-[48px]",
                                                                typeof valeur ===
                                                                    "string" ||
                                                                    valeur instanceof
                                                                        Array
                                                                    ? "grid grid-cols-1 place-items-center overflow-y-auto"
                                                                    : "flex items-center overflow-clip"
                                                            )}
                                                        >
                                                            {valeur instanceof
                                                            Array ? (
                                                                <>
                                                                    {valeur.map(
                                                                        (
                                                                            tache
                                                                        ) => (
                                                                            <div
                                                                                className="w-full text-left text-oniTexte"
                                                                                key={v4()}
                                                                            >
                                                                                {"- " +
                                                                                    tache}
                                                                            </div>
                                                                        )
                                                                    )}
                                                                </>
                                                            ) : (
                                                                <>{valeur}</>
                                                            )}
                                                        </ActiveLink>
                                                    );
                                                }
                                            )}
                                        </div>
                                    );
                                }
                                return;
                            })}
                        </div>
                    </>
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <Panneau>{msgVide}</Panneau>
                    </div>
                )}
            </>
        </div>
    );
};
