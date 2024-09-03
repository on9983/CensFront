import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Connexion from "@/pages/connexion";
import Register from "@/pages/connexion/inscription";
import ForgetPassword from "@/pages/connexion/mots-de-passe-perdu";
import MonCompte from "@/pages/compte";
import Validation from "@/pages/validation";
import PageTravaux from "@/pages/page-travaux";
import NousContacter from "@/pages/nous-contacter";
import Onboarding from "@/pages/onboarding";
import Home from "@/pages";
import MesEspaces from "@/pages/mes-espaces";
import MesVehicules from "@/pages/mes-espaces/mes-vehicules";
import MonVehicule from "@/pages/mes-espaces/mes-vehicules/mon-vehicule";

test("Rendu des pages", async () => {
    render(<Connexion />);
    render(<Register />);
    render(<ForgetPassword />);
    render(<MonCompte />);
    render(<Validation />);
    render(<PageTravaux />);
    render(<NousContacter />);
    render(<Onboarding />);
    render(<Home />);
    render(<MesEspaces />);
    render(<MesVehicules />);
    render(<MonVehicule />);

    // await new Promise((r) => setTimeout(r, 2000));
    // const input = screen.getByLabelText("Identifiant");
    // const inputEmail = screen.getByLabelText("email");
    // //expect(screen.getByDisplayValue('test')).toBeInTheDocument();
});