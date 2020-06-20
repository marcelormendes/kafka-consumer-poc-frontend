import Layout from "../components/Layout";
import { sendMessageToApi } from "./api/sendMessage";
import { MyForm } from "../components/MyForm";

const SendMessage = () => (
    <Layout title="Consumer Knowledge">
        <h1> Sending Message to Consumer </h1>
        <MyForm
            onSubmit={({ consumerMessage }) => {
                sendMessageToApi(consumerMessage);
            }}
        />
    </Layout>
);

export default SendMessage;
