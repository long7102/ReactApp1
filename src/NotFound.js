import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <h2>404 ERROR</h2>
            <p>That page is not exist</p>
            <Link to="/">Go home</Link>
        </div>
      );
}
 
export default NotFound;