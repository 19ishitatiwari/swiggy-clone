const { useRouteError } = require("react-router-dom");

const Error = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div>
            <h1>Oops!</h1>
            <h2>Error {error.status}: {error.statusText}</h2>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
}

export default Error;