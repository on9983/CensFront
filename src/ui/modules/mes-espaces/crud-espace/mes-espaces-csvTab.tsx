import { DataServerImportAll } from "@/api/Ressources/data-espaces";
import { useToggle } from "@/hooks/use-toggle";
import { TabsProps } from "@/types/component/tabs-list";
import { Button } from "@/ui/design-system/button/button";
import { CsvInput } from "@/ui/design-system/form/file/csvInput";
import { Catalogue } from "@/ui/design-system/liste/Catalogue";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

interface Props {
    handleSetCrudGet: Function;
}

export const CsvTab = ({ handleSetCrudGet }: Props) => {
    const router = useRouter();
    const { value: isLoading, setValue: setIsLoading } = useToggle();

    const sendData = async (dataForm: any) => {
        setIsLoading(true);
        const dataForm2 = {
            ...dataForm,
            remplace: false,
        };
        const { error, data } = await DataServerImportAll(dataForm2);
        if (error) {
            console.log(error);
            toast.error("Une erreur est survenue.");
            return;
        }
        //console.log(data);
        
        if (data.traited) {
            console.log(data);
            toast.success("Les données sont importées avec succès.");
            setIsLoading(false);
            handleSetCrudGet();
            return true;
        }

        if (data.message) {
            if (data.code) {
                if (data.code === 401 || data.code === 403) {
                    router.push(router.pathname);
                } else {
                    toast.error(data.message);
                    setIsLoading(false);
                    return;
                }
            }
            setIsLoading(false);
            return false;
        }



        toast.error("Une erreur est survenue.");
        router.push(router.pathname);
        setIsLoading(false);
        return false;
    };

    return (
        <div className="h-full flex flex-col items-left justify-between">
            <div className="text-oniNoir-700 text-oniCapMdLight text-justify">
                <p>
                    {
                        "L'importation Excel se fait à partir de fichier au format .CSV, à condition que chaque nom de colonne correspond avec la liste suivante à droite. La colonne 'Affectation'(obligatoire) contient les nom des établissements. Les colonnes 'Vid' et 'Numéro d'immatriculation' permettent d'éviter les clones."
                    }
                </p>
            </div>
            <div className="w-full h-full flex items-center justify-between">
                <div className="h-full w-[360px] flex items-center justify-center">
                    <CsvInput id={"importEtablissements"} sendData={sendData} />
                </div>

                <div className="h-[180px] overflow-auto border border-oniPrimary p-2">
                    <Catalogue
                        size="small"
                        data={{
                            Affectation: "établissement...",
                            Appartenance: "nom...",
                            Carburant: "nom...",
                            Commentaire: "text...",
                            "Commentaire Appartenance": "text...",
                            "Commentaire affectation": "text...",
                            "Date de mise en service": "dd/mm/aaaa...",
                            "Date dernier contrôle technique": "dd/mm/aaaa...",
                            "Date dernière révision": "dd/mm/aaaa...",
                            "Date prochain contrôle technique": "dd/mm/aaaa...",
                            "Date prochaine révision": "dd/mm/aaaa...",
                            "Date renouvellement prévu": "dd/mm/aaaa...",
                            "Kilométrage (dernier saisi)": "nombre...",
                            Marque: "nom...",
                            Modèle: "nom...",
                            "Nombre de places": "nombre...",
                            "Numéro d'immatriculation": "nom...",
                            Permis: "nom...",
                            Type: "nom...",
                            Vid: "id...",
                        }}
                    />
                </div>
            </div>
            <div className="flex justify-end">
                <div className="flex gap-4">
                    <Button action={handleSetCrudGet} variant="secondary">
                        {"Annuler"}
                    </Button>
                </div>
            </div>
        </div>
    );
};
