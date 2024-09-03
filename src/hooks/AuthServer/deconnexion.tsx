// EXEMPLE :
// await delay(5000);

import { useAuth } from "@/context/AuthUserContext";
import { NextRouter } from "next/router";
import { toast } from "react-toastify";

export const deconnexion = (router: NextRouter, abientot: boolean = true) => {
    abientot && toast.success("A bientôt");
    window.sessionStorage.removeItem("accessToken");
    //authUser.accessToken = null;
    router.push(router.pathname);
};
