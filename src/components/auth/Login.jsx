import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { auth,provider } from "../../firebaseConfig";
import { SignInWithPopup } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./autn.css"
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [value,setValue]=useState('');
  
  useEffect(()=>{
    setValue(localStorage.getItem('email'));
  },[])
  let navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, { displayName: name });
      navigate("/");
    } catch (error) {
      toast(error.code, { type: "error" });
    }
  };
  const handleClick=()=>{
    signInWithPopup(auth,provider).then((data)=>{
      setValue(data.user.email)
      localStorage.setItem("email",data.user.email);
      navigate("/");
    })
  }
  return (
    <div className="border p-3 bg-light container " style={{ marginTop: 70 }}>
      <h1>Login</h1>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <br />
      <button className="btn btn-danger ml-5" onClick={handleClick}>Signin with Google</button>
      <button className="btn btn-primary" onClick={handleSignup}>
        Login
      </button>
    </div>
  );
}