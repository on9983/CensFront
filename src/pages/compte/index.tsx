import { GUEST, REGISTERED } from "@/lib/session-status";
import { Layout } from "@/ui/components/layout/layout";
import { MonCompteContainer } from "@/ui/modules/compte/monCompte.container";

export default function MonCompte() {
    return (
        <Layout
            titre="Mes paramètres"
            desc="Page de paramétrage du compte utilisateur"
            navBarSizeH="large"
            showFilArianne={true}
            sessionStatus={REGISTERED}
        >
            <MonCompteContainer />
        </Layout>
    );
}
