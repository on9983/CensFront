import { TypeDeLien } from "@/lib/typeDeLien";
import { IconType } from "react-icons";

export interface AppLinks {
    label: string;
    baseUrl?: string;
    type: TypeDeLien;
    icon?: IconType;
}

export interface FooterLinks {
    titre: string;
    links: AppLinks[];
}



