
import BlogList from "./BlogList";

import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs/')

    return (
        <div className="home">
            {error && <div>Error : {error}</div>}
            {isPending && <div>...Loading</div>}
            <h2>Homepage</h2>
            {blogs && <BlogList blogs={blogs} title="Dit me ReactJS" />}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author==='ume' )} title="Dit me ReactJS lan thu2 "/> */}
        </div>
    );
}

export default Home;