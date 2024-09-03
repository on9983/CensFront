import { StepComponentProps } from "@/types/component/step-list";
import { GrandTitre } from "@/ui/components/presentation/grandTitre";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { EnTravaux } from "./component/en-travaux";
import { OnboardingTabs } from "./component/tabs/onboarding-tabs";
import { UserSource } from "@/types/user";

interface Props {
    stepProps: StepComponentProps;
    userSource: UserSource | null;
    isLoading: boolean;
    changeUserSource: (userSource: UserSource) => void;
}

export const OnboardingView = ({
    stepProps,
    userSource,
    isLoading,
    changeUserSource,
}: Props) => {
    // return <EnTravaux />;
    if (stepProps.getCurrentStep()?.component) {
        const Component = stepProps.getCurrentStep()?.component.step;
        const stepId = stepProps.getCurrentStep()?.id;

        return (
            <>
                {Component && (
                    <Component
                        stepProps={stepProps}
                        isLoading={isLoading}
                        userSource={userSource}
                        changeUserSource={changeUserSource}
                    />
                )}
            </>
        );
    }

    return <EnTravaux />;
};
