import { GUEST } from "@/lib/session-status";
import { Layout } from "@/ui/components/layout/layout";
import { HeroTopView } from "@/ui/modules/landingPage/components/heroTop/heroTop.view";

export default function Home() {
    return (
        <Layout
            titre="Gestionnaire de véhicule et de ressources"
            desc="Page principale du site"
            className="space-y-4 "
            navBarSizeH="large"
            showFilArianne={false}
            sessionStatus={GUEST}
        >
            <HeroTopView />
        </Layout>
    );
}
