import { FormType } from "@/types/form";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/form/input";
import { Typography } from "@/ui/design-system/typography/typography";

interface Props {
    form: FormType;
}

export const LoginForm = ({ form }: Props) => {
    const { control, onSubmit, errors, isLoading, register, handleSubmit } =
        form;

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-left space-y-12 pt-5"
        >
            <div className="w-[320px] flex flex-col space-y-6">
                <div className="space-y-2">
                    <Typography
                        variant="h1"
                        theme="black"
                        component="div"
                        className="text-center"
                    >
                        {"Identifiant"}
                    </Typography>
                    <Input
                        size="Large"
                        isLoading={isLoading}
                        type="email"
                        placeholder="Votre email"
                        register={register}
                        errors={errors}
                        errorMsg="Veuillez renseigner ce champs avant de valider."
                        id="email"
                        required
                        isAutoCompleted
                    />
                </div>
                <div className="space-y-2">
                    <Typography
                        variant="h1"
                        theme="black"
                        component="div"
                        className="text-center"
                    >
                        {"Mot de passe"}
                    </Typography>
                    <Input
                        size="Large"
                        isLoading={isLoading}
                        type="password"
                        placeholder="Votre mot de passe"
                        register={register}
                        errors={errors}
                        errorMsg="Veuillez renseigner ce champs avant de valider."
                        id="password"
                        required
                        isAutoCompleted
                    />
                </div>
            </div>
            <div className="flex items-center gap-8">
                <Button isLoading={isLoading} type="submit" size="large">
                    {"Valider"}
                </Button>
                <Button
                    baseUrl="connexion/mots-de-passe-perdu"
                    variant="secondary"
                    disabled={isLoading}
                >
                    {"Mot de passe oublié ?"}
                </Button>
            </div>
        </form>
    );
};
