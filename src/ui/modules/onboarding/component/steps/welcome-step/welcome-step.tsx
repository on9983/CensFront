import { StepComponentProps } from "@/types/component/step-list";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { OnboardingTabs } from "../../tabs/onboarding-tabs";
import { OnboardingFooter } from "../../footer/onboarding-footer";

interface Props {
    stepProps: StepComponentProps;
    isLoading: boolean;
}

export const WelcomeStep = ({ stepProps, isLoading }: Props) => {
    return (
        <>
            <div className="h-full w-full px-16 pb-4 flex flex-col items-center space-y-12">
                <div className="h-full w-full flex flex-col justify-between">
                    <div className="space-y-14">
                        <div className="space-y-2">
                            <Typography
                                variant="display"
                                theme="black"
                                component="div"
                                className=""
                            >
                                {"Formulaire d'accès"}
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
                            <p>
                                {
                                    "Votre compte à bien été créé et validé, mais cette application n'est pas encore ouvert à un usage publique."
                                }
                            </p>
                            <br />
                            <p>
                                {
                                    " Si vous faites partie du publique prévu, vous pouvez cliquer sur le bouton \"Suivant\" afin de débuter le formulaire de validation d'accès vers l'application."
                                }
                            </p>
                            <br />
                            <p>
                                {
                                    "Si non, vous pouvez vous reconnecter plus tard, quand l'application vous sera disponible."
                                }
                            </p>
                        </Typography>
                    </div>
                    <OnboardingFooter stepProps={stepProps} />
                </div>
            </div>
        </>
    );
};
