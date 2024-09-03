import { AuthServerCheckState } from "@/api/authentification";
import { UserInterface } from "@/types/user";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { deconnexion } from "./deconnexion";

export default function useAuthServ() {
    const router = useRouter();
    const [authUser, setAuthUser] = useState<UserInterface | null>(null);
    const [authUserIsLoading, setAuthUserIsLoading] = useState<boolean>(true);
    const [pass, setPass] = useState<boolean>(false);

    //const [i, setI] = useState<number>(0);
    //const [iFetch, setIfecth] = useState<number>(0);

    useEffect(() => {
        // const interval = setInterval(() => {
        getUserInfo(router);
        //console.log("i", i);
        //setI(i + 1);
        // }, 30000);

        // return () => clearInterval(interval);
    }, [router]);

    const formatAuthUser = (user: UserInterface) => ({
        uid: user.uid,
        role: user.role,
        test: user.test,
        userDocument: user.userDocument,
    });

    const getUserInfo = async (router: NextRouter) => {
        if (!pass) {
            //console.log("iFetch", iFetch);
            //console.log("router", router);
            //setIfecth(iFetch + 1);

            if (!authUser) {
                setAuthUserIsLoading(true);
            }

            const { error, data } = await AuthServerCheckState();

            if (error) {
                console.log(error);
                setAuthUser(null);
                setAuthUserIsLoading(false);
                return;
            }
            //console.log(data);

            if (data.traited) {
                const formatedUser = formatAuthUser(data.user);
                setAuthUser((prevAuthUser) => ({
                    ...prevAuthUser,
                    ...formatedUser,
                }));

                setAuthUserIsLoading(false);
                return;
            }

            if (data.message) {
                toast.error(data.message);
                setPass(true);
                deconnexion(router, false);

                setAuthUser(null);
                setAuthUserIsLoading(false);
                return;
            }
            setAuthUser(null);
            setAuthUserIsLoading(false);
        }
        setPass(false);
    };

    // const authStateChanged = async (authState: UserInterface | null = null) => {
    //     if (!authState) {
    //         setAuthUser(null);
    //         setAuthUserIsLoading(false);
    //         return;
    //     }
    //     setAuthUserIsLoading(true);

    //     await getUserInfo();
    // };

    return {
        authUser,
        authUserIsLoading,
    };
}
