import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { useRouter } from "next/router";

export const EnTravauxEspacesView = () => {
    const router = useRouter();
    const handleRetour = () => {router.back()};
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
                            {"Cette page web est en travaux !"}
                        </Typography>
                        <Typography
                            variant="CapMd"
                            theme="grayLight"
                            component="div"
                            className="max-w-[700px]"
                        >
                            <p>
                                {
                                    "Pour des raisons de sécurité, le reste du site est sous-verrous."
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
                <Button action={handleRetour}>{"Faire demi-tour"}</Button>
            </div>
        </>
    );
};
