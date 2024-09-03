import { DataServerGetVehicule } from "@/api/Ressources/data-vehicules";
import { DataVehAchat } from "@/data/data-vehicule";
import { useToggle } from "@/hooks/use-toggle";
import { TabsProps } from "@/types/component/tabs-list";

import { TextZone } from "@/ui/design-system/form/textZone";
import { Catalogue } from "@/ui/design-system/liste/Catalogue";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

interface Props {
    tabsProps: TabsProps;
    sendData: (dataForm: any) => {};
}

export const AchatTab = ({ sendData }: Props) => {
    const router = useRouter();
    const { value: isLoading, setValue: setIsLoading } = useToggle();
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        handleGetData();
    }, []);

    const handleGetData = async () => {
        setData(null);

        setIsLoading(true);
        const { error, data } = await DataServerGetVehicule("achat");

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

    return (
        <>
            {isLoading || data === null ? (
                <div className="h-[420px] w-full flex items-center justify-center">
                    <Spinner size="page" />
                </div>
            ) : (
                <div className="h-[420px] px-24 flex justify-between">
                    <div className="pb-16 flex flex-col justify-between">
                        <Catalogue
                            titre="Fournisseur"
                            data={data["Fournisseur"]}
                            sendData={sendData}
                        />
                        <TextZone
                            titre="Description du leasing"
                            dataLabel="Description du leasing"
                            data={data["Description du leasing"]}
                            sendData={sendData}
                        />
                    </div>
                    <Catalogue
                        titre="Acquisition"
                        data={data["Acquisition"]}
                        sendData={sendData}
                        inputWidth="w-[100px]"
                    />
                </div>
            )}
        </>
    );
};
