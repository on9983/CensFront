import { Button } from "@/ui/design-system/button/button";
import { ListeCarte } from "@/ui/design-system/liste/listeCarte";
import { Typography } from "@/ui/design-system/typography/typography";
import { CarteData } from "@/types/component/carteElement";
import { useAuth } from "@/context/AuthUserContext";
import { SUPERADMIN } from "@/lib/user";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { useRouter } from "next/router";
import { DataServerSetEspaceField } from "@/api/Ressources/data-espaces";
import { toast } from "react-toastify";

interface Props {
    dataEspaces?: CarteData[];
    handleSetCrudAdd: () => void;
    handleSetExport: () => void;
    handleSetCrudGet: () => void;
    isLoading: boolean;
}

export const MesEspacesView = ({
    dataEspaces = [],
    handleSetCrudAdd,
    handleSetExport,
    handleSetCrudGet,
    isLoading,
}: Props) => {
    const {
        authUser: { role },
    } = useAuth();
    const router = useRouter();

    const action = (carte: CarteData) => {
        window.sessionStorage.setItem("espace-name", carte.titre);
        window.sessionStorage.setItem("espace", carte.cid ? carte.cid : "");
        router.push("/mes-espaces/mes-vehicules");
    };

    const sendDataByCarte = async (dataForm: any, carte: CarteData) => {
        const dataForm2 = { ...dataForm, tab: "LISTECARTE", eid: carte.cid };
        const { error, data } = await DataServerSetEspaceField(dataForm2);
        if (error) {
            console.log(error);
            toast.error("Une erreur est survenue.");
            return;
        }
        if (data) {
            if (data.message) {
                if (data.code) {
                    if (data.code === 401 || data.code === 403) {
                        router.push(router.pathname);
                    }
                    return;
                }
                return;
            }

            //console.log(data.data);
            if (data.data && data.data.message) {
                toast.error(data.data.message);
                return false;
            }
            if (data.traited) {
                console.log(data);
                toast.success("Image traité avec succès.");
                handleSetCrudGet();
                return true;
            }
        }

        toast.error("Une erreur est survenue.");
        router.push(router.pathname);
        return false;
    };

    return (
        <div className="h-full flex flex-col px-16 space-y-10">
            <div className="space-y-2">
                <Typography
                    variant="display"
                    theme="black"
                    component="div"
                    className=""
                >
                    {"Mes établissements"}
                </Typography>
                <Typography
                    variant="CapMd"
                    weight="light"
                    theme="grayLight"
                    component="div"
                    className="w-[792px]"
                >
                    {
                        "Veillez choisir ou ajouter un espace comprenant vos véhicules."
                    }
                    <br />
                    {
                        " Il peut s'agir d’établissements, ou d’autres types de lieu à charge. Il est pratique de grouper les ressources selon leur lieu d’attribution afin de pouvoir affiner les études de coût."
                    }
                </Typography>
            </div>
            {isLoading ? (
                <div className="h-full w-full flex items-center justify-center">
                    <Spinner size="page" />
                </div>
            ) : (
                <div className="flex items-end justify-between">
                    <ListeCarte
                        data={dataEspaces}
                        action={action}
                        sendDataByCarte={sendDataByCarte}
                    />
                    <div className="h-full flex flex-col  justify-end gap-4">
                        {/* {role === SUPERADMIN && (
                            <Button action={handleSetCrudAdd}>
                                {"Ajouter un établissement"}
                            </Button>
                        )} */}
                        <Button action={handleSetExport} variant="secondary">
                            {"Exporter les données"}
                        </Button>
                        <Button action={handleSetCrudAdd}>
                            {"Ajouter un établissement"}
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};
