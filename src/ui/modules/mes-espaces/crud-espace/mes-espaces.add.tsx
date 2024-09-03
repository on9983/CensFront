import { Button } from "@/ui/design-system/button/button";
import { ListeCarte } from "@/ui/design-system/liste/listeCarte";
import { Typography } from "@/ui/design-system/typography/typography";
import { CarteData } from "@/types/component/carteElement";
import { Cadran } from "@/ui/design-system/cadran/cadran";
import { MesEspacesAddForm } from "./mes-espaces.add.form";
import { AddEspaceFormType, FormType } from "@/types/form";
import { useState } from "react";
import { useToggle } from "@/hooks/use-toggle";
import { SubmitHandler, useForm } from "react-hook-form";
import { DataServerAddEspace } from "@/api/Ressources/data-espaces";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import {
    TabsAddEspaceType,
    TabsListInterface,
    TabsVehiculeType,
} from "@/types/component/tabs-list";
import { CsvTab } from "./mes-espaces-csvTab";

interface Props {
    handleSetCrudGet: () => void;
}

export const MesEspacesAdd = ({ handleSetCrudGet }: Props) => {
    const [currentTab, setCurrentTab] = useState<TabsAddEspaceType>("CSV");

    return (
        <div className="h-full flex flex-col px-16 space-y-4">
            <div className="space-y-2">
                <Typography
                    variant="display"
                    theme="black"
                    component="div"
                    className=""
                >
                    {"Ajouter un nouvel établissement"}
                </Typography>
                <div className="w-full flex justify-start gap-8 pt-1">
                    <Button
                        action={() => {
                            setCurrentTab("CSV");
                        }}
                        active={currentTab === "CSV"}
                        variant="secondary"
                        size="small"
                    >
                        {"Importer via Excel"}
                    </Button>
                    <Button
                        action={() => {
                            setCurrentTab("VANILLA");
                        }}
                        active={currentTab === "VANILLA"}
                        variant="secondary"
                        size="small"
                    >
                        {"Ajout simple"}
                    </Button>
                </div>
            </div>

            {currentTab === "CSV" ? (
                <CsvTab handleSetCrudGet={handleSetCrudGet} />
            ) : (
                <MesEspacesAddForm handleSetCrudGet={handleSetCrudGet} />
            )}
        </div>
    );
};
