import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, error, loading] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || '/';

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };

  const handlePassBlur = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    navigate(from, {replace: true});
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
 
  


  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">LogIn</h2>
        <form onSubmit={handleSignIn}>
          <div className="input-group">
            <label>Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" required></input>
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              onBlur={handlePassBlur}
              type="password"
              name="password"
              required
            ></input>
          </div>
          
          <p style={{color: 'red'}}>{error.message}</p>
          {
            loading && <p>Loading...</p>
          }
       
          <input className="btn" type="submit" value="login"></input>
        </form>
        <p>
          New to Ema-John?{" "}
          <Link className="form-link" to="/signup">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
