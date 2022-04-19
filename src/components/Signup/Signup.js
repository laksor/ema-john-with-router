import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth  from "../../firebase.init";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = (e) =>{
        setEmail(e.target.value);
    }

    const handlePassBlur = (e) =>{
        setPassword(e.target.value);
    }

    const handleConPassBlur = (e) =>{
        setConfirmPassword(e.target.value);
    }

    const handleCreateUser = (e) =>{
        e.preventDefault();
        if(password !== confirmPassword){
            setError("Your password didn't match")
            return;
        }
        if(password.length < 6 ){
          setError('password must be 6 character')
          return;
        }

        createUserWithEmailAndPassword(email, password);
    }



  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">SignUp</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label>Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" required></input>
          </div>
          <div className="input-group">
            <label>Password</label>
            <input onBlur={handlePassBlur} type="password" name="password" required></input>
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <input onBlur={handleConPassBlur} type="password" name="Confirm-password" required></input>
          </div>
          <p>{error}</p>
          <input className="btn" type="submit" value="SignUp"></input>
        </form>
        <p>
          Already have account?{" "}
          <Link className="form-link" to="/login">
            LogIn
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
