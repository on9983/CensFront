import { StepComponentProps } from "@/types/component/step-list";
import { Button } from "@/ui/design-system/button/button";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

interface Props {
    isLoading?: boolean;
    stepProps: StepComponentProps;
}

export const OnboardingFooter = ({ isLoading, stepProps }: Props) => {
    const router = useRouter();
    let actionButtonTitle: string = "Suivant";
    const { isFirstStep, isFinalStep, prev, next } = stepProps;

    if (isFinalStep()) {
        actionButtonTitle = "Terminer";
    }
    const handleLogOut = () => {
        toast.success("A bientôt");
        window.sessionStorage.removeItem("accessToken");
        router.push("/connexion");
    };

    return (
        <div className="flex justify-end pr-16 gap-4">
            {!isFinalStep() && (
                <Button
                    action={handleLogOut}
                    variant="secondary"
                    disabled={isLoading}
                >
                    Me déconnecter
                </Button>
            )}
            {!isFirstStep() && (
                <Button action={prev} variant="secondary" disabled={isLoading}>
                    {"Précédant"}
                </Button>
            )}
            {next && (
                <Button action={next} isLoading={isLoading}>
                    {actionButtonTitle}
                </Button>
            )}
        </div>
    );
};
