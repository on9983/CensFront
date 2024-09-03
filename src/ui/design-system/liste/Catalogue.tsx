import { RiCheckboxCircleLine } from "react-icons/ri";
import { Typography } from "../typography/typography";
import clsx from "clsx";
import { IconProps } from "@/types/iconProps";
import { v4 } from "uuid";
import { Input } from "../form/input";
import { FormPropsType } from "@/types/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { useToggle } from "@/hooks/use-toggle";
import { AutoForm } from "@/ui/components/form/autoForm";
import { register } from "module";
import { useState } from "react";

interface Props {
    titre?: string;
    size?: "small" | "large";
    height?: string;
    data: any;
    className?: string;
    sendData?: (dataForm: any) => {};
    inputWidth?: string;
}

export const Catalogue = ({
    titre,
    size = "large",
    height = "h-full",
    data,
    className,
    sendData,
    inputWidth = "w-[140px]",
}: Props) => {
    let titreStyle: string = "",
        rowStyleC1: string = "",
        rowStyleC2: string = "";

    switch (size) {
        case "small":
            titreStyle = "py-2 text-oniCapMd text-oniPrimary";
            rowStyleC1 = "h-5 text-oniCapSm text-oniPrimary-800";
            rowStyleC2 = "h-5 text-oniCapSmLight text-oniNoir";
            break;
        case "large":
            titreStyle = "pb-6 pt-4 text-oniH3 text-oniPrimary";
            rowStyleC1 = "h-7 text-oniCapMd text-oniPrimary";
            rowStyleC2 = "h-7 text-oniCapMd text-oniNoir";
            break;
    }

    if (sendData) {
        return (
            <div
                className={clsx(
                    "flex flex-col items-center",
                    height,
                    className
                )}
            >
                {titre && <div className={clsx(titreStyle)}>{titre}</div>}

                <div className="flex gap-4">
                    <div className="flex flex-col gap-2">
                        {Object.keys(data).map((label) => (
                            <div key={v4()} className={clsx(rowStyleC1)}>
                                {label}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        {Object.keys(data).map((label: string) => {
                            let labelI: string | string[] = label;
                            if (titre) {
                                labelI = [titre, label];
                            }
                            const {
                                handleSubmit,
                                isLoading,
                                formProps,
                                formProps: {
                                    register,
                                    formState: { errors },
                                },
                            } = AutoForm(labelI, data[label], sendData);

                            return (
                                <div key={v4()} className={clsx(rowStyleC2)}>
                                    <Input
                                        value={data[label]}
                                        variant="Discret"
                                        size="Small"
                                        isLoading={isLoading}
                                        placeholder="---"
                                        register={register}
                                        errors={errors}
                                        id="textValue"
                                        onBlur={handleSubmit}
                                        formProps={formProps}
                                        width={inputWidth}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={clsx("h-full flex flex-col items-center", className)}>
            {titre && <div className={clsx(titreStyle)}>{titre}</div>}

            <div className="flex gap-4">
                <div className="flex flex-col gap-2">
                    {Object.keys(data).map((label) => (
                        <div key={v4()} className={clsx(rowStyleC1)}>
                            {label}
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-2">
                    {Object.keys(data).map((label: string) => {
                        return (
                            <div key={v4()} className={clsx(rowStyleC2)}>
                                {data[label]}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
