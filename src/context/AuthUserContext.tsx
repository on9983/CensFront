import useAuthServ from "@/hooks/AuthServer/use-auth";
import { UserDocument, UserInterface } from "@/types/user";
import { createContext, useContext } from "react";

const init : UserInterface = {
    uid: "",
    role: "",
    userDocument: {
        onboardingIsCompleted: false,
        emailVerified: false,
    },
};

const authUserContext = createContext({
    authUser: init,
    authUserIsLoading: true,
});

interface Props {
    children: React.ReactNode;
}

export function AuthUserProvider({ children }: Props) {
    const auth = useAuthServ();

    return (
        <authUserContext.Provider
            value={{
                authUser: auth.authUser as {
                    uid: string;
                    role: string;
                    userDocument: UserDocument;
                },
                authUserIsLoading: auth.authUserIsLoading,
            }}
        >
            {children}
        </authUserContext.Provider>
    );
}

export const useAuth = () => useContext(authUserContext);


