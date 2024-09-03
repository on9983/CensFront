import { useToggle } from "@/hooks/use-toggle";
import { MonVehiculeView } from "./mon-vehicule.view";
import {
    TabsListInterface,
    TabsVehiculeType,
} from "@/types/component/tabs-list";
import { useState } from "react";
import { EnTravaux } from "../onboarding/component/en-travaux";
import { InfoTab } from "./tabs/info/infoTab";
import { KmTab } from "./tabs/km/kmTab";
import { AchatTab } from "./tabs/achat/achatTab";
import { AssurTab } from "./tabs/assur/assurTab";
import { PlanTab } from "./tabs/plan/planTab";
import { DataServerSetVehiculeField } from "@/api/Ressources/data-vehicules";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { EquipTab } from "./tabs/equip/equipTab";

export const MonVehiculeContainer = () => {
    const router = useRouter();
    const [currentTab, setCurrentTab] = useState<TabsVehiculeType>("INFO");

    const tabsList: TabsListInterface[] = [
        {
            nom: "INFO",
            label: "Informations générales",
            component: { tab: InfoTab },
        },
        {
            nom: "KM",
            label: "Kilométrage",
            component: { tab: KmTab },
        },
        {
            nom: "ACHAT",
            label: "Achat/Leasing",
            component: { tab: AchatTab },
        },
        {
            nom: "ASSUR",
            label: "Assurance",
            component: { tab: AssurTab },
        },
        {
            nom: "PLAN",
            label: "Planification",
            component: { tab: PlanTab },
        },
        {
            nom: "EQUIP",
            label: "Autres",
            component: { tab: EquipTab },
        },
    ];

    const getCurrentTab = () => {
        return tabsList.find((el) => el.nom === currentTab);
    };

    const setCurrentTabHandle = (tab: TabsVehiculeType) => {
        setCurrentTab(tab);
    };

    const tabsProps = {
        getCurrentTab,
        setCurrentTabHandle,
        tabsList,
    };

    const sendData = async (dataForm: any) => {
        const dataForm2 = { ...dataForm, tab: currentTab };
        const { error, data } = await DataServerSetVehiculeField(dataForm2);
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
                return true;
            }
        }

        toast.error("Une erreur est survenue.");
        router.push(router.pathname);
        return false;
    };

    return <MonVehiculeView tabsProps={tabsProps} sendData={sendData} />;
};
