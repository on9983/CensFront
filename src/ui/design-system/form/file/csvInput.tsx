import { AutoForm } from "@/ui/components/form/autoForm";
import { Input } from "../input";
import { useState } from "react";
import { Button } from "../../button/button";
import { Cadran } from "../../cadran/cadran";
import { RiUploadCloudLine } from "react-icons/ri";
import { Typography } from "../../typography/typography";
import { parse } from "papaparse";
import { Spinner } from "../../spinner/spinner";

interface Props {
    id: string[] | string;
    sendData?: (dataForm: any) => {};
}

export const CsvInput = ({ id, sendData }: Props) => {
    const [selectedCsv, setSelectedCsv] = useState<File | null>(null);
    const {
        handleSubmit,
        isLoading,
        formProps,
        formProps: {
            setValue,
            register,
            formState: { errors },
        },
    } = AutoForm(id, null, sendData);

    const handleCsvSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]; //Multi files possible
        //console.log("file", file);
        if (file) {
            setSelectedCsv(file);

            parse(file, {
                header: true,
                encoding: "ISO-8859-1",
                complete: (result) => {
                    //console.log("parse", result.data);
                    setValue("textValue", result.data);
                    handleSubmit();
                },
            });

            // const reader = new FileReader();
            // reader.onload = (e) => {
            //     let csvData: string | ArrayBuffer | null = null;
            //     if (e.target) {
            //         csvData = e.target.result;
            //     }
            //     setValue("textValue", csvData);
            //     handleSubmit();
            // };
            // reader.readAsDataURL(file);
        }
    };
    return (
        <Input
            type="file"
            accept="text/csv"
            isLoading={isLoading}
            register={register}
            errors={errors}
            errorMsg="Veuillez renseigner ce champs avant de valider."
            id="imgData"
            onChange={handleCsvSelect}
        >
            <Cadran size="Small2">
                <div className="absolute h-full w-full cursor-pointer text-oniPrimary bg-oniPrimary-150 hover:bg-oniPrimary-600 hover:text-oniBlanc-200  flex items-center justify-center oniAnimated">
                    {isLoading ? (
                        <div className="h-full w-full flex items-center justify-center">
                            <Spinner size="large" />
                        </div>
                    ) : (
                        <div className="flex flex-col items-center space-y-2">
                            <RiUploadCloudLine size={48} />
                            <Typography
                                variant="CapSm"
                                theme=""
                                component="div"
                                className="text-center"
                            >
                                {"Charger un CSV"}
                            </Typography>
                        </div>
                    )}
                </div>
            </Cadran>
        </Input>
    );
};
