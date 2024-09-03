import { LoginFormType, RegisterFormType } from "@/types/form";
import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterView } from "./register.view";
import { useState } from "react";
import { AuthServerCreateUser } from "@/api/authentification";
import { toast } from "react-toastify";
import { Button } from "@/ui/design-system/button/button";
import { useToggle } from "@/hooks/use-toggle";
import { useRouter } from "next/router";

export const RegisterContainer = () => {
    return (
        <RegisterView />
    );
};
