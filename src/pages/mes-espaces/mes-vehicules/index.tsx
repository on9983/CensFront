import { EspaceProvider } from "@/context/EspaceContext";
import { REGISTERED } from "@/lib/session-status";
import { Layout } from "@/ui/components/layout/layout";
import { MesVehiculesContainer } from "@/ui/modules/mes-vehicules/mes-vehicules.container";

export default function MesVehicules() {
    const espace = "";
    return (
        <Layout
            titre="Mes vehicules"
            desc="Liste des vehicules disponibles dans cet espace."
            navBarSizeH="small"
            sessionStatus={REGISTERED}
        >
            <MesVehiculesContainer />
        </Layout>
    );
}
