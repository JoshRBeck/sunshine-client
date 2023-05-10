import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
    //Subsrcibe to the authcontext to gain access to the values from the AuthContext.provider 'value' prop
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    // Update the rendering logic to display different content
    // depending on whether the user is logged in or not
    return (
        <nav>
            {isLoggedIn && (
                <>

                    <button onClick={logOutUser}>Logout</button>
                    <span>{user && user.name}</span>
                </>
            )}
            {!isLoggedIn && (
                <>
                    <Link to="/signup"> <button>Sign Up</button> </Link>
                    <Link to="/login"> <button>Login</button> </Link>
                </>
            )}
        </nav>
    )

}

export default Navbar