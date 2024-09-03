
import { Typography } from "@/ui/design-system/typography/typography";
import { ActiveLink } from "./active-link";
import { DataFooterLinks } from "../../../data/data-app-links";
import { v4 } from "uuid";
import { TypeDeLiens } from "@/lib/typeDeLien";
import clsx from "clsx";
import { FooterLinks } from "@/types/component/app-links";
import { TypeVariantGnrl } from "@/types/component/variantType";

interface Props {
    variant?: TypeVariantGnrl;
    className?: string;
}

export const TableauDeLiens = ({ variant = "primary", className }: Props) => {
    interface footerLinkProps {
        data: FooterLinks;
    }
    const FooterLink = ({ data }: footerLinkProps) => {
        const linkList = data.links.map((link) => (
            <div key={v4()}>
                {link.type === TypeDeLiens.INTERNAL ? (
                    <ActiveLink variant={variant} href={link.baseUrl}>
                        {link.label}
                    </ActiveLink>
                ) : (
                    <ActiveLink variant={variant} externe href={link.baseUrl}>
                        {link.label}
                    </ActiveLink>
                )}
            </div>
        ));

        return (
            <div className="text-oniBlack-200 w-40 h-[210px] space-y-4">
                <Typography
                    variant="CapLg"
                    className={clsx(
                        variant == "secondary"
                            ? "text-oniBlanc-300"
                            : "text-oniPrimary-800"
                    )}
                >
                    {data.titre}
                </Typography>
                <Typography weight="light" className="space-y-2">
                    {linkList}
                </Typography>
            </div>
        );
    };

    const tableaux = DataFooterLinks.map((colLinks) => (
        <FooterLink key={v4()} data={colLinks} />
    ));

    return (
        <div className={clsx("flex items-center gap-7", className)}>
            {tableaux}
        </div>
    );
};
