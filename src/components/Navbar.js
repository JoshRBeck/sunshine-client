import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
    //Subsrcibe to the authcontext to gain access to the values from the AuthContext.provider 'value' prop
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
    // Update the rendering logic to display different content
    // depending on whether the user is logged in or not
    return (
        <div className="navbar navbar--Modified">
            <nav>
                {isLoggedIn && (
                    <>
                        <button onClick={logOutUser} className="log-out-button">Logout</button>
                        <span className="username">{user && user.name}</span>
                    </>
                )}
                {!isLoggedIn && (
                    <>
                        <Link to="/signup"><button className="sign-up-nav-bar">Sign Up</button> </Link>
                        <Link to="/login"><button className="log-in-nav-bar">Login</button> </Link>
                    </>
                )}
            </nav>
        </div>
    )
}

export default Navbar