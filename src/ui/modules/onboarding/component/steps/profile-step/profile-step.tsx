import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import { OnboardingTabs } from "../../tabs/onboarding-tabs";
import { StepComponentProps } from "@/types/component/step-list";
import { UserSource } from "@/types/user";
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { ProfileStepForm } from "./profile-step.form";
import { SubmitHandler, useForm } from "react-hook-form";
import { SourceFormType } from "@/types/form";
import { useToggle } from "@/hooks/use-toggle";
import { AuthServerSetSource } from "@/api/authentification";
import { toast } from "react-toastify";
import { useState } from "react";

interface Props {
    stepProps: StepComponentProps;
    isLoading: boolean;
    userSource: UserSource | null;
    changeUserSource: (userSource: UserSource) => void;
}

export const ProfileStep = ({ stepProps, changeUserSource }: Props) => {
    const { value: isLoading, setValue: setIsLoading } = useToggle();

    const formProps = useForm<SourceFormType>();

    const onSubmit: SubmitHandler<SourceFormType> = async (formData) => {
        setIsLoading(true);
        const { error, data } = await AuthServerSetSource({
            nom: formData.nom,
        });
        if (error) {
            console.log(error);
            toast.error("Une erreur est survenue.");
            return;
        }

        if (data.traited) {
            if (data.message) {
                toast.success(data.message);
            }
            changeUserSource(data.source);
            stepProps.forceNext();
            setIsLoading(false);
            return;
        }
        if (data.message) {
            toast.error(data.message);
        }
        setIsLoading(false);
        // stepProps.next();
    };

    stepProps.next = formProps.handleSubmit(onSubmit);

    return (
        <>
            <div className="h-full w-full px-16 pb-4 flex flex-col items-center space-y-12">
                <div className="h-full w-full flex flex-col justify-between">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <Typography
                                variant="display"
                                theme="black"
                                component="div"
                                truncate
                            >
                                {"Renseignez les informations"}
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
                                    "Veuillez renseigner votre provenance prévu dans le champ suivant :"
                                }
                            </p>
                        </Typography>
                        <div className="pl-2">
                            <ProfileStepForm
                                form={{ formProps, onSubmit, isLoading }}
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
                                    "L'utilisation de l'application vous sera accordé uniquement si cette information est conforme au droit d'accès vers l'application."
                                }
                            </p>
                            <p>
                                {
                                    "Dans le cas contraire, l'accès vous sera refusé."
                                }
                            </p>
                            <br />
                            <p>
                                {
                                    'Si l\'information vous semble correcte, veuillez cliquer sur "Suivant".'
                                }
                            </p>
                        </Typography>
                    </div>
                    <OnboardingFooter
                        stepProps={stepProps}
                        isLoading={isLoading}
                    />
                </div>
            </div>
        </>
    );
};
