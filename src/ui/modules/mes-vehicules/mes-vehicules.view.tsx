import { useAuth } from "@/context/AuthUserContext";
import { SUPERADMIN } from "@/lib/user";
import { DataVehiculesType } from "@/types/api/vehicule-data";
import { Box } from "@/ui/design-system/box/box";
import { Fenetre } from "@/ui/design-system/box/fenetre";
import { Button } from "@/ui/design-system/button/button";
import { CsvInput } from "@/ui/design-system/form/file/csvInput";
import { Tableau } from "@/ui/design-system/liste/tableau";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import { RiMenuFill, RiYoutubeFill } from "react-icons/ri";
import { v4 } from "uuid";

interface Props {
    handleSetCrudAdd: () => void;
    dataVehicules?: any;
}

export const MesVehiculesView = ({
    handleSetCrudAdd,
    dataVehicules,
}: Props) => {
    const {
        authUser: { role },
    } = useAuth();
    const router = useRouter();
    const etablissementName = window.sessionStorage.getItem("espace-name");
    const [displayInfo, setDisplayInfo] = useState<ReactElement>(<></>);

    const action = (key: any, valeur: any) => {
        if (valeur instanceof Array) {
            handleDisplayValue(valeur);
        } else {
            window.sessionStorage.setItem("vehicule", key);
            if (dataVehicules) {
                window.sessionStorage.setItem(
                    "vehicule-name",
                    dataVehicules["vehicules"][key][1]
                );
                window.sessionStorage.setItem(
                    "vehicule-image",
                    dataVehicules["images"][key]?.imgUrl
                );
            }
            router.push("/mes-espaces/mes-vehicules/mon-vehicule");
        }
    };

    const handleDisplayValue = (valeur: string[]) => {
        setDisplayInfo(
            <>
                <Fenetre
                    titre="Tâches à faire"
                    width="w-[460px]"
                    height="h-[200px]"
                    actionFermeture={() => {
                        setDisplayInfo(<></>);
                    }}
                >
                    {valeur.map((tache) => (
                        <li key={v4()} className="pt-3">
                            {"- " + tache}
                        </li>
                    ))}
                </Fenetre>
                {/* <Box width="w-[460px]" className="absolute top-1/4 left-1/4 h-[300px] text-left text-oniCapMd text-oniPrimary">
                    <div className="w-full pb-2 flex items-center justify-between border-b border-b-oniPrimary-150">
                        <div className="text-oniH2 text-oniPrimary-700">{"Tâches à faire"}</div>
                        <Button
                            size="small"
                            action={() => {
                                setDisplayInfo(<></>);
                            }}
                        >
                            {"Fermer"}
                        </Button>
                    </div>
                    <div className="h-[200px] p-2 overflow-auto border-b border-b-oniPrimary-150">

                    </div>
                </Box> */}
            </>
        );
    };

    return (
        <div className="relative h-full w-full px-16 flex flex-col justify-between">
            {displayInfo}
            <div className="flex items-center justify-between">
                <Typography variant="display" theme="black" component="div">
                    {"Liste des véhicules"}
                </Typography>
                <div className="flex items-center gap-4">
                    <Typography variant="h2" theme="black" component="div">
                        {etablissementName}
                    </Typography>
                    <div>
                        <Button
                            size="small"
                            icon={{ icon: RiMenuFill }}
                            variant="secondary"
                        />
                    </div>
                </div>
            </div>
            {dataVehicules ? (
                <Tableau
                    className="w-full h-[370px]"
                    data={dataVehicules["vehicules"]}
                    cartes={dataVehicules["images"]}
                    msgVide="Aucun vehicule enregistré. N'hésitez pas à ajouter un véhicule."
                    //type="Vehicules"
                    action={action}
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center">
                    <Spinner size="page" />
                </div>
            )}

            <div className="w-full flex items-center justify-end">
                {/* {role === SUPERADMIN && (
                    <> */}
                <Button action={handleSetCrudAdd}>
                    {"Ajouter un véhicule"}
                </Button>
                {/* </>
                )} */}
            </div>
        </div>
    );
};
