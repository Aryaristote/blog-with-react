import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPeding } = useFetch('http://localhost:8000/blogs/' + id);
    const redirect = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: "DELETE",
        }).then(() => {
            redirect.push("/");
        })
    }

    return (
        <div className="blog-details">
            <small>Blog Details: </small>
            { isPeding && <div>Loading ...</div>}
            { error && <div>{ error }</div> }
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by: <b>{blog.author} </b></p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete this Blog</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;