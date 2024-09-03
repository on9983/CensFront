import { checkDocker } from "../Components/checkDocker";
import { DataSender } from "../Components/dataSender";

export const DataServerNousContacter = async (dataForm: any) => {
    return await DataSender(checkDocker() + "/nous-contacter", {
        dataForm: dataForm,
    },false);
};
