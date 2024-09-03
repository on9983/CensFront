import { DataServerNousContacter } from "@/api/Outils/data-dev";
import { toast } from "react-toastify";

export const signalement = (errorInfo: any, page: string, action: string) => {
    console.log(errorInfo);
    toast.error(
        "Une erreur interne est survenue. Cette erreur est signalée automatiquement."
    );

    const SendInfo = async () => {
        let erreur: string = "";
        if (typeof errorInfo === "string") {
            erreur = errorInfo;
        }
        const dataForm = {
            autoContact: {
                page: page,
                action: action,
                erreur: erreur,
            },
        };
        const { error, data } = await DataServerNousContacter(dataForm);
        if (error) {
            return;
        }
        if (data.traited) {
            console.log(data);
            toast.success(
                "Cette erreur a été signalée au développeur avec succès. En cas d'urgence, vous pouvez nous contacter en cliquant sur le bouton 'Un probleme ?' en bas."
            );
            return;
        }
        if (data.message) {
            toast.error(data.message);
            return;
        }
    };

    SendInfo();
};
