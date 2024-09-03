import { Cadran } from "./cadran";
import { Typography } from "../typography/typography";
import Link from "next/link";
import { CarteData } from "@/types/component/carteElement";
import { ActiveLink } from "@/ui/components/navigation/active-link";
import { Ri4KLine, RiImage2Line } from "react-icons/ri";
import { ImgAutoInput } from "../form/imgAutoInput";

interface Props {
    data: CarteData;
    action?: Function;
    sendData?: (dataForm: any) => {};
}

export const Carte = ({ data, action, sendData }: Props) => {
    const handleClick = (e: any) => {
        e.stopPropagation();
    };

    const carteElement = (
        <>
            {sendData && data.cid ? (
                <div onClick={handleClick}>
                    <ImgAutoInput
                        id={"imgData"}
                        carte={data}
                        sendData={sendData}
                        size="Small2"
                    />
                </div>
            ) : (
                <>
                    {data.imgUrl ? (
                        <Cadran
                            src={data.imgUrl}
                            alt={data.imgAlt}
                            size="Small2"
                        />
                    ) : (
                        <Cadran size="Small2">
                            <RiImage2Line className="w-full h-full flex" />
                        </Cadran>
                    )}
                </>
            )}
            <div className="max-w-[150px]">
                <Typography variant="CapSm" className="truncate">
                    {data.titre}
                </Typography>
            </div>
        </>
    );

    if (data.baseUrl) {
        return (
            <ActiveLink
                href={data.baseUrl}
                action={action}
                className="oniAnimated w-40 pb-3 pt-2 flex flex-col items-center justify-center gap-[5%]  text-oniPrimary-600 rounded-lg hover:bg-oniPrimary-150 hover:text-oniPrimary-700"
            >
                {carteElement}
            </ActiveLink>
        );
    }

    return carteElement;
};
