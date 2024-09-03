import { Button } from "@/ui/design-system/button/button";
import { ListeCarte } from "@/ui/design-system/liste/listeCarte";
import { Typography } from "@/ui/design-system/typography/typography";
import { CarteData } from "@/types/component/carteElement";
import { Cadran } from "@/ui/design-system/cadran/cadran";
import { AddEspaceFormType, FormType } from "@/types/form";
import { useState } from "react";
import { useToggle } from "@/hooks/use-toggle";
import { SubmitHandler, useForm } from "react-hook-form";
import { DataServerAddEspace } from "@/api/Ressources/data-espaces";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { ImgInput } from "@/ui/design-system/form/imgInput";
import { Input } from "@/ui/design-system/form/input";
import { VehiculeAddDataForm } from "@/types/form/vehicule/formVehicule";
import { DataServerAddVehicule } from "@/api/Ressources/data-vehicules";
import { ImagePreview } from "@/types/component/images/imagePreview";

interface Props {
    handleSetCrudGet: () => void;
}

export const MesVehiculesAdd = ({ handleSetCrudGet }: Props) => {
    const { value: isLoading, setValue: setIsLoading } = useToggle();
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<ImagePreview>(null);

    //console.log("imagePreview", imagePreview);

    const {
        handleSubmit: handleSubmit,
        control: control,
        formState: { errors: errors },
        register: register,
        setError: setError,
        reset: reset,
    } = useForm<VehiculeAddDataForm>();

    const onSubmit: SubmitHandler<VehiculeAddDataForm> = async (formData) => {
        setIsLoading(true);
        //console.log("formData", [formData, imagePreview]);
        const { marque, model } = formData;

        if (imagePreview === null) {
            setError("imgData", {
                type: "manual",
                message: "Une image est obligatoire.",
            });
            setIsLoading(false);
            return;
        }

        const dataForm = { ...formData, imgData: imagePreview };

        ApiAddVehicule(dataForm);
    };

    const ApiAddVehicule = async (dataForm: VehiculeAddDataForm) => {
        const { error, data } = await DataServerAddVehicule(dataForm);
        setIsLoading(false);
        if (error) {
            console.log(error);
            toast.error("Une erreur est survenue.");
            return;
        }
        console.log(data);
        if (data.traited) {
            toast.success(data.message);
            handleSetCrudGet();
        } else {
            toast.error(data.message);
        }
    };

    const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]; //Multi files possible
        //console.log("file", file);
        if (file) {
            setSelectedImage(file);

            const reader = new FileReader();
            reader.onload = (e) => {
                let imgDataUrl: string | ArrayBuffer | null = null;
                if (e.target) {
                    imgDataUrl = e.target.result;
                }
                setImagePreview(imgDataUrl);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className=" flex flex-col px-16 space-y-10">
            <div className="space-y-2">
                <Typography
                    variant="display"
                    theme="black"
                    component="div"
                    className=""
                >
                    {"Ajouter un nouveau véhicule"}
                </Typography>
                <Typography
                    variant="CapMd"
                    weight="light"
                    theme="grayLight"
                    component="div"
                    className="w-[792px]"
                >
                    {
                        "Pour ajouter un nouveau véhicule, veuillez remplir ces champs et charger une photo."
                    }
                </Typography>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-left"
            >
                <div className="w-full space-y-12">
                    <div className="w-full flex items-end gap-20 px-4">
                        <ImgInput
                            register={register}
                            errors={errors}
                            isLoading={isLoading}
                            handleImageSelect={handleImageSelect}
                            imagePreview={imagePreview}
                        />

                        <div className="w-[340px] h-[214px] py-8 flex flex-col justify-between">
                            <div className="space-y-1">
                                <Typography
                                    variant="CapLg"
                                    theme="primary"
                                    component="div"
                                    className="text-left"
                                >
                                    {"Modèle"}
                                </Typography>
                                <Input
                                    size="Medium"
                                    isLoading={isLoading}
                                    type="text"
                                    placeholder="Entrez ici le nom de cet espace"
                                    register={register}
                                    errors={errors}
                                    errorMsg="Veuillez renseigner ce champs avant de valider."
                                    id="model"
                                    required
                                    isAutoCompleted
                                />
                            </div>
                            <div className="space-y-1">
                                <Typography
                                    variant="CapLg"
                                    theme="primary"
                                    component="div"
                                    className="text-left"
                                >
                                    {"Marque"}
                                </Typography>
                                <Input
                                    size="Medium"
                                    isLoading={isLoading}
                                    type="text"
                                    placeholder="Entrez ici le nom de cet espace"
                                    register={register}
                                    errors={errors}
                                    errorMsg="Veuillez renseigner ce champs avant de valider."
                                    id="marque"
                                    required
                                    isAutoCompleted
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="flex gap-4">
                            <Button
                                action={handleSetCrudGet}
                                variant="secondary"
                            >
                                {"Annuler"}
                            </Button>
                            <Button type="submit" isLoading={isLoading}>
                                {"Valider"}
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
