import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import { Catalogue } from "@/ui/design-system/liste/Catalogue";
import { download, generateCsv, mkConfig } from "export-to-csv";
import { useRouter } from "next/router";
import { useToggle } from "@/hooks/use-toggle";
import { DataServerExportAll } from "@/api/Ressources/data-espaces";
import { toast } from "react-toastify";

interface Props {
    handleSetCrudGet: () => void;
}

export const MesEspacesExport = ({ handleSetCrudGet }: Props) => {
    const router = useRouter();
    const { value: isLoading, setValue: setIsLoading } = useToggle();

    const handleExport = async () => {
        setIsLoading(true);
        const { error, data } = await DataServerExportAll();
        if (error) {
            console.log(error);
            setIsLoading(false);
            toast.error("Une erreur est survenue.");
            return;
        }

        if (data.traited) {
            downloadExport(data.data);
            toast.success("CSV généré avec succès.");
            setIsLoading(false);
            return;
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
            return;
        }

        toast.error("Une erreur est survenue.");
        setIsLoading(false);
    };

    const downloadExport = (dataExport: any[]) => {
        const csvConfig = mkConfig({
            useKeysAsHeaders: true,
        });

        const mockData = dataExport;

        // Converts your Array<Object> to a CsvOutput string based on the configs
        const csv = generateCsv(csvConfig)(mockData);

        download(csvConfig)(csv);
    };

    return (
        <div className="h-full flex flex-col px-16 space-y-4">
            <div className="space-y-2">
                <Typography
                    variant="display"
                    theme="black"
                    component="div"
                    className=""
                >
                    {"Exporter toutes vos données"}
                </Typography>
            </div>

            <div className="h-full flex flex-col items-left justify-between">
                <div className="text-oniNoir-700 text-oniCapMdLight text-justify">
                    <p>
                        {
                            "L'exportation des données se font dans les mêmes conditions que les importation. Le format de fichier est en .CSV, et les noms des colonnes sont les mêmes, et correspondent avec la liste à droite. La colonne 'Affectation' contient le nom de l'établissement de chaque véhicule. La colonne 'Vid' permet d'éviter les clones."
                        }
                    </p>
                </div>
                <div className="w-full h-full flex items-center justify-between">
                    <div className="h-full w-[360px] flex items-center justify-center">
                        {/* <CsvInput id={"exportEtablissements"} /> */}
                        <Button
                            action={handleExport}
                            size="large"
                            isLoading={isLoading}
                        >
                            {"Exporter"}
                        </Button>
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
                                "Date dernier contrôle technique":
                                    "dd/mm/aaaa...",
                                "Date dernière révision": "dd/mm/aaaa...",
                                "Date prochain contrôle technique":
                                    "dd/mm/aaaa...",
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
                        <Button
                            action={handleSetCrudGet}
                            disabled={isLoading}
                            variant="secondary"
                        >
                            {"Annuler"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
