import { ConsumerMessage } from "../../interfaces/consumerMessage";

export const getMessageList = async (): Promise<Array<ConsumerMessage> | any> => {
    const response = await fetch("http://localhost:5000/api/get-message-list");
    return response.json();
};
