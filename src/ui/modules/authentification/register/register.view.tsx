import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import { LoginForm } from "../login/login.form";
import Image from "next/image";
import { FormType, RegisterFormType } from "@/types/form";
import { RegisterForm } from "./register.form";
import { useRouter } from "next/router";
import { useToggle } from "@/hooks/use-toggle";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthServerCreateUser } from "@/api/authentification";
import { toast } from "react-toastify";
import { useState } from "react";
import { Panneau } from "@/ui/design-system/box/panneau";
import { Box } from "@/ui/design-system/box/box";
import { CheckBox } from "@/ui/design-system/form/checkBox";
import { MentionRGPD } from "./RGPD/mention-rgpd";
import { ValidationEmailContainer } from "../validation-email/validation-email.container";

export const RegisterView = () => {
    const router = useRouter();
    const { value: isLoading, setValue: setIsLoading } = useToggle();
    const [dataform, setDataForm] = useState<RegisterFormType | null>(null);
    const [readRGPD, setReadRGPD] = useState<boolean>(false);
    const [validationEmail, setValidationEmail] = useState<boolean>(false);

    const {
        handleSubmit,
        control,
        formState: { errors },
        register,
        setError,
        reset,
    } = useForm<RegisterFormType>();

    const handleRegister = async ({ email, password }: RegisterFormType) => {
        const { error, data } = await AuthServerCreateUser(email, password);
        setIsLoading(false);
        if (error) {
            console.log(error);
            toast.error("Une erreur est survenue.");
            return;
        }
        console.log(data);
        if (data.response?.message) {
            if (data.response.traited) {
                toast.success(data.response.message);
                router.push("/connexion");
            } else {
                toast.error(data.response.message);
            }
        }
    };

    const handleRGPDValidate = () => {
        if (dataform !== null) {
            handleRegister(dataform);
            setDataForm(null);
            setReadRGPD(false);
        }
    };

    const onSubmit: SubmitHandler<RegisterFormType> = async (formData) => {
        setIsLoading(true);
        const { password, email, passwordVerif } = formData;

        if (passwordVerif !== password) {
            setError("passwordVerif", {
                type: "manual",
                message: "Les mot-de-passes doivent être identiques.",
            });
            setIsLoading(false);
            return;
        }

        if (password.length <= 8) {
            setError("passwordVerif", {
                type: "manual",
                message:
                    "Le mot de passe doit comporter au minimun 8 caractères.",
            });
            setIsLoading(false);
            return;
        }

        setDataForm(formData);
    };
    return (
        <>
            {dataform ? (
                <MentionRGPD
                    readRGPD={readRGPD}
                    handleRGPDValidate={handleRGPDValidate}
                    checkBoxChange={() => {
                        setReadRGPD(!readRGPD);
                    }}
                    buttonValidation={() => {
                        setDataForm(null);
                        setIsLoading(false);
                    }}
                />
            ) : (
                <>
                    <div className="flex flex-col justify-center">
                        <div className="w-[892px] space-y-2">
                            <Typography
                                variant="display"
                                theme="black"
                                component="div"
                                className=""
                            >
                                {"Inscription"}
                            </Typography>
                            <div className="flex items-center gap-8">
                                <Typography
                                    variant="CapMd"
                                    theme="grayLight"
                                    weight="light"
                                    component="div"
                                    className="max-w-[816px]"
                                >
                                    {
                                        "Si vous n’avez pas déjà de compte, vous pouvez en créer un ici. Vous devez renseigner un email comme identifiant, et un mot de passe. Cette email sera à valider par email via une confirmation."
                                    }
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-end gap-80">
                        <div className="ml-16 w-[760px]">
                            <RegisterForm
                                form={{
                                    control,
                                    onSubmit,
                                    errors,
                                    isLoading,
                                    register,
                                    handleSubmit,
                                }}
                            />
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
            )}
        </>
    );
};
