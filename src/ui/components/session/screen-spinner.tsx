import { Spinner } from "@/ui/design-system/spinner/spinner";

export const ScreenSpinner = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <Spinner size="page" />
        </div>
    );
};
