
import { createContext, useContext } from "react";

const init = "";

const espaceContext = createContext({
    espace: init,
});

interface Props {
    espace: string;
    children: React.ReactNode;
}

export function EspaceProvider({ espace, children }: Props) {
    return (
        <espaceContext.Provider
            value={{
                espace: espace,
            }}
        >
            {children}
        </espaceContext.Provider>
    );
}

export const useEspace = () => useContext(espaceContext);
