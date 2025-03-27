import { useState } from "react";
import {Link,useNavigate } from "react-router-dom";
import axios from "axios";

const LoginComponent = () => {
    let[username,setUsername] = useState("")
    let[password,setPassword] = useState("")
    let[loading,setLoading] = useState("")
    let[error,setError] = useState("")
    let[Message,setMessage] = useState("")
    let navigate = useNavigate();
    const submitForm = async(e) => {    
        e.preventDefault()
        try {
            setError("")
            setMessage("")
            setLoading("Please wait as we submit your data....")
            const data = new FormData()
            data.append("username",username)
            data.append("password",password)
            const response = await axios.post("https://isaaczera.pythonanywhere.com/api/login",data)
            if (response.data.user) {
                localStorage.removeItem("user")
                localStorage.clear("user")
                localStorage.setItem("user",JSON.stringify(response.data.user))
                navigate("/addproduct")          
              }else{
                setError(response.data.Message)
            }
            setUsername("")
            setPassword("")
        } catch (error) {
            setLoading("")
            setMessage("")
            setError(error.message)
        }
        setUsername("")
        setPassword("")
    }
    return (
        <div className="row justify-content-center mt-5 getproducts-background">
            
            <div className="col-md-6 card shadow p-5 bg-dark text-white">
                <h2><b>Log In</b></h2>
                <b className="text-info">{loading}</b>
                <b className="text-danger">{error}</b>
                <b className="text-success">{Message}</b>
                <form onSubmit={submitForm}>
                    <input type="text" required placeholder="Enter Username" className="form-control" onChange={(e)=>setUsername(e.target.value)} value={username} /> <br /> 
                    <input type="password" required placeholder="Enter Password"className="form-control" onChange={(e)=>setPassword(e.target.value)} value={password} /> <br /> <br />
                    <button className="btn btn-success">Log In</button> <br /> <div className="text-success"><i>Cars for life</i></div>
                    <b className="text-success">{Message}</b>
                    <Link to="/signup">Don't have an account yet?</Link>
                </form>
                
            </div>
        </div>
    );
}
export default LoginComponent;