import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");


  const handleNameBlur = (e) => {
    setName(e.target.value);
  };

  const handleAddBlur = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneNBlur = (e) => {
    setPhone(e.target.value);
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    const shipping = {name, email, address, phone};
    console.log(shipping);
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Shipment Information</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label>Name</label>
            <input
              onBlur={handleNameBlur}
              type="text"
              name="name"
              required
            ></input>
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              value={user?.email}
              readOnly
              type="email"
              name="email"
              required
            ></input>
          </div>
          <div className="input-group">
            <label>Address</label>
            <input
              onBlur={handleAddBlur}
              type="text"
              name="address"
              required
            ></input>
          </div>
          <div className="input-group">
            <label>Phone number</label>
            <input
              onBlur={handlePhoneNBlur}
              type="text"
              name="phone"
              required
            ></input>
          </div>
          <p>{error}</p>
          <input className="btn" type="submit" value="Add shipping"></input>
        </form>
      </div>
    </div>
  );
};

export default Shipment;
