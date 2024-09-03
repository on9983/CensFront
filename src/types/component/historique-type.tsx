import { FormType } from "../form";

export interface HistoriqueCout {
    nom: string;
    date: string;
    dateF?: string; // date effective
    frais?: string;
    type?: "debug";
    effectued?: boolean;
}
