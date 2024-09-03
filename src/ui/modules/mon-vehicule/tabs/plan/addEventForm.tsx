import { DataServerSetVehiculeField } from "@/api/Ressources/data-vehicules";
import { useToggle } from "@/hooks/use-toggle";
import { FormPropsType } from "@/types/form";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/form/input";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface formFields {
    nom: string;
    date: string;
    frais: string;
}

interface Props {
    handleGetData: () => {};
}

export const AddEventForm = ({ handleGetData }: Props) => {
    const router = useRouter();
    const { value: isLoading, setValue: setIsLoading } = useToggle();

    const formProps = useForm<formFields>();
    const {
        register,
        formState: { errors },
    } = formProps;

    const onSubmit: SubmitHandler<formFields> = async (Formdata) => {
        const dataForm = { addEvent: Formdata };
        const dataForm2 = { ...dataForm, tab: "PLAN" };
        setIsLoading(true);
        const { error, data } = await DataServerSetVehiculeField(dataForm2);
        setIsLoading(false);
        if (error) {
            console.log(error);
            toast.error("Une erreur est survenue.");
            return;
        }

        if (data.message) {
            if (data.code) {
                if (data.code === 401 || data.code === 403) {
                    router.push(router.pathname);
                }
                return;
            }
            return;
        }
        if (data.data.message) {
            toast.error(data.data.message);
            return false;
        }

        if (data.traited) {
            console.log(data);
            handleGetData();
            return true;
        }
        toast.error("Une erreur est survenue.");
        router.push(router.pathname);
        return false;
    };

    const handleSubmit = formProps.handleSubmit(onSubmit);

    return (
        <div className="w-[240px] h-[300px] flex flex-col justify-between ">
            <div className="space-y-3 text-left">
                <Input
                    label="Nom de l'évènement"
                    size="Medium"
                    isLoading={isLoading}
                    type="text"
                    placeholder="Nom de l'évènement"
                    register={register}
                    errors={errors}
                    errorMsg="Veuillez renseigner ce champs avant de valider."
                    id="nom"
                    required
                />
                <Input
                    label="Data prévu"
                    size="Medium"
                    isLoading={isLoading}
                    type="text"
                    placeholder="dd/mm/aaaa"
                    register={register}
                    errors={errors}
                    errorMsg="Veuillez renseigner ce champs avant de valider."
                    id="date"
                    required
                />
                <Input
                    label="Frais de l'évènement"
                    size="Medium"
                    isLoading={isLoading}
                    type="text"
                    placeholder="0.00 €"
                    register={register}
                    errors={errors}
                    errorMsg="Veuillez renseigner ce champs avant de valider."
                    id="frais"
                />
            </div>
            <Button action={handleSubmit} isLoading={isLoading}>
                {"Planifier"}
            </Button>
        </div>
    );
};
