import { FormType } from "@/types/form";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/form/input";
import { Typography } from "@/ui/design-system/typography/typography";

interface Props {
    form: FormType;
    handleHaveJeton: Function;
}

export const ValidationEmailForm = ({ form, handleHaveJeton }: Props) => {
    const { control, onSubmit, errors, isLoading, register, handleSubmit } =
        form;

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-left"
        >
            <div className="w-[340px] pt-4 space-y-4">
                <Button isLoading={isLoading} type="submit" fullWidth>
                    {"Envoyer le jeton"}
                </Button>
                <div className="flex justify-end">
                    <Button action={handleHaveJeton} size="small" variant="secondary">
                        {"J'ai reçu le jeton"}
                    </Button>
                </div>
            </div>
        </form>
    );
};
