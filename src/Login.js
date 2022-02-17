import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // in react-dom v6 useHistory is changed to useNvigate
import React, { useState } from "react";
import { auth } from "./firebase";

function Login() {
  const navigate = useNavigate();
  //const sendSubmit = () => {
  //navigate.push("/");
  //};
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    // firebase login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //localStorage.setItem("user");
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    // firebase register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
          //localStorage.setItem("user", auth.json());
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={signIn}
            type="submit"
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          We offer a wide range of Amazon Services, and sometimes additional
          terms may apply. When you use an Amazon Service (for example, Your
          Profile, Gift Cards, Amazon Video, Your Media Library, Amazon devices,
          or Amazon applications) you also will be subject to the guidelines,
          terms and agreements applicable to that Amazon Service.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
