import { AuthServerCheckState, AuthServerLogout } from "@/api/authentification";
import { Button } from "@/ui/design-system/button/button";
import { toast } from "react-toastify";
import { MesEspacesView } from "./mes-espaces.view";
import { useEffect, useState } from "react";
import {
    DataServerAddEspace,
    DataServerGetEspaces,
} from "@/api/Ressources/data-espaces";
import { MesEspacesAdd } from "./crud-espace/mes-espaces.add";
import { AddEspaceFormType } from "@/types/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { useToggle } from "@/hooks/use-toggle";
import { useRouter } from "next/router";
import { delay } from "@/hooks/delay";
import { CarteData } from "@/types/component/carteElement";
import PageTravaux from "@/pages/page-travaux";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { MesEspacesExport } from "./crud-espace/mes-espaces.export";

export const MesEspacesContainer = () => {
    const router = useRouter();
    const [dataEspaces, setDataEspaces] = useState<CarteData[]>([]);
    const { value: isLoading, setValue: setIsLoading } = useToggle();
    const [crud, setCrud] = useState<
        "get" | "add" | "suppr" | "edit" | "show" | "export"
    >("get");
    // const [imgData, setImgData] = useState<string | ArrayBuffer | null>(null);

    let indexMin: number = 0,
        indexMax: number = 999;

    useEffect(() => {
        handleGetEspaces(indexMin, indexMax);
    }, []);

    const handleGetEspaces = async (iMin: number, iMax: number) => {
        setDataEspaces([]);

        setIsLoading(true);
        const { error, data } = await DataServerGetEspaces(iMin, iMax);
        if (error) {
            console.log(error);
            setIsLoading(false);
            toast.error("Une erreur est survenue.");
            return;
        }

        if (data.message) {
            if (data.code) {
                if (data.code === 401 || data.code === 403) {
                    router.push(router.pathname);
                }
                setIsLoading(false);
                return;
            }
            toast.error(data.message);
            setIsLoading(false);
            return;
        }
        console.log(data.etablissements);

        for (let i = 0; i < data.etablissements.length; i++) {
            const espace: CarteData = {
                titre: data.etablissements[i].nom,
                cid: data.etablissements[i].eid,
                imgUrl: data.etablissements[i].image,
                imgAlt: "Image d'un établissement",
                desc: data.etablissements[i].description,
                baseUrl: "/mes-espaces/mes-vehicules",
            };

            setDataEspaces((oldArray) => [...oldArray, espace]);
        }
        setIsLoading(false);

        // if (data.stop) {
        //     return;
        // }
        // await delay(500);
    };

    // const handleImageData = (imagePreview: string | ArrayBuffer | null) => {
    //     setImgData(imagePreview);
    // };

    const handleSetCrudGet = () => {
        setCrud("get");
        handleGetEspaces(indexMin, indexMax);
    };

    const handleExport = () => {};

    return (
        <>
            {
                {
                    get: (
                        <MesEspacesView
                            handleSetCrudAdd={() => {
                                setCrud("add");
                            }}
                            handleSetExport={() => {
                                setCrud("export");
                            }}
                            handleSetCrudGet={handleSetCrudGet}
                            dataEspaces={dataEspaces}
                            isLoading={isLoading}
                        />
                    ),
                    add: <MesEspacesAdd handleSetCrudGet={handleSetCrudGet} />,
                    export: (
                        <MesEspacesExport handleSetCrudGet={handleSetCrudGet} />
                    ),
                    edit: <PageTravaux />,
                    show: <PageTravaux />,
                    suppr: <PageTravaux />,
                }[crud]
            }
        </>
    );
};
