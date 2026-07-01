import { useState } from "react";
import api from "../services/api";

function FileUpload() {

    const [file, setFile] = useState(null);

    const upload = async () => {

        if (!file) {

            alert("Choose a file");

            return;

        }

        const formData = new FormData();

        formData.append("file", file);

        try {

            await api.post("/upload", formData);

            alert("Uploaded Successfully");

            setFile(null);

            window.location.reload();

        } catch (err) {

            console.log(err);

            alert("Upload Failed");

        }

    };

    return (

        <div className="card">

            <h2>Upload File</h2>

            <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
            />

            <button onClick={upload}>
                Upload
            </button>

        </div>

    );

}

export default FileUpload;