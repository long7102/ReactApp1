import { useState } from "react"
import { useHistory} from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, content, author }
        setIsPending(true)
        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('Added')
            setIsPending(false)
            history.push('/')
        })
    }
    return (
        <div className="create">
            <h2>New blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input
                    type="text"
                    required
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                ></input>
                <label>Blog content</label>
                <textarea type="text"
                    required
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}>
                </textarea>
                <label>Blog author</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value="long">Long</option>
                    <option value="longdz">Longdz</option>
                </select>
                {!isPending && <button onClick={handleSubmit}>Add blog</button>}                console.log({title} + {content} + {author})
                {isPending && <button disabled>Adding blog</button>}
            </form>
        </div>
    )
}
export default Create