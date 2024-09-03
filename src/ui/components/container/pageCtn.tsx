import { ReactNode } from "react";
import { Container } from "./container";
import clsx from "clsx";

interface Props {
    children: ReactNode;
    className?: string;
}

export const PageCtn = ({ children, className }: Props) => {
    return (
        <Container className="h-full flex justify-center">
            <div className={className}>{children}</div>
        </Container>
    );
};
