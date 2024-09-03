import { GUEST } from "@/lib/session-status";
import { Layout } from "@/ui/components/layout/layout";
import { RegisterContainer } from "@/ui/modules/authentification/register/register.container";

export default function Register() {
    return (
        <Layout
            titre="Inscription sur GVR"
            desc="Page d'inscription"
            sessionStatus={GUEST}
        >
            <RegisterContainer />
        </Layout>
    );
}
