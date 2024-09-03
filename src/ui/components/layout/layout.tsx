import { ReactNode } from "react";
import { PageCtn } from "../container/pageCtn";
import { Footer } from "../navigation/footer";
import { Navigation } from "../navigation/navigation";
import { Seo } from "../seo/seo";
import clsx from "clsx";
import { CtnGauche } from "../container/ctn-gauche";
import { CtnDroit } from "../container/ctn-droit";
import { Session } from "../session/session";
import { SessionStatusType } from "@/types/sessionType";
import { TypeNavBarSize } from "@/types/component/variantType";

interface Props {
    children?: ReactNode;
    className?: string;
    titre: string;
    desc: string;
    navBarSizeH?: TypeNavBarSize;
    showFilArianne?: boolean;
    sessionStatus?: SessionStatusType;
}

export const Layout = ({
    children,
    className,
    titre,
    desc,
    navBarSizeH,
    showFilArianne = true,
    sessionStatus,
}: Props) => {
    console.log('layout charged');
    return (
        <Session sessionStatus={sessionStatus}>
            <Seo title={titre} description={desc} />

            <div className="h-screen flex flex-col justify-between overflow-clip ">
                <div className="h-screen flex justify-center overflow-clip">
                    <div className="invisible 2xl:visible flex-1 h-full flex flex-col">
                        <div className="h-[116px]"></div>
                        <CtnGauche className="h-full min-h-[70vh] w-full flex items-center justify-center" />
                    </div>

                    <div className="flex-2 flex flex-col justify-between overflow-clip">
                        <Navigation
                            sizeH={navBarSizeH}
                            showFilArianne={showFilArianne}
                        />
                        <PageCtn
                            className={clsx(
                                "h-[70vh] w-full flex items-center justify-center ",
                                className
                            )}
                        >
                            <div className="w-[926px] h-[532px] overflow-auto">
                                {children}
                            </div>
                        </PageCtn>
                    </div>
                    <div className="invisible 2xl:visible flex-1 h-full flex flex-col">
                        <div className="h-[116px] "></div>
                        <CtnDroit className="h-full min-h-[70vh] w-full flex items-center justify-center" />
                    </div>
                </div>
                <Footer />
            </div>
        </Session>
    );
};
