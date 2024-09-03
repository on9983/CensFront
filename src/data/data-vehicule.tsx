import { DataVehiculeInfo, DataVehiculesType } from "@/types/api/vehicule-data";
import { DataContextBE } from "./data-context-be";

export const DataVehicules: DataVehiculesType = {
    vehicules: [
        ["", "Marque/Modèle/Immatricule", "Statut", "Urgence", "Fonction"],
        {
            vehname: [
                "img",
                "1Peugeot/206/fr-565-11-62",
                "OK",
                "OK",
                "veh. de fonction",
            ],
        },
        {
            vehname: [
                "img",
                "2Peugeot/206/fr-565-11-62",
                "OK",
                "OK",
                "veh. de fonction",
            ],
        },
    ],
    images: [
        {
            titre: "Etablissement1",
            imgUrl: "/images/cadran.png",
            imgAlt: "L'Institution Marmoutier de Sainte-Radegonde, à Tours.",
            desc: "L'établissement1 correspond à un test de conntenue.",
        },
        {
            titre: "Etablissement1",
            imgUrl: "/images/cadran.png",
            imgAlt: "L'Institution Marmoutier de Sainte-Radegonde, à Tours.",
            desc: "L'établissement1 correspond à un test de conntenue.",
        },
        {
            titre: "Etablissement1",
            imgUrl: "/images/cadran.png",
            imgAlt: "L'Institution Marmoutier de Sainte-Radegonde, à Tours.",
            desc: "L'établissement1 correspond à un test de conntenue.",
        },
    ],
};

export const DataVehInfo: DataVehiculeInfo = {
    Administratif: {
        Fonction: "Véh. de service",
        Incorporation: "01/08/2007",
        "Pr. Circulation": "01/01/2002",
        "Puis. Fiscal": "9",
        Immatricule: "fr-565-111-62",
        "Carte grise": "222U26T63S122",
        "Carte Carbu.": "K589FG45",
        Fournisseur: "Fournisseur1",
        Assureur: "Macif",
    },
    Caractéristique: {
        Catégorie: "Véh. Léger",
        Permi: "B",
        Marque: "Peugeot",
        Model: "206",
        "Co2 au km": "0.0877 g/km",
        Carburant: "diesel",
        "Crit'Air": "5",
    },
    Statut: {
        Conducteur: "non",
        Statut: "En service",
    },
};

export const DataVehKm = {
    Informations: {
        "Km initial": 9200,
        Incorporation: "01/08/2007",
        "Pr. Circulation": "01/01/2002",
    },
    Kilometrages: {
        2024: {
            Janvier: 5200,
            Février: 5890,
            Mars: 0,
            Avril: 0,
            Mai: 0,
            Juin: 0,
            Juillet: 0,
            Aout: 0,
            Septembre: 0,
            Octobre: 0,
            Novembre: 0,
            Décembre: 0,
        },
        2023: {
            Janvier: 1300,
            Février: 1450,
            Mars: 1700,
            Avril: 1900,
            Mai: 1920,
            Juin: 2100,
            Juillet: 2500,
            Aout: 3200,
            Septembre: 3400,
            Octobre: 3650,
            Novembre: 3900,
            Décembre: 4200,
        },
        2022: {
            Janvier: 40,
            Février: 120,
            Mars: 160,
            Avril: 200,
            Mai: 400,
            Juin: 600,
            Juillet: 660,
            Aout: 850,
            Septembre: 1000,
            Octobre: 1100,
            Novembre: 1200,
            Décembre: 1300,
        },
    },
};

export const DataVehPlan = {
    Évènements: {
        entity: "Event",
        historiques: {
            0: {
                nom: "Ajout du véh dddddd",
                date: "01/01/2024",
                type: "debug",
            },
            1: {
                nom: "Modification",
                date: "01/01/2024",
                champ: "Technique",
                type: "debug",
            },
            2: {
                nom: "Réservation",
                date: "01/01/2024",
                dateF: "01/01/2024",
                effectued: true,
            },
            3: {
                nom: "Nettoyage1",
                date: "01/05/2024",
                dateF: "01/01/2024",
                frais: 5.6,
                effectued: true,
            },
            4: {
                nom: "Nettoyage2",
                date: "01/05/2024",
                frais: 1045.67,
                effectued: false,
            },
        },
    },

    Contrôle: {
        "Contrôles effectués": {
            Technique: "01/01/2023",
            Pollution: "01/01/2023",
        },
        "Contrôles prévu": {
            Technique: "01/01/2025",
            Pollution: "01/01/2025",
        },
    },
};

export const DataVehAssur = {
    Assureur: {
        "Nom de l'assureur": "Macif",
        "n° de dossier": "999999U",
    },
    Tarif: {
        "Coût mensuel": 450,
        "Coût annuel": 0,
        "Début de validité": "01/12/2023",
        "Fin de validité": "01/12/2026",
    },
    Description: "Exemple de description.",
};

export const DataVehAchat = {
    Fournisseur: {
        "Nom du Fournisseur": "Fournisseur1",
        "Le n° de siret": "999 999 999 999",
        "Le n° de dossier": "999999U",
        Téléphone: "00 00 00 00 00",
    },
    Acquisition: {
        "Type d'acquisition": "Leasing",
        "Prix d'achat": 0.0,
        "Coût mensuel": 450,
        "Coût annuel": 0.0,
        "Début du leasing": "01/01/2023",
        "Fin du leasing": "01/01/2023",
        "Date d'achat": "01/01/2023",
        "Acquisition du véh.": "01/01/2023",
    },
    "Description du leasing": "Un exemple de description",
};
