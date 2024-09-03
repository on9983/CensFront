import {
    RiCheckboxBlankLine,
    RiCheckboxCircleLine,
    RiCheckboxLine,
} from "react-icons/ri";
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
import { HistoriqueCout } from "@/types/component/historique-type";
import { AutoInput } from "@/ui/components/form/autoInput";
import { BackEndContext, EntityElement } from "@/types/api/context-data";
import { CheckBox } from "../form/checkBox";

interface Props {
    titre?: string;
    size?: "small" | "large";
    data: { historiques: any; entity: string };
    className?: string;
    sendData?: (dataForm: any) => {};
    context?: BackEndContext;
    liaison?: EntityElement;
}

export const Historique = ({
    titre,
    size = "small",
    data,
    className,
    sendData,
}: Props) => {
    let titreStyle: string = "",
        rowStyleC1: string = "",
        rowStyleC2: string = "",
        rowStyle: string = "";
    const colW1: string = "w-[100px]",
        colW2: string = "w-[90px]",
        colW3: string = "w-[80px]",
        colW4: string = "w-[28px] text-oniPrimary";

    switch (size) {
        case "small":
            rowStyle = "py-1";
            titreStyle = "py-2 text-oniCapMd text-oniPrimary";
            rowStyleC1 = "text-oniCapSm text-oniPrimary-800";
            rowStyleC2 = "text-oniCapSmLight text-oniNoir";
            break;
        case "large":
            rowStyle = "h-7";
            titreStyle = "pb-6 pt-4 text-oniH3 text-oniPrimary";
            rowStyleC1 = "text-oniCapMd text-oniPrimary";
            rowStyleC2 = "text-oniCapMd text-oniNoir";
            break;
    }

    const checkSup = (value?: string) => {
        if (value) {
            if (Number(value) > 0) {
                return true;
            }
        }
        return false;
    };

    if (sendData) {
        return (
            <div
                className={clsx(
                    "h-[320px] w-[360px] px-4 flex flex-col items-center overflow-auto",
                    className
                )}
            >
                {Object.keys(data["historiques"]).map((id) => {
                    const object = data["historiques"][id];
                    if (object["type"] === "debug") {
                        return;
                    }
                    return (
                        <div
                            key={v4()}
                            className="w-full text-left flex justify-between border-b border-oniPrimary-300"
                        >
                            <div className={clsx(rowStyle, rowStyleC1, colW1)}>
                                <AutoInput
                                    id={[data["entity"], String(id), "nom"]}
                                    valeur={object["nom"]}
                                    sendData={sendData}
                                />
                            </div>
                            <div className={clsx(rowStyle, rowStyleC2, colW2)}>
                                {object["effectued"] ? (
                                    <div className="space-y-1">
                                        <div>
                                            <div className="text-oniPrimary">
                                                {"Prévu :"}
                                            </div>
                                            <AutoInput
                                                id={[
                                                    data["entity"],
                                                    String(id),
                                                    "date",
                                                ]}
                                                valeur={object["date"]}
                                                sendData={sendData}
                                            />
                                        </div>
                                        <div>
                                            <div className="text-oniPrimary">
                                                {"Effective :"}
                                            </div>
                                            <AutoInput
                                                id={[
                                                    data["entity"],
                                                    String(id),
                                                    "dateF",
                                                ]}
                                                valeur={object["dateF"]}
                                                sendData={sendData}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <AutoInput
                                        id={[
                                            data["entity"],
                                            String(id),
                                            "date",
                                        ]}
                                        valeur={object["date"]}
                                        sendData={sendData}
                                    />
                                )}
                            </div>

                            <div
                                className={clsx(
                                    rowStyle,
                                    colW3,
                                    "text-right truncate",
                                    checkSup(object["frais"])
                                        ? "text-oniAlert-danger"
                                        : "text-oniAlert-success"
                                )}
                            >
                                <div className="flex ">
                                    <AutoInput
                                        id={[
                                            data["entity"],
                                            String(id),
                                            "frais",
                                        ]}
                                        valeur={object["frais"]}
                                        sendData={sendData}
                                        width="w-[60px] text-right"
                                    />
                                    {"€"}
                                </div>
                            </div>
                            <div className={clsx(rowStyle, rowStyleC2, colW4)}>
                                {object["effectued"] !== undefined && (
                                    <>
                                        <CheckBox
                                            dataLabel={[
                                                data["entity"],
                                                String(id),
                                                "effectued",
                                            ]}
                                            value={object["effectued"]}
                                            sendData={sendData}
                                            width="h-[22px] w-[22px]"
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <div
            className={clsx(
                "h-[320px] w-[360px] px-4 flex flex-col items-center",
                className
            )}
        >
            {Object.keys(data["historiques"]).map((id) => {
                const object = data["historiques"][id];
                if (object["type"] === "debug") {
                    return;
                }
                return (
                    <div
                        key={v4()}
                        className="w-full text-left flex justify-between border-b border-oniPrimary-300"
                    >
                        <div className={clsx(rowStyle, rowStyleC1, colW1)}>
                            {object["nom"]}
                        </div>
                        <div className={clsx(rowStyle, rowStyleC2, colW2)}>
                            {object["dateF"] ? (
                                <div className="space-y-1">
                                    <div>
                                        <div className="text-oniPrimary">
                                            {"Effective :"}
                                        </div>
                                        <div>{object["date"]}</div>
                                    </div>
                                    <div>
                                        <div className="text-oniPrimary">
                                            {"Prévu :"}
                                        </div>
                                        <div>{object["dateF"]}</div>
                                    </div>
                                </div>
                            ) : (
                                <div>{object["date"]}</div>
                            )}
                        </div>

                        <div
                            className={clsx(
                                rowStyle,
                                colW3,
                                "text-right truncate",
                                checkSup(object["frais"])
                                    ? "text-oniAlert-danger"
                                    : "text-oniAlert-success"
                            )}
                        >
                            {object["frais"] && (
                                <>
                                    {object["frais"]}
                                    {"€"}
                                </>
                            )}
                        </div>
                        <div className={clsx(rowStyle, rowStyleC2, colW4)}>
                            {object["effectued"] !== undefined && (
                                <>
                                    {object["effectued"] ? (
                                        <RiCheckboxLine size={28} />
                                    ) : (
                                        <RiCheckboxBlankLine size={28} />
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
