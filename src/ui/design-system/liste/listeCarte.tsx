import { CarteData } from "@/types/component/carteElement";
import { Carte } from "../cadran/carte";
import { v4 } from "uuid";
import { useRouter } from "next/router";

interface Props {
    data: CarteData[];
    action: (carte: CarteData) => void;
    sendDataByCarte?: (dataForm: any, carte: CarteData) => {};
}

export const ListeCarte = ({ data, action, sendDataByCarte }: Props) => {
    const ListeCarteEspaces = data.map((carte) => {
        let sendData = undefined;
        if (sendDataByCarte) {
            sendData = (dataForm: any) => {
                return sendDataByCarte(dataForm, carte);
            };
        }

        return (
            <Carte
                key={v4()}
                data={carte}
                action={() => {
                    action(carte);
                }}
                sendData={sendData}
            />
        );
    });

    return (
        <div className="overflow-auto w-[536px] h-[338px] grid gap-x-4 gap-y-4 grid-cols-3">
            {ListeCarteEspaces}
        </div>
    );
};
