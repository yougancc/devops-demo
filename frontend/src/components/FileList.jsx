import { useEffect, useState } from "react";
import api from "../services/api";

function FileList() {

    const [files, setFiles] = useState([]);

    const loadFiles = async () => {

        try {

            const res = await api.get("/upload");

            setFiles(res.data);

        } catch (err) {

            console.log(err);

        }

    };

    useEffect(() => {

        loadFiles();

    }, []);

    return (

        <div className="card">

            <h2>Uploaded Files</h2>

            {

                files.map((file) => (

                    <div
                        className="message"
                        key={file.Key}
                    >
                        {file.Key}
                    </div>

                ))

            }

        </div>

    );

}

export default FileList;