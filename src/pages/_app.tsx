import { AuthUserProvider } from "@/context/AuthUserContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
    if (process.env.NODE_ENV === 'production') console.log = function () {};
    return (
        <AuthUserProvider>
            <ToastContainer position="top-center" />
            <Component {...pageProps} />
        </AuthUserProvider>
    );
}

// SERVER

// import express from "express";
// import cors from "cors";
// import { createContext, useContext } from "react";

// const server = express();
// server.use(cors());
// server.listen(3001, () => {
//     console.log("Server started on port 3001.");
// });

// const serverContext = createContext({
//     server: server,
// });
// export const serverSide = () => useContext(serverContext);
