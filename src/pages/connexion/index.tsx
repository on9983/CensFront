import { GUEST } from "@/lib/session-status";
import { Layout } from "@/ui/components/layout/layout";
import { LoginContainer } from "@/ui/modules/authentification/login/login.container";

export default function Connexion() {
    return (
        <Layout
            titre="Connexion sur GVR"
            desc="Page de connexion"
            navBarSizeH="large"
            showFilArianne={false}
            sessionStatus={GUEST}
        >
            <LoginContainer />
        </Layout>
    );
}
