import { Box } from "@/ui/design-system/box/box";
import { Button } from "@/ui/design-system/button/button";
import { CheckBox } from "@/ui/design-system/form/checkBox";

interface Props {
    readRGPD: boolean;
    handleRGPDValidate: () => void;
    checkBoxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    buttonValidation: Function;
}

export const MentionRGPD = ({
    readRGPD,
    handleRGPDValidate,
    checkBoxChange,
    buttonValidation,
}: Props) => {
    return (
        <Box className="text-oniH3 text-center text-oniPrimary">
            <br />
            <div className="text-oniH1 text-oniPrimary-700">
                {"Mentions légales à lire"}
            </div>
            <br />
            <div className="text-oniH3 text-center text-oniPrimary">
                <p>
                    {
                        "Les informations recueillies font l'objet d’un traitement informatisé par M. Ourdouillé Nicolas, le développeur de cette application.  "
                    }
                </p>
                <br />
                <p>
                    {
                        "Les destinataires des données collectées sont uniquement le développeur de ce site web, et "
                    }
                    <span className="underline text-oniPrimary-600">
                        {"en aucun cas d’utilisation"}
                    </span>
                    {" vos données ne seront échangées à des tiers. "}
                </p>
                <br />
                <p>
                    {"Vos données sensibles comprennent "}
                    <span className="underline text-oniPrimary-600">
                        {"votre email"}
                    </span>
                    {", et "}
                    <span className="underline text-oniPrimary-600">
                        {"vos documents transmis"}
                    </span>
                    {
                        " via ce site web. Ces ressources sont uniquement à utiliser pour les raisons suivantes : "
                    }
                </p>
                <li className="text-left ml-16">
                    {""}
                    <span className="underline text-oniPrimary-600">
                        {"Vous identifiez"}
                    </span>
                    {" via votre adresse email. "}
                </li>
                <li className="text-left ml-16">
                    {""}
                    <span className="underline text-oniPrimary-600">
                        {"Stocker"}
                    </span>
                    {
                        " vos images et vos documents dans cette application web si vous les transmettez sur ce site."
                    }
                </li>
                <li className="text-left ml-16">
                    {""}
                    <span className="underline text-oniPrimary-600">
                        {"Afficher"}
                    </span>
                    {" vos images et vos documents "}
                    <span className="underline text-oniPrimary-600">
                        {"uniquement vers vous"}
                    </span>
                    {
                        ". L'application étant un porte Folio, les ressources sensibles ne sont pas partageable."
                    }
                </li>
                <br />
                <p>
                    {"Vos données sont "}
                    <span className="underline text-oniPrimary-600">
                        {"conservées au maximum 1 ans"}
                    </span>
                    {
                        ", où vos données seront automatiquement supprimées. Il s’agis d’un porte-Folio, les données des utilisateurs ne sont pas destinées à rester enregistré. "
                    }
                    <br />
                    {"Vous pouvez également "}
                    <span className="underline text-oniPrimary-600">
                        {"supprimer vos données par vous même dans les paramètres."}
                    </span>
                </p>
                <br />
                <p>
                    {
                        "La base légale du traitement est conforme au RGPD de l'Union Européenne, elle est également basée sur votre consentement via cet affichage à valider avant la première utilisation de l’application. "
                    }
                </p>
                <br />
                <p>
                    {
                        "Vous bénéficiez de droits concernant vos données personnelles : accéder aux données vous concernant, les rectifier, demander/procéder à leur effacement ou exercer votre droit à la limitation du traitement de vos données, retirer à tout moment votre consentement au traitement de vos données, vous opposer au traitement de vos données, exercer votre droit à la portabilité de vos données. "
                    }
                </p>
                <br />
                <p>
                    {
                        "Pour exercer ces droits ou pour toute question sur le traitement de vos données dans ce dispositif, vous pouvez nous contacter via la page de veille “nous-contacter” en bas à droite, uniquement accessible si vous êtes autorisé à utiliser l’application. "
                    }
                </p>
                <br />
                <p>
                    {
                        "Si vous estimez, après réclamation auprès de nos services, que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL sur leur site web ou par voie postale."
                    }
                </p>
            </div>
            <br />
            <br />
            <div className="w-full flex items-center justify-center">
                <CheckBox
                    titre={"J'ai lue les mentions légales ci-haut."}
                    dataLabel={"checkBoxRGPD"}
                    value={readRGPD}
                    onChange={checkBoxChange}
                />
            </div>
            <br />
            <div className="w-full flex items-center justify-center">
                <Button
                    size="large"
                    action={handleRGPDValidate}
                    disabled={!readRGPD}
                >
                    {
                        "Je valide ces mentions légales afin de pouvoir utiliser ce site web."
                    }
                </Button>
            </div>
            <br />
            <div className="w-full flex items-center justify-center">
                <Button action={buttonValidation} variant="secondary">
                    {"Retour"}
                </Button>
            </div>
            <br />
        </Box>
    );
};
