import { TabsProps } from "@/types/component/tabs-list";
import { NavVehicule } from "./component/nav-vehicule";
import { Cadran } from "@/ui/design-system/cadran/cadran";

interface Props {
    tabsProps: TabsProps;
    sendData: (dataForm: any) => {};
}

export const MonVehiculeView = ({ tabsProps, sendData }: Props) => {
    const { getCurrentTab } = tabsProps;
    const Component = getCurrentTab()?.component.tab;

    const vehiculeName = window.sessionStorage.getItem("vehicule-name");
    const vehiculeImage = window.sessionStorage.getItem("vehicule-image");
    const etablissementName = window.sessionStorage.getItem("espace-name");

    return (
        <div className="h-full w-full px-4 flex flex-col justify-between">
            <div className="flex justify-between text-oniH2 text-oniPrimary-800">
                {vehiculeImage && vehiculeImage !== "null" && (
                    <Cadran src={vehiculeImage} size="Vignette" />
                )}
                <div className="flex items-center">{vehiculeName}</div>
                <div className="flex items-center">{etablissementName}</div>
            </div>
            <NavVehicule tabsProps={tabsProps} />
            {Component && (
                <Component tabsProps={tabsProps} sendData={sendData} />
            )}
        </div>
    );
};
