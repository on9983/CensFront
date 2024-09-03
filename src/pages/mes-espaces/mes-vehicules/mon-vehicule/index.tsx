import { REGISTERED } from "@/lib/session-status";
import { Layout } from "@/ui/components/layout/layout";
import { MesVehiculesContainer } from "@/ui/modules/mes-vehicules/mes-vehicules.container";
import { MonVehiculeContainer } from "@/ui/modules/mon-vehicule/mon-vehicule.container";

export default function MonVehicule() {
    return (
        <Layout
            titre="Mon vehicule"
            desc="Page d'informations sur un véhicule déterminé."
            navBarSizeH="small"
            sessionStatus={REGISTERED}
        >
            <MonVehiculeContainer />
        </Layout>
    );
}
