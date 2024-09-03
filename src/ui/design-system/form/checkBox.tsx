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
    dataLabel: string | string[];
    value: boolean;
    className?: string;
    sendData?: (dataForm: any) => {};
    width?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckBox = ({
    titre,
    dataLabel,
    value,
    className,
    sendData,
    width = "h-[22px] w-[22px]",
    onChange,
}: Props) => {
    const {
        handleSubmit,
        isLoading,
        formProps,
        formProps: {
            register,
            setValue,
            formState: { errors },
        },
    } = AutoForm(dataLabel, value, sendData);

    const handleClick = () => {
        setValue("textValue", value ? false : true);
        handleSubmit();
    };

    return (
        <div className={clsx("flex items-center gap-4", className)} onClick={handleClick}>
            {titre && (
                <Typography
                    variant="CapLg"
                    theme="primary"
                    className="text-left"
                >
                    {titre}
                </Typography>
            )}
            <Input
                className=" accent-oniPrimary text-oniPrimary"
                variant="Normal"
                width={width}
                value={value}
                isLoading={isLoading}
                type="checkbox"
                register={register}
                errors={errors}
                id="textValue"
                onChange={onChange}
            />
        </div>
    );
};
