// import { serverSide } from "@/pages/_app";

import { useAuth } from "@/context/AuthUserContext";
import { UserSource } from "@/types/user";
import { DataSender } from "./Components/dataSender";
import { checkDocker } from "./Components/checkDocker";

export const AuthServerCreateUser = async (email: string, password: string) => {
    return await DataSender(checkDocker() + "/register", {
        username: email,
        password: password,
    });
};

export const AuthServerSendVerif = async (email: string) => {
    return await DataSender(checkDocker() + "/register/sendverif", {
        username: email,
    });
};

export const AuthServerJetonVerif = async (email: string, jeton: string) => {
    return await DataSender(checkDocker() + "/register/verif", {
        jeton: jeton,
        username: email,
    });
};

export const AuthServerLogin = async (email: string, password: string) => {
    return await DataSender(checkDocker() + "/login", {
        username: email,
        password: password,
    });
};

export const AuthServerLogout = async () => {
    return await DataSender(checkDocker() + "/logout", {});
};

export const AuthServerCheckState = async () => {
    const accessToken = window.sessionStorage.getItem("accessToken");
    if (accessToken) {
        return await DataSender(checkDocker() + "/state", {});
    } else {
        return { data: {} };
    }
};

export const AuthServerPWDForget = async (email: string) => {
    return await DataSender(checkDocker() + "/MDPOublier", {
        username: email,
    });
};

export const AuthServerFgtPWDJeton = async (
    jeton: string,
    email: string,
    password: string
) => {
    return await DataSender(checkDocker() + "/MDPChange", {
        jeton: jeton,
        username: email,
        password: password,
    });
};

export const AuthServerCheckSource = async () => {
    return await DataSender(checkDocker() + "/source", {});
};

export const AuthServerSetSource = async (userSource: UserSource) => {
    return await DataSender(checkDocker() + "/set-source", {
        source: userSource,
    });
};

export const AuthServerValideSource = async () => {
    return await DataSender(checkDocker() + "/check-source", {});
};

export const AuthServerDeleteCompte = async () => {
    return await DataSender(checkDocker() + "/mon-compte/suppr", {});
};