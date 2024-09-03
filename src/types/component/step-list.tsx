import { Dispatch } from "react";
import { UserSource } from "../user";

export interface StepComponentProps {
    next: () => void;
    prev: () => void;
    isFirstStep: () => boolean;
    isFinalStep: () => boolean;
    stepList: StepListInterface[];
    getCurrentStep: () => StepListInterface | undefined;
    forceNext: () => void;
}

export interface StepComponentAllProps {
    stepProps: StepComponentProps;
    isLoading: boolean;
    userSource: UserSource | null;
    changeUserSource: (userSource: UserSource) => void;
}

export interface StepListInterface {
    id: number;
    label: string;
    component: {
        step: React.ComponentType<StepComponentAllProps>;
    };
}
