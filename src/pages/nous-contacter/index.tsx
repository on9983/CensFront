// COMPONENT
import { REGISTERED } from "@/lib/session-status";
import { Layout } from "@/ui/components/layout/layout";
import { NousContacterView } from "@/ui/modules/dev/nous-contacter.view";

//DESIGN SYSTEM

//ICO

export default function NousContacter() {
    return (
        <Layout
            titre="Nous contacter"
            desc="Page de signalement de problèmes aux développeurs."
            className="space-y-4"
            sessionStatus={REGISTERED}
        >
            <NousContacterView />
        </Layout>
    );
}
