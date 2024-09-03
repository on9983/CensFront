import { Typography } from "@/ui/design-system/typography/typography";
import clsx from "clsx";
import { useRouter } from "next/router";
import { RiHome3Line } from "react-icons/ri";
import { v4 } from "uuid";
import { ActiveLink } from "../active-link";

export const FilArianne = () => {
    const router = useRouter();

    const asPath = router.asPath;

    const segPathListe = asPath.split("/");

    segPathListe[0] = "accueil";
    let lastSegPath = segPathListe[segPathListe.length - 1];

    if (lastSegPath == "") {
        segPathListe.pop();
        segPathListe.pop();
        // lastSegPath = segPathListe[segPathListe.length - 1];
    }

    const view = segPathListe.map((segPath, index) => (
        <ActiveLink
            key={v4()}
            href={
                index > 0
                    ? `/${segPathListe.slice(1, index + 1).join("/")}`
                    : "/"
            }
        >
            <Typography
                component="span"
                className={clsx(
                    segPath == lastSegPath
                        ? "text-oniNoir-400"
                        : "text-oniNoir-800",
                    "capitalize hover:text-oniPrimary-600 oniAnimated"
                )}
            >
                {segPath == segPathListe[0] ? (
                    <RiHome3Line className="inline -mt-1.5" />
                ) : (
                    segPath.replace(/-/g, " ")
                )}
            </Typography>

            {segPath !== lastSegPath && (
                <Typography
                    variant="CapSm"
                    component="span"
                    className="ml-2 text-oniNoir"
                >
                    {"/"}
                </Typography>
            )}
        </ActiveLink>
    ));

    return <div className="flex items-center gap-1 pb-2 pl-10">{view}</div>;
};
