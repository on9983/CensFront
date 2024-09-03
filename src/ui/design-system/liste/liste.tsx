import { RiCheckboxCircleLine } from "react-icons/ri";
import { Typography } from "../typography/typography";
import clsx from "clsx";
import { IconProps } from "@/types/iconProps";
import { v4 } from "uuid";

interface Props {
    data: string[];
    icon?: IconProps;
    className?: string;
    icoSize?: number;
    iconStyle?: string;
    component?: "h1" | "h2" | "h3" | "div" | "p" | "span";
}

export const Liste = ({
    data,
    icon = { icon: RiCheckboxCircleLine },
    className,
    icoSize = 24,
    iconStyle = "mt-0.5 text-oniSuccess",
    component: Component = "div",
}: Props) => {
    const ListeElement = data.map((element) => (
        <div key={v4()} className={clsx("flex items-start gap-2", className)}>
            <icon.icon size={icoSize} className={clsx(iconStyle)} />
            <Component>{element}</Component>
        </div>
    ));

    return (<>{ListeElement}</>);
};
