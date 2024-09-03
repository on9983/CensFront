import { REGISTERED } from "@/lib/session-status";
import { Layout } from "@/ui/components/layout/layout";
import { MesEspacesContainer } from "@/ui/modules/mes-espaces/mes-espaces.container";

export default function MesEspaces() {
    return (
        <Layout
            titre="Mes espaces"
            desc="Liste des espaces disponibles sur GVR."
            navBarSizeH="small"
            sessionStatus={REGISTERED}
        >
            <MesEspacesContainer />
        </Layout>
    );
}
