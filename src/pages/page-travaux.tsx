// COMPONENT
import { REGISTERED } from "@/lib/session-status";
import { Container } from "@/ui/components/container/container";
import { Layout } from "@/ui/components/layout/layout";
import { Navigation } from "@/ui/components/navigation/navigation";
import { TableauDeLiens } from "@/ui/components/navigation/tableauDeLiens";
import { Seo } from "@/ui/components/seo/seo";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import { EnTravauxEspacesView } from "@/ui/modules/dev/en-travaux-espaces.view";
import { EnTravaux } from "@/ui/modules/onboarding/component/en-travaux";

//DESIGN SYSTEM

//ICO

export default function PageTravaux() {
    return (
        <Layout
            titre="En travaux"
            desc="Page de signalisation de pages en travaux."
            className="space-y-4"
            sessionStatus={REGISTERED}
        >
            <EnTravauxEspacesView />
        </Layout>
    );
}
