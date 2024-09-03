import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";

export const EnTravaux = () => {
    return (
        <>
            <div className="flex flex-col items-center h-full space-y-12">
                <div className=" flex overflow-hidden flex-col justify-center items-center ">
                    <div className="w-full space-y-3">
                        <Typography
                            variant="display"
                            theme="black"
                            component="div"
                            className=""
                        >
                            {"Ce site web est en travaux !"}
                        </Typography>
                        <Typography
                            variant="CapMd"
                            theme="grayLight"
                            component="div"
                            className="max-w-[700px]"
                        >
                            <p>
                                {
                                    "Votre compte à bien été créé et il est bien fonctionnel, mais..."
                                }
                            </p>
                            <br />
                            <p>
                                {
                                    "Pour des raisons de sécurité, le reste du site est sous-verrous, et vous êtes coincés sur cet affichage."
                                }
                            </p>
                            <p>
                                {
                                    "Vous pourrez cependant suivre l'évolution de ce site web en vous reconnectant plus tard..."
                                }
                            </p>
                        </Typography>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-12">
                    <Image
                        width={200}
                        height={200}
                        priority
                        src="/images/panneau-private-property.png"
                        alt="Panneau de propriété privée."
                    />
                    <Image
                        width={200}
                        height={200}
                        priority
                        src="/images/alcool-au-travail.png"
                        alt="Panneaux de signalement de travaux."
                    />
                </div>
            </div>
        </>
    );
};
