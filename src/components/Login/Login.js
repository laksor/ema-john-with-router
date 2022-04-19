import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">LogIn</h2>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email"></input>
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" name="password"></input>
          </div>
          <input className="btn" type="submit" value="login"></input>
        </form>
        <p>New to Ema-John? <Link className="form-link" to="/signup">Create an account</Link></p>
      </div>
    </div>
  );
};

export default Login;
