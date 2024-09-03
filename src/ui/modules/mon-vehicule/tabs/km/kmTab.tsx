import {
    DataServerGetVehicule,
    DataServerSetVehiculeField,
} from "@/api/Ressources/data-vehicules";
import { DataVehInfo, DataVehKm } from "@/data/data-vehicule";
import { useToggle } from "@/hooks/use-toggle";
import { ListeDeMoisKM } from "@/types/component/liste/tableau-type";
import { TabsProps } from "@/types/component/tabs-list";
import { AutoInput } from "@/ui/components/form/autoInput";
import { Panneau } from "@/ui/design-system/box/panneau";
import { Cadran } from "@/ui/design-system/cadran/cadran";
import { Input } from "@/ui/design-system/form/input";
import { Catalogue } from "@/ui/design-system/liste/Catalogue";
import { Classeur } from "@/ui/design-system/liste/Classeur";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

interface Props {
    tabsProps: TabsProps;
    sendData: (dataForm: any) => {};
}

export const KmTab = ({}: Props) => {
    const router = useRouter();
    const { value: isLoading, setValue: setIsLoading } = useToggle();
    const [init, setInit] = useState<boolean>(false);
    const [anneeList, setAnneeList] = useState<any>(null);
    const [anneeSelc, setAnneeSelc] = useState<any>(null);
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        handleGetData();
        setInit(true);
    }, []);

    const handleGetData = async () => {
        setData(null);
        setIsLoading(true);
        const { error, data } = await DataServerGetVehicule("km");

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
        if (data.data.message) {
            toast.error(data.data.message);
            return false;
        }

        if (data.traited) {
            setData(data.data);
            if (!init && data.data["Kilometrages"]) {
                handleAnneeList(data.data["Kilometrages"]);
            }

            setIsLoading(false);
            return;
        }
        setIsLoading(false);
    };

    const handleAnneeList = (dataKm: any) => {
        let kmParAnnee: Array<string> = [];
        Object.keys(dataKm).map((annee: string, index: number) => {
            kmParAnnee[index] = annee;
        });
        setAnneeList(kmParAnnee);
    };

    const handleAnneeSlc = (dataForm: any) => {
        setAnneeSelc(dataForm.value);
        if (anneeList) {
            anneeList.push(dataForm.value);
            setAnneeList(anneeList);
        }
        handleGetData();
        return true;
    };

    const sendData = async (dataForm: any) => {
        if (anneeSelc) {
            const dataForm2 = { ...dataForm, année: anneeSelc };
            return sendDataC(dataForm2);
        }
        toast.error("Veuillez renseigner une année avant de validé.");
        return false;
    };

    const sendDataC = async (dataForm: any) => {
        const dataForm2 = { ...dataForm, tab: "KM" };
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
            handleGetData();
            return true;
        }

        toast.error("Une erreur est survenue.");
        router.push(router.pathname);
        return false;
    };

    //console.log(moisList);

    return (
        <>
            {isLoading || data === null ? (
                <div className="h-[420px] w-full flex items-center justify-center">
                    <Spinner size="page" />
                </div>
            ) : (
                <div className="h-[420px] w-full pt-3 flex items-center justify-between">
                    <div className="h-full w-full flex flex-col items-center justify-between">
                        <div className="space-y-4">
                            <Catalogue
                                data={data["Informations"]}
                                className="pt-2"
                                sendData={sendDataC}
                                inputWidth="w-[100px]"
                                height="h-min"
                            />
                            <div className="space-y-2">
                                <AutoInput
                                    variant="Normal"
                                    id={["vide"]}
                                    valeur={""}
                                    sendData={handleAnneeSlc}
                                    width="w-[140px]"
                                    placeholder="Ajouter..."
                                />
                                {anneeList ? (
                                    <div className="h-[160px] overflow-auto">
                                        <Classeur
                                            type="Unique"
                                            data={anneeList}
                                            colonnes={["input"]}
                                            colonnesWidth="w-[140px]"
                                            inputWidth="w-[100px]"
                                            cellH="h-[36px]"
                                            action={(label: string) => {
                                                setAnneeSelc(label);
                                                handleGetData();
                                            }}
                                            elSelected={
                                                anneeSelc ? anneeSelc : ""
                                            }
                                            px="px-[6px]"
                                        />
                                    </div>
                                ) : (
                                    <Panneau className="h-[120px] w-[280px] ">
                                        {"Pas d'années enregistées"}
                                    </Panneau>
                                )}
                            </div>
                        </div>
                    </div>
                    {data["Kilometrages"] ? (
                        <Classeur
                            data={
                                data["Kilometrages"][anneeSelc]
                                    ? data["Kilometrages"][anneeSelc]
                                    : {
                                          Janvier: null,
                                          Février: null,
                                          Mars: null,
                                          Avril: null,
                                          Mai: null,
                                          Juin: null,
                                          Juillet: null,
                                          Aout: null,
                                          Septembre: null,
                                          Octobre: null,
                                          Novembre: null,
                                          Décembre: null,
                                      }
                            }
                            colonnes={[
                                "Période (mois)",
                                "Kilometrage (km relevé)",
                            ]}
                            sendData={sendData}
                            inputWidth="w-[100px]"
                            msgVide="Veuillez selectionner une année, ou en inscrire une nouvelle."
                        />
                    ) : (
                        <div className="h-full w-full flex items-center justify-center">
                            <Spinner size="page" />
                        </div>
                    )}
                </div>
            )}
        </>
    );
};
