
import { AppLinks } from "@/types/component/app-links";
import { RiFacebookFill, RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";

// FOOTER
const DataAppliLinks: AppLinks[] = [
    {
        label: "Accueil",
        baseUrl: "/",
        type: "internal",
    },
    {
        label: "Mes espaces",
        baseUrl: "/mes-espaces",
        type: "internal",
    },
    // {
    //     label: "Planification",
    //     baseUrl: "/connexion",
    //     type: "internal",
    // },
    // {
    //     label: "Etude de coûts",
    //     baseUrl: "/etude",
    //     type: "internal",
    // },
    // {
    //     label: "lien externe",
    //     baseUrl: "https://youtube.com",
    //     type: "external",
    // },
];
const DataUserLinks: AppLinks[] = [
    {
        label: "Mon espace",
        baseUrl: "/mon-espace",
        type: "internal",
    },
    {
        label: "Connexion",
        baseUrl: "/connexion",
        type: "internal",
    },
    {
        label: "Inscription",
        baseUrl: "/connexion/inscription",
        type: "internal",
    },
    {
        label: "Mots de passe oublié",
        baseUrl: "/connexion/mots-de-passe-perdu",
        type: "internal",
    },
];
const DataInfoLinks: AppLinks[] = [
    {
        label: "CGU",
        baseUrl: undefined,
        type: "internal",
    },
    {
        label: "Confidentialité",
        baseUrl: undefined,
        type: "internal",
    },
    {
        label: "A propos",
        baseUrl: undefined,
        type: "internal",
    },
    {
        label: "Un probleme ?",
        baseUrl: undefined,
        type: "internal",
    },
    {
        label: "Nous contacter",
        baseUrl: undefined,
        type: "internal",
    },
];
export const DataFooterLinks = [
    {
        titre: "Application",
        links: DataAppliLinks,
    },
    {
        titre: "Utilisateurs",
        links: DataUserLinks,
    },
    {
        titre: "Informations",
        links: DataInfoLinks,
    },
];

// GROUP DE BUTTON
export const DataGroupBtnLinks: AppLinks[] = [
    {
        label: "Tuto Youtube",
        baseUrl: "https://www.youtube.com/",
        type: "external",
        icon: RiYoutubeFill,
    },
    {
        label: "Linkedin",
        baseUrl: "https://fr.linkedin.com/",
        type: "external",
        icon: RiLinkedinFill,
    },
    {
        label: "Facebook",
        baseUrl: "https://www.facebook.com/",
        type: "external",
        icon: RiFacebookFill,
    },
];
