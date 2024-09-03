import { useAuth } from "@/context/AuthUserContext";
import { ScreenSpinner } from "./screen-spinner";
import { useRouter } from "next/router";
import { SessionStatusType } from "@/types/sessionType";
import { GUEST, REGISTERED } from "@/lib/session-status";
import { URL_MOM_COMPTE } from "@/lib/pages/pages-possible";

interface Props {
    children: React.ReactNode;
    sessionStatus?: SessionStatusType;
}

export const Session = ({ children, sessionStatus }: Props) => {
    console.log("session charged");
    const router = useRouter();
    const { authUser, authUserIsLoading } = useAuth();

    const onboadingIsCompleted = authUser?.userDocument?.onboardingIsCompleted;
    const emailIsValided = authUser?.userDocument?.emailVerified;

    const shouldRedirectToOnboarding = () => {
        return (
            authUser &&
            emailIsValided &&
            !onboadingIsCompleted &&
            !authUserIsLoading &&
            router.pathname !== URL_MOM_COMPTE &&
            router.asPath !== "/onboarding"
        );
    };
    const shouldNotRedirectToOnboarding = () => {
        return (
            authUser &&
            emailIsValided &&
            onboadingIsCompleted &&
            !authUserIsLoading &&
            router.asPath === "/onboarding"
        );
    };
    const shouldRedirectToValidating = () => {
        return (
            authUser &&
            !emailIsValided &&
            !authUserIsLoading &&
            router.asPath !== "/validation"
        );
    };

    if (shouldRedirectToOnboarding()) {
        router.push("/onboarding");
        return <ScreenSpinner />;
    }
    if (shouldNotRedirectToOnboarding()) {
        router.push("/mes-espaces");
        return <ScreenSpinner />;
    }
    if (shouldRedirectToValidating()) {
        router.push("/validation");
        return <ScreenSpinner />;
    }

    if (sessionStatus === GUEST && !authUserIsLoading) {
        if (!authUser) {
            //console.log("chipeA");
            return <>{children}</>;
        } else {
            router.push("/mes-espaces");
        }
    }
    if (sessionStatus === REGISTERED && !authUserIsLoading) {
        if (authUser) {
            //console.log("chipeB");
            return <>{children}</>;
        } else {
            router.push("/connexion");
        }
    }
    if (!sessionStatus && !authUserIsLoading) {
        //console.log("chipeC");
        return <>{children}</>;
    }

    return <ScreenSpinner />;
};
