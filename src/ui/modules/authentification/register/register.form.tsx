import { FormType } from "@/types/form";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/form/input";
import { Typography } from "@/ui/design-system/typography/typography";

interface Props {
    form: FormType;
}

export const RegisterForm = ({ form }: Props) => {
    const { control, onSubmit, errors, isLoading, register, handleSubmit } =
        form;

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-left space-y-12 pt-3"
        >
            <div className="w-[340px] flex flex-col space-y-2">
                <div className="">
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
                <div className="">
                    <Typography
                        variant="h1"
                        theme="black"
                        component="div"
                        className="text-center"
                    >
                        {"Mot de passe"}
                    </Typography>
                    <div className="space-y-2">
                        <Input
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
                        <Input
                            isLoading={isLoading}
                            type="password"
                            placeholder="Confirmation du mot de passe"
                            register={register}
                            errors={errors}
                            errorMsg="Veuillez renseigner ce champs avant de valider."
                            id="passwordVerif"
                            required
                            isAutoCompleted
                        />
                    </div>
                </div>
                <div className="pt-4">
                    <Button
                        isLoading={isLoading}
                        type="submit"
                        size="medium"
                        fullWidth
                    >
                        {"Valider ces informations"}
                    </Button>
                </div>
                <Typography
                    variant="Small"
                    theme="gray"
                    component="div"
                    className="text-center"
                >
                    {
                        "L’utilisation de votre compte est soumise aux conditions d’utilisations générales du web, et à la politique de confidentialité des RGPD de l’union européenne."
                    }
                </Typography>
            </div>
        </form>
    );
};
