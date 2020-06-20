import Layout from "../components/Layout";
import { MyTable } from "../components/MyTable";
import { getMessageList } from "./api/getMessageList";

const MessageList = () => (
    <Layout title="Consumer Knowledge">
        <h1>Message List</h1>
        <MyTable data={getMessageList()} />
    </Layout>
);

export default MessageList;
