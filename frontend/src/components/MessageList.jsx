import { useEffect, useState } from "react";
import api from "../services/api";

function MessageList() {

    const [messages, setMessages] = useState([]);

    const loadMessages = async () => {

        try {

            const res = await api.get("/data");

            setMessages(res.data);

        } catch (err) {

            console.log(err);

        }

    };

    useEffect(() => {

        loadMessages();

    }, []);

    return (

        <div className="card">

            <h2>Stored Messages</h2>

            {

                messages.map((item) => (

                    <div
                        className="message"
                        key={item.id}
                    >
                        {item.message}
                    </div>

                ))

            }

        </div>

    );

}

export default MessageList;