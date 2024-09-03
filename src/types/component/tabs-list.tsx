import { FormType } from "../form";

export interface TabsProps {
    tabsList: TabsListInterface[];
    getCurrentTab: () => TabsListInterface | undefined;
    setCurrentTabHandle: (tab: TabsVehiculeType) => void;
}

export interface TabsComponentProps {
    tabsProps: TabsProps;
    sendData: (dataForm: any) => {};
}

export type TabsVehiculeType = "INFO" | "KM" | "ACHAT" | "ASSUR" | "PLAN" | "EQUIP";
export type TabsAddEspaceType = "CSV" | "VANILLA";

export interface TabsListInterface {
    nom: string;
    label: string;
    component: {
        tab: React.ComponentType<TabsComponentProps>;
    };
}
