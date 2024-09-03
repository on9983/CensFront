import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import { OnboardingTabs } from "../../tabs/onboarding-tabs";
import { StepComponentProps } from "@/types/component/step-list";
import { UserSource } from "@/types/user";
import { useToggle } from "@/hooks/use-toggle";
import { AuthServerValideSource } from "@/api/authentification";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

interface Props {
    stepProps: StepComponentProps;
    isLoading: boolean;
    userSource: UserSource | null;
}

export const ValidationStep = ({ stepProps, userSource }: Props) => {
    const router = useRouter();
    const { value: isLoading, setValue: setIsLoading } = useToggle();

    const handleTerminer = async () => {
        setIsLoading(true);
        const { error, data } = await AuthServerValideSource();
        if (error) {
            console.log(error);
            toast.error("Une erreur est survenue.");
            return;
        }
        //console.log(data);

        if (data.traited) {
            setIsLoading(false);
            toast.success(data.message);
            router.push("/connexion");
            return;
        }

        if (data.message) {
            toast.error(data.message);
        }

        setIsLoading(false);
    };
    const terminee = () => {
        handleTerminer();
    };

    stepProps.next = terminee;

    return (
        <>
            <div className="h-full w-full px-16 pb-4 flex flex-col items-center space-y-12">
                <div className="h-full w-full flex flex-col justify-between">
                    <div className="space-y-16">
                        <div className="space-y-2">
                            <Typography
                                variant="display"
                                theme="black"
                                component="div"
                                truncate
                            >
                                {userSource?.nom}
                            </Typography>
                            <OnboardingTabs
                                stepProps={stepProps}
                                tabs={stepProps.stepList}
                            />
                        </div>
                        <Typography
                            variant="CapMd"
                            theme="grayLight"
                            component="div"
                            className="max-w-[675px] px-2"
                        >
                            <p>{userSource?.information}</p>
                            <br />
                            <p>
                                {
                                    "Vous pouvez cliquer sur le bouton \"Terminer\" afin de valider le formulaire d'accès, et pouvoir utiliser l'application librement."
                                }
                            </p>
                        </Typography>
                    </div>
                    <div className="flex justify-end pr-16 gap-4">
                        <Button action={stepProps.next} isLoading={isLoading}>
                            Terminer
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
