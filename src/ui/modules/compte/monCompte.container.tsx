import { useRouter } from "next/router";
import { MonCompteView } from "./monCompte.view";
import { useToggle } from "@/hooks/use-toggle";
import { AuthServerDeleteCompte } from "@/api/authentification";
import { toast } from "react-toastify";
import { deconnexion } from "@/hooks/AuthServer/deconnexion";

export const MonCompteContainer = () => {
    const router = useRouter();
    const { value: isLoading, setValue: setIsLoading } = useToggle();

    const handleDeleteCompte = async () => {
        setIsLoading(true);
        const { error, data } = await AuthServerDeleteCompte();
        setIsLoading(false);

        if (error) {
            console.log(error);
            toast.error("Une erreur est survenue.");
            return;
        }

        if (data.traited) {
            toast.success(data.message);
            deconnexion(router);
            return;
        }

        if (data.message) {
            toast.error(data.message);
        }
    };

    return (
        <MonCompteView
            isLoading={isLoading}
            handleDeleteCompte={handleDeleteCompte}
        />
    );
};
