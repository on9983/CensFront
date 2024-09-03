import { FormPropsType } from "@/types/form";
import { Input } from "@/ui/design-system/form/input";

interface Props {
    form: FormPropsType;
}

export const ProfileStepForm = ({ form }: Props) => {
    const {
        formProps: {
            register,
            formState: { errors },
        },
        isLoading,
    } = form;

    return (
        <form className="w-full max-w-md">
            <Input
                size="Medium"
                isLoading={isLoading}
                type="text"
                placeholder="Entrez ici le nom prévu de votre provenance."
                register={register}
                errors={errors}
                errorMsg="Veuillez renseigner ce champs avant de valider."
                id="nom"
                required
            />
        </form>
    );
};
