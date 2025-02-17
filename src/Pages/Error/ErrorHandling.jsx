import { useRouteError } from "react-router-dom";

export default function ErrorBoundary() {
    const error = useRouteError();
    return (
        <div className="text-center p-10">
            <h1 className="text-red-500 text-3xl">Oops! Something went wrong 😞</h1>
            <p>{error.statusText || error.message}</p>
        </div>
    );
}
