import { TabsProps } from "@/types/component/tabs-list";
import { Button } from "@/ui/design-system/button/button";

interface Props {
    tabsProps: TabsProps;
    isLoading?: boolean;
}

export const NavVehicule = ({ tabsProps, isLoading }: Props) => {
    const { setCurrentTabHandle, getCurrentTab } = tabsProps;

    return (
        <div className="w-full flex justify-between">
            <Button
                action={() => {
                    setCurrentTabHandle("INFO");
                }}
                active={getCurrentTab()?.nom==="INFO"}
                variant="secondary"
                size="small"
            >
                {"Informations générales"}
            </Button>
            <Button
                action={() => {
                    setCurrentTabHandle("ACHAT");
                }}
                active={getCurrentTab()?.nom==="ACHAT"}
                variant="secondary"
                size="small"
            >
                {"Achat/Leasing"}
            </Button>
            <Button
                action={() => {
                    setCurrentTabHandle("ASSUR");
                }}
                active={getCurrentTab()?.nom==="ASSUR"}
                variant="secondary"
                size="small"
            >
                {"Assurance"}
            </Button>
            <Button
                action={() => {
                    setCurrentTabHandle("PLAN");
                }}
                active={getCurrentTab()?.nom==="PLAN"}
                variant="secondary"
                size="small"
            >
                {"Planification"}
            </Button>
            <Button
                action={() => {
                    setCurrentTabHandle("KM");
                }}
                active={getCurrentTab()?.nom==="KM"}
                variant="secondary"
                size="small"
            >
                {"Kilométrage"}
            </Button>
            <Button
                action={() => {
                    setCurrentTabHandle("EQUIP");
                }}
                active={getCurrentTab()?.nom==="EQUIP"}
                variant="secondary"
                size="small"
            >
                {"Autres"}
            </Button>
        </div>
    );
};
