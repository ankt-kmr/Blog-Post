import React from 'react'
import ReactQuill from 'react-quill';


const modules = {
    toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
    ],
};

export default function Editor({ value, onChange }) {
    return (
        <ReactQuill value={value}
            theme={'snow'}
            modules={modules}
            onChange={onChange} />
    )
}
