import { RiImage2Line } from "react-icons/ri";
import { Typography } from "../typography/typography";
import { Input } from "./input";
import { Cadran } from "../cadran/cadran";
import { AutoForm } from "@/ui/components/form/autoForm";
import { useToggle } from "@/hooks/use-toggle";
import { useEffect, useState } from "react";
import { CadranSizeType, ImagePreview } from "@/types/component/images/imagePreview";
import { ImgInput } from "./imgInput";
import { CarteData } from "@/types/component/carteElement";

interface Props {
    id: string[] | string;
    carte: CarteData;
    sendData?: (dataForm: any) => {};
    size?: CadranSizeType;
}

export const ImgAutoInput = ({ id, carte, sendData, size }: Props) => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<ImagePreview>(
        carte["imgUrl"]
    );

    const {
        handleSubmit,
        isLoading,
        formProps,
        formProps: {
            setValue,
            register,
            formState: { errors },
        },
    } = AutoForm(id, imagePreview, sendData);

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
                setValue("textValue", imgDataUrl);
                handleSubmit();
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <ImgInput
            register={register}
            errors={errors}
            isLoading={isLoading}
            handleImageSelect={handleImageSelect}
            imagePreview={imagePreview}
            size={size}
        />
    );
};
