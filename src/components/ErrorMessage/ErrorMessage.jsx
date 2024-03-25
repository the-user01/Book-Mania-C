import { Link } from "react-router-dom";

const ErrorMessage = () => {

    return (
        <div className="min-h-screen flex justify-center items-center text-center ">
            <div id="error-page">
                <h1 className="text-4xl font-extrabold mb-5">404 Page Not Found</h1>
                <p className="text-lg mb-5">Sorry, an unexpected error has occurred.</p>
                <Link to='./'><button className="btn bg-white border-2 border-lime-500 rounded">Back to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorMessage;