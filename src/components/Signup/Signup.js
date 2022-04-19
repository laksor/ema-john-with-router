import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="form-container">
      <div>
        <h2 className="form-title">SignUp</h2>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email"></input>
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" name="password"></input>
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <input type="password" name="Confirm-password"></input>
          </div>
          <input className="btn" type="submit" value="SignUp"></input>
        </form>
        <p>Already have account? <Link className="form-link" to="/login">LogIn</Link></p>
      </div>
    </div>
    );
};

export default Signup;