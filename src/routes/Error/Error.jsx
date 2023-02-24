import { useState } from 'react'
import lightVector from '@/assets/lightVector.svg';
import { useRouteError } from "react-router-dom";
import './Error.scss'

function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="Error">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default Error
