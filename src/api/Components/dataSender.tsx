import { signalement } from "@/hooks/Dev/signalement";

export const DataSender = async (
    url: string,
    dataJson: any,
    veille: boolean = true
) => {
    try {
        const accessToken = window.sessionStorage.getItem("accessToken");

        const resp = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...dataJson, accessToken: accessToken }),
        });
        const response = await resp.json();

        if (response) {
            if (response.critique && veille) {
                signalement(response.critique, url, JSON.stringify(dataJson));
                return { error: response.critique };
            }
            return { data: response };
        }
        return { error: "Pas de réponse." };
    } catch (error) {
        if (veille) {
            signalement(error, url, JSON.stringify(dataJson));
        }
        return { error: error };
    }
};
