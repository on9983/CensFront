import { FormType } from "@/types/form";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/form/input";
import { Typography } from "@/ui/design-system/typography/typography";

interface Props {
    form: FormType;
    handleDontHaveJeton: Function;
}

export const FgtPWDJetonForm = ({ form, handleDontHaveJeton }: Props) => {
    const { control, onSubmit, errors, isLoading, register, handleSubmit } =
        form;

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-left"
        >
            <div className="w-[340px] space-y-8 pt-10">
                <Input
                    size="Medium"
                    isLoading={isLoading}
                    type="text"
                    placeholder="Copiez-collez votre jeton ici."
                    register={register}
                    errors={errors}
                    errorMsg="Veuillez renseigner ce champs avant de valider."
                    id="jeton"
                    required
                />
                <div className="space-y-2">
                    <Input
                        size="Medium"
                        isLoading={isLoading}
                        type="password"
                        placeholder="Nouveau mot de passe"
                        register={register}
                        errors={errors}
                        errorMsg="Veuillez renseigner ce champs avant de valider."
                        id="password"
                        required
                    />
                    <Input
                        size="Medium"
                        isLoading={isLoading}
                        type="password"
                        placeholder="Confirmation du mot de passe"
                        register={register}
                        errors={errors}
                        errorMsg="Veuillez renseigner ce champs avant de valider."
                        id="passwordVerif"
                        required
                    />
                </div>
                <Button isLoading={isLoading} type="submit" fullWidth>
                    {"Valider ma demande"}
                </Button>
                <div className="flex justify-end">
                    <Button action={handleDontHaveJeton} size="small" variant="secondary">
                        {"J'ai n'ai pas reçu le jeton"}
                    </Button>
                </div>
            </div>
        </form>
    );
};
