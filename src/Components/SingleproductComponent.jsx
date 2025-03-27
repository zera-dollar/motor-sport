import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Singleproduct = () => {
    let[phone,setPhone] = useState("")
    let[loading,setLoading] = useState("")
    let[success,setSuccess] = useState("")
    let[error,setError] = useState("")
    const navigate = useNavigate()
    const submitForm = async(e)=>{
        e.preventDefault();
        setError("")
        setSuccess("")
        setLoading("Please wait as we process the payment")
        try {
            const data = new FormData();
            data.append("phone",phone)
            data.append("amount",product.car_price)
            const response = await axios.post("https://isaaczera.pythonanywhere.com/api/mpesa_payment",data)
            setLoading("")
            setSuccess(response.data.message)
        } catch (error) {
            setLoading("")
            setError(error.message)
        }
    }
    const {product} = useLocation().state || {}
    const img_ulr = "https://isaaczera.pythonanywhere.com/static/images/"
    return ( 
        <div >
            <div className="row justify-content-center mt-3">
                <div className="col-md-3 card shadow height-200px bg-dark">
                    <img src={img_ulr + product.car_image} alt="" />
                </div>
                <div className="col-md-3 card shadow">
                    
                    <div className="h2 b text-muted">{product.car_name}</div>
                    <div className="h3 b text-warning"> Ksh:{product.car_price}</div>
                    <p className="text-success">{product.car_desc}</p>
                    <b className="text-warning">{loading}</b>
                    <b className="text-danger">{error}</b>
                    <b className="text-success">{success}</b>
                    <form onSubmit={submitForm}>
                    <input type="number" readOnly value= {product.car_price}required className="form-control" />
                    <input type="tel"required placeholder="Enter Mpesa No 2547xxxxxxxxx" onChange={(e)=>setPhone(e.target.value)} className="form-control"/> <br />
                    <button className="btn btn-primary">Pay now</button>
                    <button className="btn btn-success w-20" onClick={()=>navigate("/")}>Home</button>
                    </form>
                   
                </div>
            </div>
        </div>
     );
}
 
export default Singleproduct;