import { FormType } from "@/types/form";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import { LoginForm } from "../login/login.form";
import Image from "next/image";
import { ForgetPWDForm } from "./forget-password.form";

interface Props {
    form: FormType;
    handleHaveJeton: Function;
}

export const ForgetPWDView = ({ form, handleHaveJeton }: Props) => {
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
                        {"Changement de mot de passe"}
                    </Typography>

                    <Typography
                        variant="CapMd"
                        theme="grayLight"
                        weight="light"
                        component="div"
                        className="max-w-[716px]"
                    >
                        {
                            "Si vous ne parvenez pas à vous connecter à un compte existant, veuillez renseigner la boite mail de ce compte ci dessous. Un email avec un jeton vous sera transmis via celui-ci. Ce jeton est à renseigner dans le champ en dessous."
                        }
                    </Typography>
                </div>
            </div>
            <div className="relative flex items-center justify-end gap-80">
                <div className="ml-16 w-[760px] space-y-4">
                    <ForgetPWDForm handleHaveJeton={handleHaveJeton} form={form} />
                </div>
                <div className="h-[300px] w-[264px]">
                    <Image
                        width={516.48}
                        height={381}
                        priority
                        src="/images/Connexion3.png"
                        alt="Dessin d'une femme connectée à diver tâches."
                        className="absolute right-12 -top-7 -z-10"
                    />
                </div>
            </div>
        </>
    );
};
