import { FormType } from "@/types/form";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import { LoginForm } from "../login/login.form";
import Image from "next/image";
import { ForgetPWDForm } from "./forget-password.form";
import { FgtPWDJetonForm } from "./fgt-pwd-jeton.form";

interface Props {
    form: FormType;
    handleDontHaveJeton: Function;
}

export const FgtPWDJetonView = ({ form, handleDontHaveJeton }: Props) => {
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
                        {"Nouveau mot de passe"}
                    </Typography>

                    <Typography
                        variant="CapMd"
                        theme="grayLight"
                        weight="light"
                        component="div"
                        className="max-w-[716px]"
                    >
                        {
                            "Veuillez rentrer un nouveau mot de passe, avec confirmation de celui ci. Le jeton reçu par email est à renseigner."
                        }
                    </Typography>
                </div>
            </div>
            <div className="relative flex items-center justify-end gap-80">
                <div className="ml-16 w-[760px]">
                    <FgtPWDJetonForm handleDontHaveJeton={handleDontHaveJeton} form={form} />
                </div>
                <div className="h-[300px] w-[264px]">
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
