import { useAuth } from "@/context/AuthUserContext";
import { DataSender } from "../Components/dataSender";
import { VehiculeAddDataForm } from "@/types/form/vehicule/formVehicule";
import { checkDocker } from "../Components/checkDocker";

export const DataServerGetVehicules = async (
    indexMin: number,
    indexMax: number
) => {
    return await DataSender(checkDocker() + "/vehicules", {
        indexMin: indexMin,
        indexMax: indexMax,
        espace: window.sessionStorage.getItem("espace"),
    });
};

export const DataServerAddVehicule = async (dataForm: VehiculeAddDataForm) => {
    return await DataSender(checkDocker() + "/vehicules/add", {
        dataForm: dataForm,
        espace: window.sessionStorage.getItem("espace"),
    });
};

export const DataServerSetVehiculeField = async (dataForm: any) => {
    return await DataSender(checkDocker() + "/vehicule", {
        cat: "set",
        dataForm: dataForm,
        vehicule: window.sessionStorage.getItem("vehicule"),
    });
};

export const DataServerGetVehicule = async (cat: string) => {
    return await DataSender(checkDocker() + "/vehicule", {
        cat: cat,
        vehicule: window.sessionStorage.getItem("vehicule"),
    });
};
