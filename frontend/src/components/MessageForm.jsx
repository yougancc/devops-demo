import { useState } from "react";
import api from "../services/api";

function MessageForm() {

    const [message, setMessage] = useState("");

    const saveMessage = async () => {

        if (!message.trim()) {
            alert("Enter a message");
            return;
        }

        try {

            await api.post("/data", {
                message
            });

            alert("Saved Successfully");

            setMessage("");

            window.location.reload();

        } catch (err) {

            console.log(err);

            alert("Unable to save");

        }

    };

    return (

        <div className="card">

            <h2>Enter Message</h2>

            <input
                type="text"
                placeholder="Enter message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <button onClick={saveMessage}>
                Save
            </button>

        </div>

    );

}

export default MessageForm;