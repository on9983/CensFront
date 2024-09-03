import { Typography } from "@/ui/design-system/typography/typography";
import clsx from "clsx";

interface Props {
    className?: string;
    children: React.ReactNode;
}

export const DevMode = ({ className, children }: Props) => {
    return (
        <div className={clsx("flex itemm-center gap-1", className)}>
            
            <div>{children}</div>
            <Typography className="text-oniDevMode bg-oniDevMode-100 rounded-full px-2 my-[2px] animate-bounce" variant="Small">Dev</Typography>
            
        </div>
    );
};
