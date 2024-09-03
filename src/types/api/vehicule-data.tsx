import { CarteData } from "../component/carteElement";
import { TableauByIdType } from "../component/liste/tableau-type";

export interface DataVehiculesType {
    vehicules: TableauByIdType;
    images?: CarteData[];
}

export interface DataVehiculeInfo {
    Administratif: {
        Fonction: string;
        Incorporation: string;
        "Pr. Circulation": string;
        "Puis. Fiscal": string;
        Immatricule: string;
        "Carte grise": string;
        "Carte Carbu.": string;
        Fournisseur: string;
        Assureur: string;
    };
    Caractéristique: {
        Catégorie: string;
        Permi: string;
        Marque: string;
        Model: string;
        "Co2 au km": string;
        Carburant: string;
        "Crit'Air": string;
    };
    Statut: {
        Conducteur: string;
        Statut: string;
    };
}
