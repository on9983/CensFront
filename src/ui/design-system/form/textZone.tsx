import { RiCheckboxCircleLine } from "react-icons/ri";
import { Typography } from "../typography/typography";
import clsx from "clsx";
import { IconProps } from "@/types/iconProps";
import { v4 } from "uuid";
import { Input } from "./input";
import { FormPropsType } from "@/types/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { useToggle } from "@/hooks/use-toggle";
import { AutoForm } from "@/ui/components/form/autoForm";
import { register } from "module";
import { useState } from "react";

interface Props {
    titre?: string;
    dataLabel: string;
    data: any;
    className?: string;
    sendData?: (dataForm: any) => {};
}

export const TextZone = ({
    titre,
    dataLabel,
    data,
    className,
    sendData,
}: Props) => {
    const {
        handleSubmit,
        isLoading,
        formProps,
        formProps: {
            register,
            formState: { errors },
        },
    } = AutoForm(dataLabel, data, sendData);
    return (
        <div className={clsx("space-y-1", className)}>
            {titre && (
                <Typography
                    variant="CapMd"
                    theme="primary"
                    className="text-left"
                >
                    {titre}
                </Typography>
            )}
            <Input
                value={data}
                component="textarea"
                className="text-oniCapSm"
                height="h-[110px]"
                size="None"
                isLoading={isLoading}
                type="text"
                placeholder="Entrez ici vos détails."
                register={register}
                errors={errors}
                errorMsg="Veuillez renseigner ce champs avant de valider."
                id="textValue"
                onBlur={handleSubmit}
            />
        </div>
    );
};
