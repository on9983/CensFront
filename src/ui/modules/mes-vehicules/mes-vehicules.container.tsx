import { useEffect, useState } from "react";
import { MesVehiculesView } from "./mes-vehicules.view";
import { DataVehiculesType } from "@/types/api/vehicule-data";
import { useToggle } from "@/hooks/use-toggle";
import { DataServerGetVehicules } from "@/api/Ressources/data-vehicules";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { CarteData } from "@/types/component/carteElement";
import PageTravaux from "@/pages/page-travaux";
import { MesVehiculesAdd } from "./crud/mes-vehicules.add";

export const MesVehiculesContainer = () => {
    const router = useRouter();
    const [dataVehicules, setDataVehicules] = useState<
        DataVehiculesType | undefined
    >(undefined);
    const { value: isLoading, setValue: setIsLoading } = useToggle();
    const [crud, setCrud] = useState<"get" | "add" | "suppr" | "edit" | "show">(
        "get"
    );

    let indexMin: number = 0,
        indexMax: number = 999;

    useEffect(() => {
        handleGet(indexMin, indexMax);
    }, []);

    const handleGet = async (iMin: number, iMax: number) => {
        setDataVehicules(undefined);

        setIsLoading(true);
        const { error, data } = await DataServerGetVehicules(iMin, iMax);
        if (error) {
            console.log(error);
            setIsLoading(false);
            toast.error("Une erreur est survenue.");
            return;
        }
        
        if (data.traited) {
            setDataVehicules(data.data);
            setIsLoading(false);
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
            setIsLoading(false);
            return;
        }


        setIsLoading(false);
    };

    const handleSetCrudGet = () => {
        setCrud("get");
        handleGet(indexMin, indexMax);
    };

    const handleSetCrudAdd = () => {
        setCrud("add");
    };

    return (
        <>
            {
                {
                    get: (
                        <MesVehiculesView
                            handleSetCrudAdd={handleSetCrudAdd}
                            dataVehicules={dataVehicules}
                        />
                    ),
                    add: (
                        <MesVehiculesAdd handleSetCrudGet={handleSetCrudGet} />
                    ),
                    edit: <PageTravaux />,
                    show: <PageTravaux />,
                    suppr: <PageTravaux />,
                }[crud]
            }
        </>
    );
};
