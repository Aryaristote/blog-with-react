import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Denzal Washington');
    const [isPending, setIsPending] = useState(false);
    const redirect = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault(); //Avoid reload page on click submit btn

        setIsPending(true);

        const blog = { title, body, author };

        //Pushing the data into json file
        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog) 
        }).then(() => {
            setIsPending(false);
            console.log("New blog Add");
            redirect.push("/");
        })
    }

    return (
        <div className="create">
            <h2>New Article</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Content: </label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author: </label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Denzal Washington">Denzal Washington</option>
                    <option value="Sarah Morghan">Sarah Morghan</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Add Blog...</button> }
            </form>
        </div>
    );
}
 
export default Create;