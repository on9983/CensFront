
// EXEMPLE :
// await delay(5000);

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
