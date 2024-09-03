import { DataServerAddEspace } from "@/api/Ressources/data-espaces";
import { useToggle } from "@/hooks/use-toggle";
import { AddEspaceFormType, FormType } from "@/types/form";
import { Button } from "@/ui/design-system/button/button";
import { Cadran } from "@/ui/design-system/cadran/cadran";
import { Input } from "@/ui/design-system/form/input";
import { Typography } from "@/ui/design-system/typography/typography";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { RiImage2Line } from "react-icons/ri";
import { toast } from "react-toastify";

interface Props {
    handleSetCrudGet: Function;
}

export const MesEspacesAddForm = ({ handleSetCrudGet }: Props) => {
    const { value: isLoading, setValue: setIsLoading } = useToggle();
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<
        string | ArrayBuffer | null
    >(null);

    //console.log("imagePreview", imagePreview);

    const {
        handleSubmit: handleSubmit,
        control: control,
        formState: { errors: errors },
        register: register,
        setError: setError,
        reset: reset,
    } = useForm<AddEspaceFormType>();

    const onSubmit: SubmitHandler<AddEspaceFormType> = async (formData) => {
        setIsLoading(true);
        console.log("formData", [formData, imagePreview]);
        const { nom, desc } = formData;

        if (imagePreview === null) {
            setError("imgData", {
                type: "manual",
                message: "Une image est obligatoire.",
            });
            setIsLoading(false);
            return;
        }

        handleAddEspace(formData);
    };

    const handleAddEspace = async ({ nom, desc }: AddEspaceFormType) => {
        const { error, data } = await DataServerAddEspace(
            nom,
            desc,
            imagePreview
        );
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
    // const { control, onSubmit, errors, isLoading, register, handleSubmit } =
    //     form;

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-left space-y-8"
        >
            <Typography
                variant="CapMd"
                weight="light"
                theme="grayLight"
                component="div"
                className="w-[792px]"
            >
                {
                    "Pour ajouter un nouvel espace, veuillez remplir ces champs et charger une photo."
                }
                <br />
                {
                    "Il peut s'agir d’un établissements ou d’un lien de stockage de vos véhicules."
                }
            </Typography>

            <div className="w-full space-y-12">
                <div className="w-full flex items-end gap-20 px-4">
                    <Input
                        type="file"
                        isLoading={isLoading}
                        register={register}
                        errors={errors}
                        errorMsg="Veuillez renseigner ce champs avant de valider."
                        id="imgData"
                        onChange={handleImageSelect}
                    >
                        {imagePreview ? (
                            <Cadran
                                src={
                                    typeof imagePreview === "string"
                                        ? imagePreview
                                        : String(imagePreview)
                                }
                                alt="L'Institution Marmoutier de Sainte-Radegonde, à Tours."
                                size="Large1"
                            >
                                <div className="absolute opacity-0 hover:opacity-100 hover:bg-opacity-30 h-full w-full cursor-pointer text-oniPrimary hover:bg-oniNoir-200 hover:text-oniBlanc-200  flex items-center justify-center oniAnimated">
                                    <div className="flex flex-col items-center space-y-2">
                                        <RiImage2Line size={128} />
                                        <Typography
                                            variant="CapMd"
                                            theme=""
                                            component="div"
                                            className="text-center"
                                        >
                                            {"Changer la photo"}
                                        </Typography>
                                    </div>
                                </div>
                            </Cadran>
                        ) : (
                            <Cadran size="Large1">
                                <div className="absolute h-full w-full cursor-pointer text-oniPrimary bg-oniPrimary-150 hover:bg-oniPrimary-600 hover:text-oniBlanc-200  flex items-center justify-center oniAnimated">
                                    <div className="flex flex-col items-center space-y-2">
                                        <RiImage2Line size={128} />
                                        <Typography
                                            variant="CapMd"
                                            theme=""
                                            component="div"
                                            className="text-center"
                                        >
                                            {"Charger une photo"}
                                        </Typography>
                                    </div>
                                </div>
                            </Cadran>
                        )}
                    </Input>

                    <div className="w-[340px] h-[214px] flex flex-col justify-between">
                        <div className="space-y-1">
                            <Typography
                                variant="CapLg"
                                theme="primary"
                                component="div"
                                className="text-left"
                            >
                                {"Nom"}
                            </Typography>
                            <Input
                                size="Medium"
                                isLoading={isLoading}
                                type="text"
                                placeholder="Entrez ici le nom de cet espace"
                                register={register}
                                errors={errors}
                                errorMsg="Veuillez renseigner ce champs avant de valider."
                                id="nom"
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
                                {"Description"}
                            </Typography>
                            <Input
                                component="textarea"
                                className="h-[86px] text-oniCapSm"
                                isLoading={isLoading}
                                type="text"
                                placeholder="Entrez ici une bref description de cet espace..."
                                register={register}
                                errors={errors}
                                errorMsg="Veuillez renseigner ce champs avant de valider."
                                id="desc"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="flex gap-4">
                        <Button action={handleSetCrudGet} variant="secondary">
                            {"Annuler"}
                        </Button>
                        <Button type="submit" isLoading={isLoading}>
                            {"Valider"}
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    );
};
