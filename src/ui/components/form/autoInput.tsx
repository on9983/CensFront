import { useToggle } from "@/hooks/use-toggle";
import { Input } from "@/ui/design-system/form/input";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AutoForm } from "./autoForm";
import { BackEndContext, EntityElement } from "@/types/api/context-data";

interface Props {
    id: string[];
    valeur: string;
    sendData?: (dataForm: any) => {};
    width?: string;
    variant?: "Normal" | "Discret";
    label?: string;
    className?: string;
    px?: string;
    placeholder?: string;
}

export const AutoInput = ({
    id,
    valeur,
    sendData,
    width,
    variant = "Discret",
    label,
    className,
    px,
    placeholder = "---",
}: Props) => {
    const {
        handleSubmit,
        isLoading,
        formProps,
        formProps: {
            register,
            formState: { errors },
        },
    } = AutoForm(id, valeur, sendData);

    return (
        <Input
            value={valeur}
            variant={variant}
            label={label}
            size="Small"
            isLoading={isLoading}
            placeholder={placeholder}
            register={register}
            errors={errors}
            id="textValue"
            onBlur={handleSubmit}
            formProps={formProps}
            width={width}
            className={className}
            px={px}
        />
    );
};
