import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ValidationEmailView } from "./validation-email.view";
import {
    ValidationEmailJetonFormType,
    ValidationEmailFormType,
} from "@/types/form";
import { ValidationEmailJetonView } from "./email-jeton.view";
import {
    AuthServerJetonVerif,
    AuthServerSendVerif,
} from "@/api/authentification";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useToggle } from "@/hooks/use-toggle";
import { useAuth } from "@/context/AuthUserContext";

export const ValidationEmailContainer = () => {
    const router = useRouter();
    const { authUser, authUserIsLoading } = useAuth();
    const { value: isLoading, setValue: setIsLoading } = useToggle();
    const { value: haveJeton, setValue: setHaveJeton } = useToggle();
    const [emailSelected, setEmailSelect] = useState<string>(authUser.uid);

    const {
        handleSubmit,
        control,
        formState: { errors },
        register,
        setError,
        reset,
    } = useForm<ValidationEmailFormType>();

    const handleForgetPWD = async ({}: ValidationEmailFormType) => {
        const { error, data } = await AuthServerSendVerif(emailSelected);
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
            } else {
                toast.error(data.response.message);
            }
        }
    };

    const onSubmit: SubmitHandler<ValidationEmailFormType> = async (
        formData
    ) => {
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
    } = useForm<ValidationEmailJetonFormType>();

    const handleFgtPWDJeton = async ({
        jeton,
    }: ValidationEmailJetonFormType) => {
        if (emailSelected) {
            const { error, data } = await AuthServerJetonVerif(
                emailSelected,
                jeton
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

    const onSubmitB: SubmitHandler<ValidationEmailJetonFormType> = async (
        formData
    ) => {
        setIsLoading(true);
        console.log("formData", formData);

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
                <ValidationEmailJetonView
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
                <ValidationEmailView
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
