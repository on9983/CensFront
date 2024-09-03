import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "../container/container";
import { ActiveLink } from "./active-link";
import { TableauDeLiens } from "./tableauDeLiens";
import { Logo } from "@/ui/design-system/logo/logo";
import { GroupedButton } from "./groupDeButton";
import { DataGroupBtnLinks } from "@/data/data-app-links";
import Image from "next/image";
import { URL_NOUS_CONTACTER } from "@/lib/pages/pages-possible";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-oniPrimary border-t-2 border-oniPrimary-300 h-[64px] flex-auto relative hover:oveflow-clip ">
            {/* <div className="bg-oniPrimary h-14 hover:h-full flex-auto overflow-clip transition-all ease-in-out duration-700"> */}
            <div className="absolute inset-0 bg-oniPrimary h-fit hover:top-[-300px] transition-all ease-in-out duration-700 ">
                <Container className="max-w-7xl">
                    <Typography
                        variant="CapSm"
                        className="px-8 h-14 flex justify-between"
                    >
                        <div className="flex items-center gap-11">
                            <ActiveLink variant="secondary">
                                {"À propos"}
                            </ActiveLink>
                            <ActiveLink variant="secondary">{"CGU"}</ActiveLink>
                            <ActiveLink variant="secondary">
                                {"Confidentialité"}
                            </ActiveLink>
                        </div>
                        <div className="flex items-center gap-11">
                            <ActiveLink href={URL_NOUS_CONTACTER} variant="secondary">
                                {"Un problème ?"}
                            </ActiveLink>
                            <ActiveLink href={URL_NOUS_CONTACTER} variant="secondary">
                                {"Nous contacter"}
                            </ActiveLink>
                        </div>
                    </Typography>
                    <div className="h-[42px] border-y border-oniPrimary-300 flex items-center justify-between pl-4">
                        <Typography
                            variant="CapSm"
                            className="text-oniPrimary-300"
                            component="div"
                        >
                            {"Copyright " +
                                currentYear +
                                " | Tout droit réservé à M. Ourdouillé Nicolas, l'unique créateur de cette application web."}
                        </Typography>

                        <GroupedButton
                            className="pr-8"
                            dataButton={DataGroupBtnLinks}
                        />
                    </div>
                    <div className="flex items-center justify-between pt-6 gap-4 pl-4">
                        <ActiveLink
                            variant="secondary"
                            className="flex-1 flex flex-col items-center justify-center py-4"
                        >
                            <div className="w-[150px] h-[150px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 122.88 111.34"
                                >
                                    <title>video</title>
                                    <path
                                        fill="currentColor"
                                        d="M23.59,0h75.7a23.68,23.68,0,0,1,23.59,23.59V87.75A23.56,23.56,0,0,1,116,104.41l-.22.2a23.53,23.53,0,0,1-16.44,6.73H23.59a23.53,23.53,0,0,1-16.66-6.93l-.2-.22A23.46,23.46,0,0,1,0,87.75V23.59A23.66,23.66,0,0,1,23.59,0ZM54,47.73,79.25,65.36a3.79,3.79,0,0,1,.14,6.3L54.22,89.05a3.75,3.75,0,0,1-2.4.87A3.79,3.79,0,0,1,48,86.13V50.82h0A3.77,3.77,0,0,1,54,47.73ZM7.35,26.47h14L30.41,7.35H23.59A16.29,16.29,0,0,0,7.35,23.59v2.88ZM37.05,7.35,28,26.47H53.36L62.43,7.38v0Zm32,0L59.92,26.47h24.7L93.7,7.35Zm31.32,0L91.26,26.47h24.27V23.59a16.32,16.32,0,0,0-15.2-16.21Zm15.2,26.68H7.35V87.75A16.21,16.21,0,0,0,12,99.05l.17.16A16.19,16.19,0,0,0,23.59,104h75.7a16.21,16.21,0,0,0,11.3-4.6l.16-.18a16.17,16.17,0,0,0,4.78-11.46V34.06Z"
                                    />
                                </svg>
                            </div>
                            <Typography variant="CapLg">
                                {"Voir le tutorial d'utilisation"}
                            </Typography>
                        </ActiveLink>
                        <div className="flex-1 flex items-center justify-end">
                            <TableauDeLiens variant="secondary" className="" />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};
