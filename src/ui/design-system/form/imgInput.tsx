import { RiImage2Line } from "react-icons/ri";
import { Typography } from "../typography/typography";
import { Input } from "./input";
import { Cadran } from "../cadran/cadran";
import { CadranSizeType } from "@/types/component/images/imagePreview";
import clsx from "clsx";
import { Spinner } from "../spinner/spinner";

interface Props {
    titre?: string;
    className?: string;
    size?: CadranSizeType;
    isLoading: boolean;
    register: any;
    errors: any;
    handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
    imagePreview: string | ArrayBuffer | null;
}

export const ImgInput = ({
    titre,
    className,
    size = "Large1",
    isLoading,
    errors,
    register,
    handleImageSelect,
    imagePreview,
}: Props) => {
    let SizeStyle: string = "",
        IconStyle: string = "";

    switch (size) {
        case "Large1":
            SizeStyle = "text-oniCapLg space-y-1 pb-2";
            IconStyle = "h-[128px] w-[128px]";
            break;
        case "Small2":
            SizeStyle = "text-oniCapSm space-y-1";
            IconStyle = "h-[64px] w-[64px]";
            break;
    }

    return (
        <Input
            type="file"
            accept={"image/*"}
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
                    alt="Image d'exemple."
                    size={size}
                >
                    <div className="absolute h-full w-full flex items-center justify-center oniAnimated cursor-pointer opacity-0 hover:opacity-100 hover:bg-opacity-30 text-oniPrimary hover:bg-oniNoir-200 hover:text-oniBlanc-200">
                        {isLoading ? (
                            <div className="h-full w-full flex items-center justify-center">
                                <Spinner size="large" />
                            </div>
                        ) : (
                            <div
                                className={clsx(
                                    "flex flex-col items-center",
                                    SizeStyle
                                )}
                            >
                                <RiImage2Line
                                    className={clsx(IconStyle, "flex")}
                                />
                                <div className="text-center">
                                    {"Changer la photo"}
                                </div>
                            </div>
                        )}
                    </div>
                </Cadran>
            ) : (
                <Cadran size={size}>
                    <div className="absolute h-full w-full flex items-center justify-center oniAnimated cursor-pointer text-oniPrimary bg-oniPrimary-150 hover:bg-oniPrimary-600 hover:text-oniBlanc-200">
                        {isLoading ? (
                            <div className="h-full w-full flex items-center justify-center">
                                <Spinner size="large" />
                            </div>
                        ) : (
                            <div
                                className={clsx(
                                    "flex flex-col items-center",
                                    SizeStyle
                                )}
                            >
                                <RiImage2Line
                                    className={clsx(IconStyle, "flex")}
                                />
                                <div className="text-center">
                                    {"Charger une photo"}
                                </div>
                            </div>
                        )}
                    </div>
                </Cadran>
            )}
        </Input>
    );
};
