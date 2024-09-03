import { useState } from "react";
import { OnboardingView } from "./onboarding.view";
import { WelcomeStep } from "./component/steps/welcome-step/welcome-step";
import { StepListInterface } from "@/types/component/step-list";
import { ProfileStep } from "./component/steps/profile-step/profile-step";
import { AuthServerCheckSource, AuthServerSetSource } from "@/api/authentification";
import { useToggle } from "@/hooks/use-toggle";
import { toast } from "react-toastify";
import { ValidationStep } from "./component/steps/validation-step/validation-step";
import { UserSource } from "@/types/user";

export const OnboardingContainer = () => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const { value: isLoading, setValue: setIsLoading } = useToggle();
    const [userSource, setUserSource] = useState<UserSource | null>(null);
    const stepList: StepListInterface[] = [
        {
            id: 1,
            label: "Information",
            component: { step: WelcomeStep },
        },
        {
            id: 2,
            label: "Formulaire",
            component: { step: ProfileStep },
        },
        {
            id: 3,
            label: "Validation",
            component: { step: ValidationStep },
        },
    ];

    const getCurrentStep = () => {
        return stepList.find((el) => el.id === currentStep);
    };

    const next = () => {
        if (currentStep === 1) {
            getUserSource();
            return;
        }

        // if (currentStep === 2) {
        //     return;
        // }

        if (currentStep < stepList.length) {
            setCurrentStep(currentStep + 1);
        }

    };

    const forceNext = () => {
        if (currentStep < stepList.length) {
            setCurrentStep(currentStep + 1);
        }

    };

    const prev = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const isFirstStep = () => {
        if (currentStep === 1) {
            return true;
        }
        return false;
    };

    const isFinalStep = () => {
        if (currentStep === stepList.length) {
            return true;
        }
        return false;
    };

    const stepProps = {
        getCurrentStep,
        next,
        prev,
        isFirstStep,
        isFinalStep,
        stepList,
        forceNext,
    };

    const getUserSource = async () => {
        setIsLoading(true);
        const { error, data } = await AuthServerCheckSource();
        if (error) {
            console.log(error);
            toast.error("Une erreur est survenue.");
            return;
        }
        //console.log(data);
        if (data.message) {
            toast.error(data.message);
        }

        if (data.traited) {
            setIsLoading(false);
            setUserSource(data.source);
            setCurrentStep(currentStep + 2);
            return;
        }

        setCurrentStep(currentStep + 1);
        setIsLoading(false);
    };

    const sendUserSource = async (userSource: UserSource) => {
        setIsLoading(true);
        const { error, data } = await AuthServerSetSource(userSource);
        if (error) {
            console.log(error);
            toast.error("Une erreur est survenue.");
            return;
        }
        //console.log(data);
        if (data.message) {
            toast.error(data.message);
        }

        if (data.traited) {
            setIsLoading(false);
            setCurrentStep(currentStep + 1);
            return;
        }
        setIsLoading(false);
    };

    const changeUserSource = (userSource: UserSource) => {
        setUserSource(userSource);
    };

    return (
        <OnboardingView
            stepProps={stepProps}
            userSource={userSource}
            isLoading={isLoading}
            changeUserSource={changeUserSource}
        />
    );
};
