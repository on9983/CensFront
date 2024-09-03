// COMPONENT
import { REGISTERED } from "@/lib/session-status";
import { Container } from "@/ui/components/container/container";
import { Layout } from "@/ui/components/layout/layout";
import { Navigation } from "@/ui/components/navigation/navigation";
import { TableauDeLiens } from "@/ui/components/navigation/tableauDeLiens";
import { Seo } from "@/ui/components/seo/seo";
import { Typography } from "@/ui/design-system/typography/typography";
import { EnTravauxEspacesView } from "@/ui/modules/dev/en-travaux-espaces.view";

//DESIGN SYSTEM

//ICO

export default function notFound() {
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
