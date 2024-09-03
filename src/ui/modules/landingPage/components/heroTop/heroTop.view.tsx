import { Container } from "@/ui/components/container/container";
import { GrandTitre } from "@/ui/components/presentation/grandTitre";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";

export const HeroTopView = () => {
    return (
        <>
            <GrandTitre
                titre="Gérez vos inventaires et leurs coûts !"
                desc="Les véhicules sont une source de dépense qu’il faut optimiser ! Il est important de faire un inventaire des ressources, de planifier les entretiens, et de quantifier les coûts actuels, ainsi que les nouveaux besoins."
            />
            <div className="flex items-center justify-end gap-8">
                <div className="w-fit flex flex-col justify-center space-y-12">
                    <Typography
                        variant="h1"
                        theme="black"
                        component="div"
                        className="text-center"
                    >
                        {"Visibilité. Étude. Action."}
                    </Typography>
                    <div className="flex items-center justify-center gap-7">
                        <Button baseUrl="/connexion">{"Commencer"}</Button>
                        <Button variant="secondary" baseUrl="/connexion">{"En savoir +"}</Button>
                    </div>
                </div>
                <Image
                    width={486}
                    height={364}
                    priority
                    src="/images/PlanDeCout.png"
                    alt="Dessin d'un bloc-note d'études de coûts"
                />
            </div>
        </>
    );
};
