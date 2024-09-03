import { DataGroupBtnLinks } from "@/data/data-app-links";
import { AppLinks } from "@/types/component/app-links";
import { TypeVariantGnrl } from "@/types/component/variantType";
import { Button } from "@/ui/design-system/button/button";
import clsx from "clsx";
import { RiFacebookBoxFill } from "react-icons/ri";
import { v4 } from "uuid";

interface Props {
    className?: string;
    variant?: TypeVariantGnrl;
    dataButton: AppLinks[];
}

export const GroupedButton = ({ className, variant, dataButton }: Props) => {
    const icoList = dataButton.map((buttonLink) => (
        <Button
            key={v4()}
            size="small"
            icon={buttonLink.icon ? { icon: buttonLink.icon } : "vide"}
            variant={variant}
            baseUrl={buttonLink.baseUrl}
            linkType={buttonLink.type}
        />
    ));
    return (
        <div className={clsx("flex items-center", className)}>{icoList}</div>
    );
};
