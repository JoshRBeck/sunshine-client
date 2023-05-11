import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/auth.services";
import axios from "axios"

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);


  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name };

    // Make an axios request to the API
    // If the POST request is a successful redirect to the login page
    // If the request resolves with an error, set the error message in the state
    axios.post("http://localhost:3000/auth/signup", requestBody)
      .then((response) => {
        navigate('/login');
      })
      .catch((error) => {
        console.log(error)
      })
    // authService.signup(requestBody)
    //   .then((response) => {
    //     navigate('/login');
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  };


  return (
    <div className="SignupPage SignupPage--modified">
      <h1 className="signupPageHeading">Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <label className="inputLabels">Email:</label>
        <input
          className="signUpInput"
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
          placeholder="Email"
        />

        <label className="inputLabels">Password:</label>
        <input
          className="signUpInput"
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
          placeholder="Password"
        />

        <label className="inputLabels">Name:</label>
        <input
          className="signUpInput"
          type="text"
          name="name"
          value={name}
          onChange={handleName}
          placeholder="Name"
        />

        <button className="signUpButton" type="submit">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p className="alreadyText">Already have account?</p>
      <Link to={"/login"}><button className="logInButtonSignUpPage">Login</button></Link>
    </div>
  )
}

export default SignupPage;