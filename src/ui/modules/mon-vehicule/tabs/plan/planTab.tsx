import { DataVehInfo, DataVehPlan } from "@/data/data-vehicule";
import { TabsProps } from "@/types/component/tabs-list";
import { Cadran } from "@/ui/design-system/cadran/cadran";
import { Catalogue } from "@/ui/design-system/liste/Catalogue";
import { Historique } from "@/ui/design-system/liste/Historique";
import { Typography } from "@/ui/design-system/typography/typography";
import { AddEventForm } from "./addEventForm";
import {
    DataServerGetVehicule,
    DataServerSetVehiculeField,
} from "@/api/Ressources/data-vehicules";
import { useToggle } from "@/hooks/use-toggle";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { SubmitHandler } from "react-hook-form";

interface Props {
    tabsProps: TabsProps;
    sendData: (dataForm: any) => {};
}

export const PlanTab = ({}: Props) => {
    const router = useRouter();
    const { value: isLoading, setValue: setIsLoading } = useToggle();
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        handleGetData();
    }, []);

    const handleGetData = async () => {
        setData(null);

        setIsLoading(true);
        const { error, data } = await DataServerGetVehicule("plan");

        if (error) {
            console.log(error);
            setIsLoading(false);
            toast.error("Une erreur est survenue.");
            return;
        }

        console.log(data);

        if (data.traited) {
            setData(data.data);
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
            toast.error(data.message);
            setIsLoading(false);
            return;
        }

        setIsLoading(false);
    };

    const sendData = async (dataForm: any) => {
        const dataForm2 = { ...dataForm, tab: "PLAN" };
        const { error, data } = await DataServerSetVehiculeField(dataForm2);
        if (error) {
            console.log(error);
            toast.error("Une erreur est survenue.");
            return;
        }

        if (data.message) {
            if (data.code) {
                if (data.code === 401 || data.code === 403) {
                    router.push(router.pathname);
                }
                return;
            }
            return;
        }
        if (data.data.message) {
            toast.error(data.data.message);
            return false;
        }
        
        if (data.traited) {
            console.log(data);
            handleGetData();
            return true;
        }

        toast.error("Une erreur est survenue.");
        router.push(router.pathname);
        return false;
    };

    return (
        <>
            {isLoading || data === null ? (
                <div className="h-[420px] w-full flex items-center justify-center">
                    <Spinner size="page" />
                </div>
            ) : (
                <div className="h-[420px] pt-4 px-2 flex justify-between">
                    <div className="space-y-6 text-center">
                        <Typography variant="h3" theme="primary">
                            {"Contrôle"}
                        </Typography>
                        <div className="flex flex-col gap-6">
                            <Catalogue
                                titre="Contrôles effectués"
                                data={data["Contrôle"]["Contrôles effectués"]}
                                size="small"
                                sendData={sendData}
                                inputWidth="w-[90px]"
                            />
                            <Catalogue
                                titre="Contrôles prévu"
                                data={data["Contrôle"]["Contrôles prévu"]}
                                size="small"
                                sendData={sendData}
                                inputWidth="w-[90px]"
                            />
                        </div>
                    </div>
                    <div className="space-y-6 text-center">
                        <Typography variant="h3" theme="primary">
                            {"Évènements"}
                        </Typography>

                        <div>
                            <Historique
                                data={data["Évènements"]}
                                sendData={sendData}
                                className="border-x border-oniPrimary-300"
                            />
                        </div>
                    </div>
                    <div className="space-y-6 text-center">
                        <Typography variant="h3" theme="primary">
                            {"Ajouter un évènement"}
                        </Typography>
                        <AddEventForm handleGetData={handleGetData} />
                    </div>
                </div>
            )}
        </>
    );
};
