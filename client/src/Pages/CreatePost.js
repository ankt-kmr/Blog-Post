import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { Navigate } from "react-router-dom";
import Editor from "../Components/Editor";

export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);

    async function createNewPost(e) {
        const data = new FormData();
        data.append("title", title);
        data.append("summary", summary);
        data.append("content", content);
        data.append("file", files[0]);

        e.preventDefault();
        // console.log(files);
        const response = await fetch("http://localhost:4000/post", {
            method: "POST",
            body: data,
            credentials: 'include',
        })
        if (response.ok) {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

    return (
        <form onSubmit={createNewPost} enctype="multipart/form-data">
            <input type="title"
                placeholder={"Title"}
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                }} />
            <input type="summary"
                placeholder={"Summary"}
                value={summary}
                onChange={(e) => {
                    setSummary(e.target.value);
                }} />
            <input type="file" 
                onChange={(e) => setFiles(e.target.files)}/>
            <Editor onChange={setContent} value={content} />
            <button type="submit">Create Post</button>
        </form>
    );
}
