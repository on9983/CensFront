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
import { Panneau } from "../box/panneau";
import { ActiveLink } from "@/ui/components/navigation/active-link";

interface Props {
    colonnes: string[];
    data: any;
    className?: string;
    sendData?: (dataForm: any) => {};
    colonnesWidth?: string;
    titreH?: string;
    cellH?: string;
    inputWidth?: string;
    msgVide?: string;
    type?: "Cellule" | "Catalogue" | "Unique";
    action?: Function;
    elSelected?: string;
    px?: string;
}

export const Classeur = ({
    colonnes,
    data,
    className,
    sendData,
    colonnesWidth = "w-[250px]",
    titreH = "h-[45px]",
    cellH = "",
    inputWidth = "w-[140px]",
    msgVide = "Aucun élément enregistré.",
    type = "Catalogue",
    action = () => {},
    elSelected,
    px = "px-[11px]",
}: Props) => {
    //console.log(data[Object.keys(data)[0]]);
    const rowStyle: string =
        "h-[30px] py-[2px] flex items-center border-t border-oniPrimary text-oniCapMd text-oniNoir " +
        cellH +
        " " +
        px;
    const titleStyle: string =
        "py-[2px] flex items-center bg-oniPrimary-150 text-oniCapLg text-oniPrimary " +
        titreH +
        " " +
        px;
    if (sendData) {
        if (type === "Catalogue") {
            return (
                <>
                    {data ? (
                        <div
                            className={clsx(
                                "flex items-center border border-oniPrimary rounded",
                                className
                            )}
                        >
                            <div className="flex flex-col">
                                <div
                                    className={clsx(
                                        colonnesWidth,
                                        titleStyle,
                                        "rounded-tl border-r"
                                    )}
                                >
                                    {colonnes[0]}
                                </div>

                                {Object.keys(data).map((label: string) => {
                                    return (
                                        <div
                                            key={v4()}
                                            className={clsx(
                                                colonnesWidth,
                                                rowStyle,
                                                "border-r"
                                            )}
                                        >
                                            {label}
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="flex flex-col">
                                <div
                                    className={clsx(
                                        colonnesWidth,
                                        titleStyle,
                                        "rounded-tr"
                                    )}
                                >
                                    {colonnes[1]}
                                </div>

                                {Object.keys(data).map((label: string) => {
                                    const {
                                        handleSubmit,
                                        isLoading,
                                        formProps,
                                        formProps: {
                                            register,
                                            formState: { errors },
                                        },
                                    } = AutoForm(label, data[label], sendData);
                                    return (
                                        <div
                                            key={v4()}
                                            className={clsx(
                                                colonnesWidth,
                                                rowStyle
                                            )}
                                        >
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
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <Panneau>{msgVide}</Panneau>
                        </div>
                    )}
                </>
            );
        }
        if (type === "Cellule") {
            let i: number = 0;
            let n: number = 1;
            let bg_style: string = "";
            return (
                <>
                    {data ? (
                        <div
                            className={clsx(
                                "w-min flex items-center border border-oniPrimary rounded",
                                className
                            )}
                        >
                            <div className="flex flex-col w-[32px]">
                                {Object.keys(data).map(
                                    (label: string, indexLabel: number) => {
                                        return (
                                            <div
                                                key={v4()}
                                                className={clsx(
                                                    "",
                                                    indexLabel === 0
                                                        ? titleStyle
                                                        : rowStyle,
                                                    "border-r"
                                                )}
                                            >
                                                {indexLabel !== 0 && label}
                                            </div>
                                        );
                                    }
                                )}
                            </div>

                            {colonnes.map(
                                (colonne: string, index_col: number) => {
                                    i = i + 1;
                                    if (i === 2 * n) {
                                        n = n + 1;
                                        bg_style = "bg-oniPrimary-120";
                                    } else {
                                        bg_style = "bg-oniPrimary-100";
                                    }
                                    if (index_col !== 0 && index_col !== 6)
                                        return (
                                            <div
                                                className={clsx(
                                                    "flex flex-col",
                                                    colonnesWidth,
                                                    bg_style
                                                )}
                                            >
                                                {Object.keys(data).map(
                                                    (
                                                        label: string,
                                                        indexLabel: number
                                                    ) => {
                                                        const {
                                                            handleSubmit,
                                                            isLoading,
                                                            formProps,
                                                            formProps: {
                                                                register,
                                                                formState: {
                                                                    errors,
                                                                },
                                                            },
                                                        } = AutoForm(
                                                            [
                                                                indexLabel,
                                                                index_col - 1,
                                                            ],
                                                            data[label][
                                                                index_col - 1
                                                            ],
                                                            sendData
                                                        );
                                                        return (
                                                            <div
                                                                key={v4()}
                                                                className={clsx(
                                                                    "",
                                                                    indexLabel ===
                                                                        0
                                                                        ? titleStyle
                                                                        : rowStyle,
                                                                    "border-r"
                                                                )}
                                                            >
                                                                <Input
                                                                    value={
                                                                        data[
                                                                            label
                                                                        ][
                                                                            index_col -
                                                                                1
                                                                        ]
                                                                    }
                                                                    variant="Discret"
                                                                    size="Small"
                                                                    isLoading={
                                                                        isLoading
                                                                    }
                                                                    placeholder="---"
                                                                    register={
                                                                        register
                                                                    }
                                                                    errors={
                                                                        errors
                                                                    }
                                                                    id="textValue"
                                                                    onBlur={
                                                                        handleSubmit
                                                                    }
                                                                    formProps={
                                                                        formProps
                                                                    }
                                                                    width={
                                                                        inputWidth
                                                                    }
                                                                    bgColor={
                                                                        indexLabel ===
                                                                        0
                                                                            ? "bg-oniPrimary-150"
                                                                            : bg_style
                                                                    }
                                                                />
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        );
                                }
                            )}

                            <div
                                className={clsx("flex flex-col", colonnesWidth)}
                            >
                                {Object.keys(data).map(
                                    (label: string, indexLabel: number) => {
                                        const {
                                            handleSubmit,
                                            isLoading,
                                            formProps,
                                            formProps: {
                                                register,
                                                formState: { errors },
                                            },
                                        } = AutoForm(
                                            [indexLabel, 5],
                                            data[label][5],
                                            sendData
                                        );
                                        return (
                                            <div
                                                key={v4()}
                                                className={clsx(
                                                    "",
                                                    indexLabel === 0
                                                        ? titleStyle
                                                        : rowStyle
                                                )}
                                            >
                                                <Input
                                                    value={data[label][5]}
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
                                                    bgColor={
                                                        indexLabel === 0
                                                            ? "bg-oniPrimary-150"
                                                            : undefined
                                                    }
                                                />
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <Panneau>{msgVide}</Panneau>
                        </div>
                    )}
                </>
            );
        }
    }
    if (type === "Unique") {
        return (
            <>
                {data ? (
                    <div
                        className={clsx(
                            "w-min flex items-center border border-oniPrimary rounded",
                            className
                        )}
                    >
                        <div className={clsx("flex flex-col", colonnesWidth)}>
                            {Object.keys(data).map((label: string) => {
                                return (
                                    <div key={v4()} className={clsx(rowStyle)}>
                                        <ActiveLink
                                            action={() => {
                                                action(data[label]);
                                            }}
                                            isActive={
                                                data[label] === elSelected
                                            }
                                        >
                                            {data[label]}
                                        </ActiveLink>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <Panneau>{msgVide}</Panneau>
                    </div>
                )}
            </>
        );
    }

    return (
        <>
            {data ? (
                <div
                    className={clsx(
                        "flex items-center border border-oniPrimary rounded",
                        className
                    )}
                >
                    <div className="flex flex-col">
                        <div
                            className={clsx(
                                colonnesWidth,
                                titleStyle,
                                "rounded-tl border-r"
                            )}
                        >
                            {colonnes[0]}
                        </div>

                        {Object.keys(data).map((label: string) => {
                            return (
                                <div
                                    key={v4()}
                                    className={clsx(
                                        colonnesWidth,
                                        rowStyle,
                                        "border-r"
                                    )}
                                >
                                    {label}
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex flex-col">
                        <div
                            className={clsx(
                                colonnesWidth,
                                titleStyle,
                                "rounded-tr"
                            )}
                        >
                            {colonnes[1]}
                        </div>

                        {Object.keys(data).map((label: string) => {
                            return (
                                <div
                                    key={v4()}
                                    className={clsx(colonnesWidth, rowStyle)}
                                >
                                    {data[label]}
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <div className="w-full h-full flex items-center justify-center">
                    <Panneau>{msgVide}</Panneau>
                </div>
            )}
        </>
    );
};
