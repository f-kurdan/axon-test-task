import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import React from 'react'

const ErrorPage = () => {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText ? ' ' : '' || error.data.message}</i>
                </p>
            </div>
        );
    } else {
        return <></>
    }


}

export default ErrorPage