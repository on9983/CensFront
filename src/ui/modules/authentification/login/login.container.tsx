import { SubmitHandler, useForm } from "react-hook-form";
import { LoginView } from "./login.view";
import { LoginFormType } from "@/types/form";
import { useEffect, useState } from "react";
import { AuthServerCheckState, AuthServerLogin } from "@/api/authentification";
import { toast } from "react-toastify";
import { useToggle } from "@/hooks/use-toggle";
import { useRouter } from "next/router";

export const LoginContainer = () => {
    const router = useRouter();
    const { value: isLoading, setValue: setIsLoading } = useToggle();

    const {
        handleSubmit,
        control,
        formState: { errors },
        register,
        setError,
        reset,
    } = useForm<LoginFormType>();

    const onSubmit: SubmitHandler<LoginFormType> = async ({ email, password }: LoginFormType) => {
        setIsLoading(true);
        const { error, data } = await AuthServerLogin(email, password);
        setIsLoading(false);
        if (error) {
            console.log(error);
            toast.error("Une erreur est survenue.");
            return;
        }

        if (data.traited) {
            if (window && data.accessToken) {
                window.sessionStorage.setItem("accessToken", data.accessToken);
                toast.success("Bienvenue.");
                router.push(router.pathname);
                return;
            }
            toast.error("Une erreur est survenue avec votre navigateur.");
            return;
        }
        if (data.message) {
            toast.error(data.message);
        }
    };

    return (
        <LoginView
            form={{
                handleSubmit,
                errors,
                control,
                register,
                onSubmit,
                isLoading,
            }}
        />
    );
};
