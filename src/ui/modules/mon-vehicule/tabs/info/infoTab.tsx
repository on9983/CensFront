import { DataServerGetVehicule } from "@/api/Ressources/data-vehicules";
import { DataVehInfo } from "@/data/data-vehicule";
import { useToggle } from "@/hooks/use-toggle";
import { TabsProps } from "@/types/component/tabs-list";
import { Cadran } from "@/ui/design-system/cadran/cadran";
import { ImgAutoInput } from "@/ui/design-system/form/imgAutoInput";
import { ImgInput } from "@/ui/design-system/form/imgInput";
import { Catalogue } from "@/ui/design-system/liste/Catalogue";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Props {
    tabsProps: TabsProps;
    sendData: (dataForm: any) => {};
}

export const InfoTab = ({ sendData }: Props) => {
    const router = useRouter();
    const { value: isLoading, setValue: setIsLoading } = useToggle();
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        handleGetData();
    }, []);

    const handleGetData = async () => {
        setData(null);

        setIsLoading(true);
        const { error, data } = await DataServerGetVehicule("info");

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
                <div className="h-[420px] pt-3 flex items-center justify-between">
                    <div className="h-full flex flex-col items-center justify-between">
                        <ImgAutoInput
                            id={"imgData"}
                            carte={data["Image"]}
                            sendData={sendData}
                        />
                        <Catalogue
                            titre="Statut"
                            data={data["Statut"]}
                            className="pt-2"
                            sendData={sendData}
                        />
                    </div>
                    <Catalogue
                        titre="Administratif"
                        data={data["Administratif"]}
                        sendData={sendData}
                    />
                    <Catalogue
                        titre="Caracteristiques"
                        data={data["Caractéristique"]}
                        sendData={sendData}
                    />
                </div>
            )}
        </>
    );
};
