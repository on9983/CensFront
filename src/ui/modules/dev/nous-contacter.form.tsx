import { DataServerNousContacter } from "@/api/Outils/data-dev";
import { signalement } from "@/hooks/Dev/signalement";
import { useToggle } from "@/hooks/use-toggle";
import { URL_MES_ESPACES } from "@/lib/pages/pages-possible";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/form/input";
import { TextZone } from "@/ui/design-system/form/textZone";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface formFields {
    titre: string;
    text: string;
}

export const NousContacterForm = () => {
    const router = useRouter();
    const { value: isLoading, setValue: setIsLoading } = useToggle();

    const formProps = useForm<formFields>();
    const {
        register,
        formState: { errors },
    } = formProps;

    const onSubmit: SubmitHandler<formFields> = async (Formdata) => {
        const dataForm = { clientContact: Formdata };
        setIsLoading(true);
        const { error, data } = await DataServerNousContacter(dataForm);
        setIsLoading(false);

        if (data.traited) {
            console.log(data);
            toast.success("Message envoyé avec succès.");
            router.push(URL_MES_ESPACES);
            return;
        }

        if (data.message) {
            if (data.code) {
                if (data.code === 401 || data.code === 403) {
                    toast.error(
                        "Votre connexion a expirée. Copier-coller vos écrits puis reconnectez vous pour pouvoir envoyer un message."
                    );
                }
                toast.error("Une erreur est survenue.");
                return;
            }
            toast.error(data.message);
            return;
        }
    };

    const handleSubmit = formProps.handleSubmit(onSubmit);

    return (
        <div className="w-full h-[380px] flex flex-col justify-between ">
            <div className="space-y-3 text-left">
                <Input
                    label="Titre de l'email"
                    placeholder="Titre de l'email"
                    size="Medium"
                    isLoading={isLoading}
                    type="text"
                    register={register}
                    errors={errors}
                    errorMsg="Veuillez renseigner ce champs avant de valider."
                    id="titre"
                    required
                />
                <Input
                    label="Texte"
                    placeholder="Texte de l'email"
                    height="h-[202px]"
                    component="textarea"
                    className="text-oniCapSm"
                    size="None"
                    isLoading={isLoading}
                    type="text"
                    register={register}
                    errors={errors}
                    errorMsg="Veuillez renseigner ce champs avant de valider."
                    id="text"
                    required
                />
            </div>
            <div className="w-full flex justify-end ">
                <Button action={handleSubmit} isLoading={isLoading}>
                    {"Envoyer le message"}
                </Button>
            </div>
        </div>
    );
};
