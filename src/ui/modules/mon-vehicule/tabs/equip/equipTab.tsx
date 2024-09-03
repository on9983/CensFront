import {
    DataServerGetVehicule,
    DataServerSetVehiculeField,
} from "@/api/Ressources/data-vehicules";
import { DataVehInfo } from "@/data/data-vehicule";
import { useToggle } from "@/hooks/use-toggle";
import { TabsProps } from "@/types/component/tabs-list";
import { AutoInput } from "@/ui/components/form/autoInput";
import { Cadran } from "@/ui/design-system/cadran/cadran";
import { Catalogue } from "@/ui/design-system/liste/Catalogue";
import { Classeur } from "@/ui/design-system/liste/Classeur";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Props {
    tabsProps: TabsProps;
}

export const EquipTab = ({}: Props) => {
    const router = useRouter();
    const { value: isLoading, setValue: setIsLoading } = useToggle();
    const [init, setInit] = useState<boolean>(false);
    const [data, setData] = useState<any>(null);
    const [docList, setDocList] = useState<string[]>([
        "Equippements",
        "Accessoires",
        "Options",
    ]);
    const [docSelc, setDocSelc] = useState<string>("Equippements");
    const tableauVide = {
        "0": ["", "", "", "", "", ""],
        "1": ["", "", "", "", "", ""],
        "2": ["", "", "", "", "", ""],
        "3": ["", "", "", "", "", ""],
        "4": ["", "", "", "", "", ""],
        "5": ["", "", "", "", "", ""],
        "6": ["", "", "", "", "", ""],
        "7": ["", "", "", "", "", ""],
        "8": ["", "", "", "", "", ""],
        "9": ["", "", "", "", "", ""],
        "10": ["", "", "", "", "", ""],
        "11": ["", "", "", "", "", ""],
    };

    useEffect(() => {
        handleGetData();
        setInit(true);
    }, []);

    const handleGetData = async () => {
        setData(null);

        setIsLoading(true);
        const { error, data } = await DataServerGetVehicule("equip");

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
            if (!init && data.data["Informations"]) {
                handleDocList(data.data["Informations"]);
            }
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

    const handleDocList = (dataDoc: any) => {
        let docs: Array<string> = [];
        Object.keys(dataDoc).map((document: string, index: number) => {
            docs[index] = document;
        });
        setDocList(docs);
    };

    const sendData = async (dataForm: any) => {
        const dataForm2 = { ...dataForm, tab: "EQUIP", document: docSelc };
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
            //handleGetData();
            return true;
        }

        toast.error("Une erreur est survenue.");
        router.push(router.pathname);
        return false;
    };

    const handleSlc = (dataForm: any) => {
        const valeur = dataForm.value;
        if (docList) {
            docList.push(valeur);
            setDocList(docList);
            setDocSelc(valeur);
            handleGetData();
            return true;
        }
        return false;
    };

    return (
        <>
            {isLoading || data === null ? (
                <div className="h-[420px] w-full flex items-center justify-center">
                    <Spinner size="page" />
                </div>
            ) : (
                <div className="h-[420px] w-full pt-3 flex items-center justify-between">
                    <div className="h-[400px] w-[150px] space-y-2 overflow-auto">
                        <AutoInput
                            label={"Document"}
                            variant="Normal"
                            id={["vide"]}
                            valeur={""}
                            sendData={handleSlc}
                            width="w-[140px]"
                            px="px-[6px]"
                            placeholder="Ajouter..."
                        />
                        <Classeur
                            type="Unique"
                            data={docList}
                            colonnes={["input"]}
                            colonnesWidth="w-[140px]"
                            inputWidth="w-[100px]"
                            cellH="h-[36px]"
                            action={(label: string) => {
                                setDocSelc(label);
                                handleGetData();
                            }}
                            elSelected={docSelc ? docSelc : ""}
                            px="px-[6px]"
                        />
                    </div>
                    <div className="w-[736px] overflow-auto">
                        <Classeur
                            type="Cellule"
                            data={
                                data["Informations"]
                                    ? data["Informations"][docSelc]
                                        ? data["Informations"][docSelc]
                                        : tableauVide
                                    : tableauVide
                            }
                            colonnes={["", "A", "B", "C", "D", "E", "F"]}
                            sendData={sendData}
                            inputWidth="w-[94px]"
                            colonnesWidth="w-min-[116px]"
                        />
                    </div>
                </div>
            )}
        </>
    );
};
