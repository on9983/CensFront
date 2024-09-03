import { Logo } from "@/ui/design-system/logo/logo";
import { Container } from "../container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";

import { DevMode } from "../dev/devMode";
import { ActiveLink } from "./active-link";
import Link from "next/link";
import { FilArianne } from "./filArianne/filArianne";
import { useAuth } from "@/context/AuthUserContext";
import { toast } from "react-toastify";
import { NextRouter, useRouter } from "next/router";
import { TypeNavBarSize } from "@/types/component/variantType";
import { deconnexion } from "@/hooks/AuthServer/deconnexion";
import { TypeLogoSize } from "@/types/component/images/logo-types";
import { useToggle } from "@/hooks/use-toggle";
import { URL_MOM_COMPTE } from "@/lib/pages/pages-possible";

interface Props {
    showFilArianne?: boolean;
    showLinkBar?: boolean;
    sizeH?: TypeNavBarSize;
}

export const Navigation = ({
    showFilArianne = true,
    showLinkBar = false,
    sizeH = "small",
}: Props) => {
    const router = useRouter();
    const { authUser } = useAuth();
    const {
        value: showParam,
        setValue: setShowParam,
        toggle: toggleParam,
    } = useToggle();
    //console.log("authUser", authUser);

    const handleLogOut = () => deconnexion(router);

    let logoStyle: TypeLogoSize = "small";

    if (window.innerHeight < 800) {
        sizeH = "mini";
    }

    switch (sizeH) {
        case "large":
            logoStyle = "medium";
            break;
        case "mini":
            logoStyle = "very-small";
            break;
    }

    return (
        <Container>
            <div className="relative flex flex-col pt-1.5">
                {/* <div className="flex item-center justify-between gap-12 h-16 hover:h-32 flex-auto overflow-hiden transition-all ease-in-out duration-700"> */}
                <div className="flex item-center justify-between gap-12">
                    <Link
                        href="/"
                        className="flex items-center gap-12 text-oniPrimary-800 pl-4"
                    >
                        <Logo size={logoStyle} />

                        <div className="flex flex-col pb-2">
                            <Typography variant="h3">
                                {"Gestionaire de véhicules et de ressources"}
                            </Typography>
                            <Typography variant="Texte" theme="gray">
                                {
                                    "Quantification et qualification des ressources automobiles"
                                }
                            </Typography>
                        </div>
                    </Link>

                    <div className="flex items-center justify-center pr-4 gap-5">
                        <Button
                            icon={"test"}
                            variant="secondary"
                            size="small"
                            action={toggleParam}
                        />
                        {!authUser ? (
                            <Button baseUrl="/connexion" size="small">
                                Se connecter
                            </Button>
                        ) : (
                            <Button action={handleLogOut} size="small">
                                Déconnexion
                            </Button>
                        )}
                    </div>
                </div>
                {showLinkBar && (
                    <div className="h-[40px] border-b border-t border-oniPrimary-150 flex items-center justify-center">
                        <Typography
                            variant="CapMd"
                            weight="light"
                            component="div"
                            className="flex items-center gap-10 pl-[72px]"
                        >
                            <ActiveLink href="/inventaire">
                                {"Mes inventaires"}
                            </ActiveLink>

                            <ActiveLink href="/planification">
                                {"Planifications"}
                            </ActiveLink>

                            <ActiveLink href="/etude">
                                {"Etude de coûts"}
                            </ActiveLink>

                            <DevMode>
                                <ActiveLink href="/design-system">
                                    {"Design-system"}
                                </ActiveLink>
                            </DevMode>
                        </Typography>
                    </div>
                )}
                {showFilArianne && <FilArianne />}
                {showParam && (
                    <div className="absolute w-[200px] h-[200px] right-0 top-[100px] z-40 rounded-lg">
                        <Button baseUrl={URL_MOM_COMPTE}>{"Paramètres du compte"}</Button>
                    </div>
                )}
            </div>
        </Container>
    );
};
