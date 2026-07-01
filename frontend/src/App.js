import "./App.css";

import MessageForm from "./components/MessageForm";
import MessageList from "./components/MessageList";
import FileUpload from "./components/FileUpload";
import FileList from "./components/FileList";

function App() {
    return (
        <div className="container">

            <h1>AWS Demo Application</h1>

            <MessageForm />

            <MessageList />

            <FileUpload />

            <FileList />

        </div>
    );
}

export default App;