import { useAuth } from "@/context/AuthUserContext";
import { DataSender } from "../Components/dataSender";
import { checkDocker } from "../Components/checkDocker";

export const DataServerGetEspaces = async (
    indexMin: number,
    indexMax: number
) => {
    return await DataSender(checkDocker() + "/etablissements", {
        indexMin: indexMin,
        indexMax: indexMax,
    });
};

export const DataServerAddEspace = async (
    nom: string,
    desc: string,
    imgData: string | ArrayBuffer | null
) => {
    return await DataSender(checkDocker() + "/etablissements/add", {
        espace: {
            nom: nom,
            desc: desc,
            imageData: imgData,
        },
    });
};

export const DataServerExportAll = async () => {
    return await DataSender(checkDocker() + "/etablissements/exportAll", {});
};

export const DataServerImportAll = async (dataForm: any) => {
    return await DataSender(checkDocker() + "/etablissements/importAll", {
        dataForm: dataForm,
    });
};

export const DataServerSetEspaceField = async (dataForm: any) => {
    return await DataSender(checkDocker() + "/etablissement", {
        cat: "set",
        dataForm: dataForm,
        espace: window.sessionStorage.getItem("espace"),
    });
};
