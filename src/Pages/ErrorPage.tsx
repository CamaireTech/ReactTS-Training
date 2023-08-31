import {useRouteError,isRouteErrorResponse} from "react-router-dom"


export const ErrorPage =() =>{

    const error = useRouteError()

    if(isRouteErrorResponse(error)){
        return (
            <div>
                <h1>OOPS</h1>
                <p>Sorry , An error occured !</p>
                {error?.statusText}
            </div>
        )
    }
    else {
        return(
        <div>
            <h1>Opps</h1>
            <p>Sorry , An error occured !</p>
        </div>
        )
    }
}
