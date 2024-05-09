import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-red-500">Oops!!</h2>
            <br />
            <Link to="/"><button className="btn btn-primary">Go back to the home page</button></Link>
        </div>
    );
};

export default ErrorPage;