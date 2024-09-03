import { REGISTERED } from "@/lib/session-status";
import { Layout } from "@/ui/components/layout/layout";
import { MesEspacesContainer } from "@/ui/modules/mes-espaces/mes-espaces.container";
import { OnboardingContainer } from "@/ui/modules/onboarding/onboarding.container";

export default function Onboarding() {
    return (
        <Layout
            titre="Onboarding"
            desc="Paramétrage du compte utilisateur."
            navBarSizeH="large"
            showFilArianne={false}
            sessionStatus={REGISTERED}
        >
            <OnboardingContainer />
        </Layout>
    );
}
