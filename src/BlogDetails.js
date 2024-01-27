import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const history = useHistory()
    const { id } = useParams()
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id)
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
        method: 'DELETE'
    }).then(() => {
        history.push('/')
    })
    }
    return (
        <div className="blog-details">
            {isPending && <div>Loading....</div>}
            {error && <div>Error occured: {error}</div>}
            {blog && (
                <article>
                    <h2> {blog.title}</h2>
                    <p> {blog.body}</p>
                    <button onClick={handleClick}>Delete Blog</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;