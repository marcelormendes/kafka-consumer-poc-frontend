export const sendMessageToApi = async (text: string): Promise<void> => {
    const response = await fetch("http://localhost:5000/api/call-producer", {
        method: "post",
        body: JSON.stringify(text),
    });

    if (response.status === 200) {
        alert("Message Sent to API");
    } else {
        alert("Error on send the message to API. Call the Admin.");
    }
};
