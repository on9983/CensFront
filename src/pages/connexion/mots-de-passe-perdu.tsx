import { GUEST } from "@/lib/session-status";
import { Layout } from "@/ui/components/layout/layout";
import { ForgetPWDContainer } from "@/ui/modules/authentification/forget-password/forget-password.container";
import { useState } from "react";

export default function ForgetPassword() {
    const [haveJeton, setHaveJeton] = useState<boolean>(false);

    return (
        <Layout
            titre="Mdp oublié sur GVR"
            desc="Page de Mdp oublié"
            sessionStatus={GUEST}
        >
            <ForgetPWDContainer />
        </Layout>
    );
}
