import { Typography } from "@/ui/design-system/typography/typography";

interface Props {
    titre: string;
    desc: string;
}

export const GrandTitre = ({ titre, desc }: Props) => {
    return (
        <div className=" flex overflow-hidden flex-col justify-center items-center ">
            <div className="w-[800px] space-y-3">
                <Typography
                    variant="display"
                    theme="black"
                    component="div"
                    className=""
                >
                    {titre}
                </Typography>
                <Typography
                    variant="CapMd"
                    theme="grayLight"
                    component="div"
                    className="max-w-[700px]"
                >
                    {desc}
                </Typography>
            </div>
        </div>
    );
};
