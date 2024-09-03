import { FormType } from "@/types/form";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import { LoginForm } from "../login/login.form";
import Image from "next/image";
import { ValidationEmailForm } from "./validation-email.form";

interface Props {
    form: FormType;
    handleHaveJeton: Function;
}

export const ValidationEmailView = ({ form, handleHaveJeton }: Props) => {
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
                        {"Validation du compte"}
                    </Typography>

                    <Typography
                        variant="CapMd"
                        theme="grayLight"
                        weight="light"
                        component="div"
                        className="max-w-[716px]"
                    >
                        {
                            "Un email de validation comportant un jeton vous sera transmis en appuyant sur ce bouton. Ce jeton est à renseigner dans le champ en dessous."
                        }
                    </Typography>
                </div>
            </div>
            <div className="relative flex items-center justify-end gap-80">
                <div className="ml-16 w-[760px] space-y-4">
                    <ValidationEmailForm handleHaveJeton={handleHaveJeton} form={form} />
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
