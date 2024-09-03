import { Typography } from "@/ui/design-system/typography/typography";
import { NousContacterForm } from "./nous-contacter.form";

export const NousContacterView = () => {
    return (
        <>
            <div className="h-full flex flex-col items-center">
                <div className=" flex overflow-hidden flex-col justify-center items-left space-y-6">
                    <div className="w-full space-y-1">
                        <Typography
                            variant="display"
                            theme="black"
                            component="div"
                            className=""
                        >
                            {"Signaler un problème"}
                        </Typography>
                        <Typography
                            variant="CapMd"
                            theme="grayLight"
                            component="div"
                            className="max-w-[700px]"
                        >
                            <p>
                                {
                                    "Un problème ? Une remarque ? Veuillez remplir ce formulaire ici. Un email contenant ces informations sera envoyé au développeur de ce site web."
                                }
                            </p>
                        </Typography>
                    </div>
                    <NousContacterForm />
                </div>
            </div>
        </>
    );
};
