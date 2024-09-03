import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ForgetPWDView } from "./forget-password.view";
import { FgtPWDJetonFormType, ForgetPSWFormType } from "@/types/form";
import { FgtPWDJetonView } from "./fgt-pwd-jeton.view";
import {
    AuthServerFgtPWDJeton,
    AuthServerPWDForget,
} from "@/api/authentification";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useToggle } from "@/hooks/use-toggle";

export const ForgetPWDContainer = () => {
    const router = useRouter();
    const { value: isLoading, setValue: setIsLoading } = useToggle();
    const { value: haveJeton, setValue: setHaveJeton } = useToggle();
    const [emailSelected, setEmailSelect] = useState<string | undefined>(
        undefined
    );

    const {
        handleSubmit,
        control,
        formState: { errors },
        register,
        setError,
        reset,
    } = useForm<ForgetPSWFormType>();

    const handleForgetPWD = async ({ email }: ForgetPSWFormType) => {
        const { error, data } = await AuthServerPWDForget(email);
        setIsLoading(false);
        if (error) {
            console.log(error);
            toast.error("Une erreur est survenue.");
            return;
        }
        console.log(data);
        setEmailSelect(email);

        if (data.response?.message) {
            if (data.response.traited) {
                toast.success(data.response.message);
            } else {
                toast.error(data.response.message);
            }
        }
    };

    const onSubmit: SubmitHandler<ForgetPSWFormType> = async (formData) => {
        setIsLoading(true);
        console.log("formData", formData);

        handleForgetPWD(formData);
    };

    const {
        handleSubmit: handleSubmitB,
        control: controlB,
        formState: { errors: errorsB },
        register: registerB,
        setError: setErrorB,
        reset: resetB,
    } = useForm<FgtPWDJetonFormType>();

    const handleFgtPWDJeton = async ({
        jeton,
        password,
    }: FgtPWDJetonFormType) => {
        if (emailSelected) {
            const { error, data } = await AuthServerFgtPWDJeton(
                jeton,
                emailSelected,
                password
            );
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
        }
    };

    const onSubmitB: SubmitHandler<FgtPWDJetonFormType> = async (formData) => {
        setIsLoading(true);
        console.log("formData", formData);
        const { password, passwordVerif } = formData;

        if (passwordVerif !== password) {
            setErrorB("passwordVerif", {
                type: "manual",
                message: "Les mot-de-passes doivent être identiques.",
            });
            setIsLoading(false);
            return;
        }

        if (password.length <= 8) {
            setErrorB("passwordVerif", {
                type: "manual",
                message:
                    "Le mot de passe doit comporter au minimun 8 caractères.",
            });
            setIsLoading(false);
            return;
        }

        handleFgtPWDJeton(formData);
    };

    const handleHaveJeton = () => {
        console.log("test");
        setHaveJeton(true);
    };
    const handleDontHaveJeton = () => {
        setHaveJeton(false);
    };

    return (
        <>
            {haveJeton && emailSelected ? (
                <FgtPWDJetonView
                    handleDontHaveJeton={handleDontHaveJeton}
                    form={{
                        handleSubmit: handleSubmitB,
                        errors: errorsB,
                        control: controlB,
                        register: registerB,
                        onSubmit: onSubmitB,
                        isLoading,
                    }}
                />
            ) : (
                <ForgetPWDView
                    handleHaveJeton={handleHaveJeton}
                    form={{
                        handleSubmit,
                        errors,
                        control,
                        register,
                        onSubmit,
                        isLoading,
                    }}
                />
            )}
        </>
    );
};
