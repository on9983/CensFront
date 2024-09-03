import { useToggle } from "@/hooks/use-toggle";
import { Fenetre } from "@/ui/design-system/box/fenetre";
import { Button } from "@/ui/design-system/button/button";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";

interface Props {
    handleDeleteCompte: () => void;
    isLoading: boolean;
}

export const MonCompteView = ({ handleDeleteCompte, isLoading }: Props) => {
    const { value: showConfirm, toggle: toggleConfirm } = useToggle();

    return (
        <div className="relative h-full flex flex-col px-16 space-y-10">
            <div className="space-y-2">
                <Typography
                    variant="display"
                    theme="black"
                    component="div"
                    className=""
                >
                    {"Mon compte utilisateur"}
                </Typography>
                <Typography
                    variant="CapMd"
                    weight="light"
                    theme="grayLight"
                    component="div"
                    className="w-[792px]"
                >
                    {"Cette page est dédié au paramètrage de votre compte."}
                </Typography>
            </div>
            <div className="w-full pt-4 flex items-center justify-between">
                <Button
                    size="large"
                    variant="danger"
                    action={toggleConfirm}
                    isLoading={isLoading}
                >
                    {"Supprimer mon compte avec toutes ses informations"}
                </Button>
            </div>
            {showConfirm && (
                <Fenetre
                    titre={"Confirmation"}
                    width="w-[500px]"
                    height="h-min py-10"
                    hauteur="top-1/5"
                    actionFermeture={toggleConfirm}
                >
                    <div className="w-full flex justify-center pb-4">
                        {"Confirmez vous cette action ?"}
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <div className="flex gap-10">
                            <Button
                                variant="danger"
                                action={() => {
                                    toggleConfirm();
                                    handleDeleteCompte();
                                }}
                            >
                                {"Oui"}
                            </Button>
                            <Button action={toggleConfirm}>{"Non"}</Button>
                        </div>
                    </div>
                </Fenetre>
            )}
        </div>
    );
};
