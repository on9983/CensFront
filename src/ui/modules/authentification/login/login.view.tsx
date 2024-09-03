import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { LoginForm } from "./login.form";
import { FormType } from "@/types/form";

interface Props {
    form: FormType;
}

export const LoginView = ({ form }: Props) => {
    const { isLoading } = form;
    return (
        <>
            <div className="flex flex-col justify-center">
                <div className="w-[892px] space-y-2">
                    <Typography
                        variant="display"
                        theme="black"
                        component="div"
                        className=""
                    >
                        {"Connexion"}
                    </Typography>
                    <div className="flex items-center gap-8">
                        <Typography
                            variant="CapMd"
                            theme="grayLight"
                            weight="light"
                            component="div"
                            className="max-w-[716px]"
                        >
                            {
                                "Pour vous connecter, veuillez rentrer votre email comme identifiant, puis votre mots de passe. Si vous n’avez pas de compte, vous pouvez vous inscrire avec ce bouton."
                            }
                        </Typography>
                        <Button
                            baseUrl="connexion/inscription"
                            variant="secondary"
                            disabled={isLoading}
                        >
                            {"S'inscrire ?"}
                        </Button>
                    </div>
                </div>
            </div>
            <div className="relative flex items-center justify-end gap-80">
                <div className="ml-16 w-[760px]">
                    <LoginForm form={form} />
                </div>
                <div className="h-[381px] w-[264px]">
                    <Image
                        width={516.48}
                        height={381}
                        priority
                        src="/images/Connexion3.png"
                        alt="Dessin d'une femme connectée à diver tâches."
                        className="absolute right-12 -top-4 -z-10"
                    />
                </div>
            </div>
        </>
    );
};
