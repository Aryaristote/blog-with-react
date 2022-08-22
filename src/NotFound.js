import { Link } from 'react-router-dom';

const NotFound = () => {

    return (
        <div className="not-found">
            <h1>NOT FOUND THE PAGE</h1>
            <small>Error 404</small>
            <Link to="/">Home Page...</Link>
        </div>
    );
}
 
export default NotFound;