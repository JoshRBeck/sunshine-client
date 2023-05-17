import { Link } from "react-router-dom"

const imgURL = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/404.gif"

function ErrorPage() {
    return (
        <div className="error-page-div">
            <h1 className="error-message">404</h1>
            <img src={imgURL} alt="404 error gif" className="page-img"/>
            <Link to={"/"} ><button className="error-button">Return to home</button></Link>
        </div>
    )
}

export default ErrorPage