import React, { useState, useEffect } from "react";
import axios from "axios";
// import { response } from "../../../sunshine-server/app";
const API_URL = "http://localhost:3000";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isloading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const storeToken = (token) => {
    localStorage.setItem('authToken', token);
  }
  const authenticateUser = () => {
    //Get the stored token from the local storage
    const storedToken = localStorage.getItem('authToken');

    //If the stored token exists in the local storage
    if (storedToken) {
      //We must send the JWT token in the requests "Authorization" headers
      axios.get(
        `${API_URL}/auth/verify`, { headers: { Authorization: `Bearer ${storedToken}` }}
      )
        .then((response) => {
          // If the server verifies that the JWT token is valid
          const User = response.data;
          // Update store variables
          setLoggedIn(true);
          setLoading(true);
          setUser(User);
        })
    } else {
      //If the token is not available or removed
      setLoggedIn(false);
      setLoading(false);
      setUser(null);
    }
  }
  const removeToken = () => {
    //Upon logout remove token from local storage
    localStorage.removeItem('authToken');
  }

  const logOutUser = () => {
    // To log out the user, remove the token
    removeToken();
    // and update the state variables    
    authenticateUser();
  }

  useEffect(() => {
    authenticateUser();
  }, [])


  return (
    <AuthContext.Provider value={{ isLoggedIn, isloading, user, storeToken, authenticateUser, logOutUser, setLoading, setLoggedIn, setUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProviderWrapper };