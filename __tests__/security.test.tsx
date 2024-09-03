import { fail } from "assert";

let accessToken: string | null = null;
describe("Test la connection", () => {
    test("API BAD login test", async () => {
        const resp = await global.fetch(
            "http://10.5.0.5/server-be" + "/login",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: "nicolas.ourdouille@outlook.fr",
                    password: "frgt6963dfuu",
                }),
            }
        );
        const data = await resp.json();
        expect(data).toHaveProperty("message", "Mot de passe invalide.");
    });
    test("API good login test", async () => {
        const resp = await global.fetch(
            "http://10.5.0.5/server-be" + "/login",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: "mew75@hotmail.fr",
                    password: "frgt6963df",
                }),
            }
        );
        const data = await resp.json();
        expect(data).toHaveProperty("traited", true);
        accessToken = data["accessToken"];
    });
});

let espaceEid: string | null = null;
describe("Test les espaces", () => {
    test("API BAD add Espace", async () => {
        try {
            const resp = await global.fetch(
                "http://10.5.0.5/server-be" + "/etablissements/add",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        accessToken: "NIMPORTEQUOI",
                        espace: {
                            nom: "TEST UNITAIRE nom",
                            desc: "TEST UNITAIRE desc",
                        },
                    }),
                }
            );
            const data = await resp.json();
            fail("it should not reach here");
        } catch (error) {
            expect(error);
        }
    });
    test("API add Espace", async () => {
        const resp = await global.fetch(
            "http://10.5.0.5/server-be" + "/etablissements/add",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    accessToken: accessToken,
                    espace: {
                        nom: "TEST UNITAIRE nom",
                        desc: "TEST UNITAIRE desc",
                    },
                }),
            }
        );
        const data = await resp.json();
        expect(data).not.toHaveProperty("error");
        espaceEid = data["eid"];
    });
    test("API Check Espaces", async () => {
        const resp = await global.fetch(
            "http://10.5.0.5/server-be" + "/etablissements",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    accessToken: accessToken,
                    indexMin: 0,
                    indexMax: 20,
                }),
            }
        );
        const data = await resp.json();
        expect(data).toHaveProperty("traited", true);
    });
    test("API BAD Check Espaces", async () => {
        try {
            const resp = await global.fetch(
                "http://10.5.0.5/server-be" + "/etablissements",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        accessToken: "NIMPORTEQUOI",
                        indexMin: 0,
                        indexMax: 20,
                    }),
                }
            );
            const data = await resp.json();
            fail("it should not reach here");
        } catch (error) {
            expect(error);
        }
    });
});

let vehicule1Vid: string | null = null;
let vehicule2Vid: string | null = null;
let vehicule3Vid: string | null = null;
describe("Test les véhicules", () => {
    test("API BAD add Vehicule1", async () => {
        try {
            const resp = await global.fetch(
                "http://10.5.0.5/server-be" + "/vehicules/add",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        accessToken: "accessToken",
                        dataForm: {
                            marque: "TEST UNITAIRE marque",
                            model: "TEST UNITAIRE model",
                        },
                        espace: espaceEid,
                    }),
                }
            );
            const data = await resp.json();
            fail("it should not reach here");
        } catch (error) {
            expect(error);
        }
    });
    test("API add Vehicule1", async () => {
        const resp = await global.fetch(
            "http://10.5.0.5/server-be" + "/vehicules/add",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    accessToken: accessToken,
                    dataForm: {
                        marque: "TEST UNITAIRE marque",
                        model: "TEST UNITAIRE model",
                    },
                    espace: espaceEid,
                }),
            }
        );
        const data = await resp.json();
        expect(data).toHaveProperty("traited", true);
        vehicule1Vid = data["vid"];
    });
    test("API add Vehicule2", async () => {
        const resp = await global.fetch(
            "http://10.5.0.5/server-be" + "/vehicules/add",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    accessToken: accessToken,
                    dataForm: {
                        marque: "TEST UNITAIRE marque",
                        model: "TEST UNITAIRE modele2",
                    },
                    espace: espaceEid,
                }),
            }
        );
        const data = await resp.json();
        expect(data).toHaveProperty("traited", true);
        vehicule2Vid = data["vid"];
    });
    test("API add Vehicule3", async () => {
        const resp = await global.fetch(
            "http://10.5.0.5/server-be" + "/vehicules/add",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    accessToken: accessToken,
                    dataForm: {
                        marque: "TEST UNITAIRE marque",
                        model: "TEST UNITAIRE modele2",
                    },
                    espace: espaceEid,
                }),
            }
        );
        const data = await resp.json();
        expect(data).toHaveProperty("traited", true);
        vehicule3Vid = data["vid"];
    });
    test("API BAD Check Vehicules", async () => {
        try {
            const resp = await global.fetch(
                "http://10.5.0.5/server-be" + "/vehicules",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        accessToken: "accessToken",
                        indexMin: 0,
                        indexMax: 20,
                        espace: espaceEid,
                    }),
                }
            );
            fail("it should not reach here");
        } catch (error) {
            expect(error);
        }
    });
    test("API Check Vehicules", async () => {
        const resp = await global.fetch(
            "http://10.5.0.5/server-be" + "/vehicules",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    accessToken: accessToken,
                    indexMin: 0,
                    indexMax: 20,
                    espace: espaceEid,
                }),
            }
        );
        const data = await resp.json();
        expect(data).toHaveProperty("traited", true);
    });
    test("API BAD edit Vehicule1", async () => {
        try {
            const resp = await global.fetch(
                "http://10.5.0.5/server-be" + "/vehicules",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        accessToken: "accessToken",
                        cat: "set",
                        dataForm: {
                            id: ["Administratif", "Fonction"],
                            value: "test",
                        },
                        vehicule: vehicule1Vid,
                    }),
                }
            );
            const data = await resp.json();
            fail("it should not reach here");
        } catch (error) {
            expect(error);
        }
    });
    test("API edit Vehicule1", async () => {
        const resp = await global.fetch(
            "http://10.5.0.5/server-be" + "/vehicule",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    accessToken: accessToken,
                    cat: "set",
                    dataForm: {
                        id: ["Administratif", "Fonction"],
                        tab: "INFO",
                        value: "test",
                    },
                    vehicule: vehicule1Vid,
                }),
            }
        );
        const data = await resp.json();
        expect(data).toHaveProperty("traited", true);
    });
});

describe("Delete ressources", () => {
    test("API BAD suppr Vehicule1", async () => {
        try {
            const resp = await global.fetch(
                "http://10.5.0.5/server-be" + "/vehicules/suppr",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        accessToken: "NIMPORTEQUOI",
                        vid: vehicule1Vid,
                    }),
                }
            );
            const data = await resp.json();
            fail("it should not reach here");
        } catch (error) {
            expect(error);
        }
    });
    test("API suppr Vehicule1", async () => {
        const resp = await global.fetch(
            "http://10.5.0.5/server-be" + "/vehicules/suppr",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    accessToken: accessToken,
                    vid: vehicule1Vid,
                }),
            }
        );
        const data = await resp.json();
        expect(data).toHaveProperty("traited", true);
    });
    test("API BAD suppr Espace", async () => {
        try {
            const resp = await global.fetch(
                "http://10.5.0.5/server-be" + "/etablissements/suppr",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        accessToken: "NIMPORTEQUOI",
                        eid: espaceEid,
                    }),
                }
            );
            const data = await resp.json();
            fail("it should not reach here");
        } catch (error) {
            expect(error);
        }
    });
    test("API suppr Espace", async () => {
        const resp = await global.fetch(
            "http://10.5.0.5/server-be" + "/etablissements/suppr",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    accessToken: accessToken,
                    eid: espaceEid,
                }),
            }
        );
        const data = await resp.json();
        expect(data).toHaveProperty("traited", true);
    });
    test("API suppr Vehicule2", async () => {
        const resp = await global.fetch(
            "http://10.5.0.5/server-be" + "/vehicules/suppr",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    accessToken: accessToken,
                    vid: vehicule2Vid,
                }),
            }
        );
        const data = await resp.json();
        expect(data).toHaveProperty("traited", true);
    });
    test("API suppr Vehicule3", async () => {
        const resp = await global.fetch(
            "http://10.5.0.5/server-be" + "/vehicules/suppr",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    accessToken: accessToken,
                    vid: vehicule3Vid,
                }),
            }
        );
        const data = await resp.json();
        expect(data).toHaveProperty("traited", true);
    });
});
