import { REGISTERED } from "@/lib/session-status";
import { Layout } from "@/ui/components/layout/layout";
import { ValidationEmailContainer } from "@/ui/modules/authentification/validation-email/validation-email.container";
import { MesEspacesContainer } from "@/ui/modules/mes-espaces/mes-espaces.container";
import { OnboardingContainer } from "@/ui/modules/onboarding/onboarding.container";

export default function Validation() {
    return (
        <Layout
            titre="Validation"
            desc="Page de validation du compte utilisateur."
            navBarSizeH="large"
            showFilArianne={false}
            sessionStatus={REGISTERED}
        >
            <ValidationEmailContainer />
        </Layout>
    );
}
