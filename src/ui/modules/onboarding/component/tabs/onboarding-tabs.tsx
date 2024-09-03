import {
    StepComponentProps,
    StepListInterface,
} from "@/types/component/step-list";
import clsx from "clsx";
import { v4 } from "uuid";

interface Props {
    tabs: StepListInterface[];
    isLoading?: boolean;
    stepProps: StepComponentProps;
}

export const OnboardingTabs = ({ tabs, isLoading, stepProps }: Props) => {
    const { isFirstStep, isFinalStep, prev, next, getCurrentStep } = stepProps;

    return (
        <div className="relative inline-block ml-6">
            <div className="flex items-center space-x-5 ">
                {tabs &&
                    tabs.map((tab) => (
                        <div
                            key={v4()}
                            className={clsx(
                                getCurrentStep()?.id === tab.id
                                    ? "border-oniPrimary text-oniPrimary"
                                    : "border-oniNoir-900 text-oniNoir-800",
                                "border-b z-10 text-oniCapSm"
                            )}
                        >
                            {tab.label}
                        </div>
                    ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-oniNoir-900"/>
        </div>
    );
};
