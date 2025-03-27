import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

const SignupComponent = () => {
    let[username,setUsername]=useState('');
    let[id_number,setId_number]=useState('');
    let[password,setPassword]=useState('');
    let[email,setEmail]=useState('');
    let[phone,setPhone]=useState('');
    let[loading,setLoading]=useState("");
    let[error,setError]=useState("");
    let[Message,setMessage]=useState("");
    const submitForm=async(e)=>{
       e.preventDefault();
       try {
        setError("");
        setMessage("");
        setLoading("Please wait as we submit your data....");
        const data = new FormData();
        data.append('username',username);
        data.append('id_number',id_number);
        data.append('password',password);
        data.append('email',email);
        data.append('phone',phone);
        const response = await axios.post('https://isaaczera.pythonanywhere.com/api/users',data);
        setLoading("");
        setError("");
        setMessage(response.data.Message);
        setUsername("");
        setId_number("");
        setPassword("");
        setEmail("");
        setPhone("");
       } catch (error) {
        setLoading("");
        setMessage("");
        setError(error.Message);
       }
    }
  return (
<div className="row justify-content-center mt-4 getproducts-background animated-background">
  <div className="col-md-6 card shadow p-3 bg-dark text-white">
    <h2>Signup Component</h2>
    <b className="text-success">{loading}</b>
    <b className="text-danger">{error}</b>
    <b className="text-info">{Message}</b>
    <form onSubmit={submitForm}>
        <input type="text"required className="form-control" placeholder="Enter Username" onChange={(e)=>setUsername(e.target.value)} value={username} /> <br />
        <input type="number"required className="form-control" placeholder="Enter id number" onChange={(e)=>setId_number(e.target.value)} value={id_number} /> <br />
        <input type="password" required className="form-control" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} value={password} /> <br />
        <input type="email" required className="form-control" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} value={email} /> <br />
        <input type="tel" required className="form-control" placeholder="Enter Phone" onChange={(e)=>setPhone(e.target.value)} value={phone}  /> <br />
        <button className="btn btn-info">Signup</button>  <br />
        <Link to="/login">Already have an account?</Link>
    </form>
  </div>
</div>
  );
}

export default SignupComponent;

