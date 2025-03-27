import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddproductsComponent = () => {
    let[car_name,setCar_name]=useState('');
    let[car_brand,setCar_brand]=useState('');
    let[car_model,setCar_model]=useState('');
    let[car_desc,setCar_desc]=useState('');
    let[car_price,setCar_price]=useState('');
    let[car_image,setCar_image]=useState('');
    let[loading,setLoading]=useState('');
    let[error,setError]=useState('');
    let[Message,setMessage]=useState('');
    const navigate = useNavigate();
    const user = localStorage.getItem('user');
    const checkUser=()=>{
        if (!user) {
            localStorage.clear();
            return navigate('/login');
        }
    }
    useEffect(()=>{checkUser()},[user]);
    const submitForm=async(e)=>{
        e.preventDefault();
        try {
            setError('');
            setMessage('');
            setLoading('Please wait as we submit your data....');
            const data = new FormData();
            data.append('car_name',car_name);
            data.append('car_brand',car_brand);
            data.append('car_model',car_model);
            data.append('car_desc',car_desc);
            data.append('car_price',car_price);
            data.append('car_image',car_image);
            const response = await axios.post('https://isaaczera.pythonanywhere.com/api/addcar',data);
            setLoading('');
            setError('');
            setMessage(response.data.Message);
            setCar_name('');
            setCar_brand('');
            setCar_model('');
            setCar_desc('');
            setCar_price('');
        } catch (error) {
            setLoading('');
            setMessage('');
            setError(error.message);
        }
    }

  return (
    <div className="row justify-content-center mt-4 getproducts-background">
        <div className="col-md-6 card shadow p-4 bg-info text-white">
            <h2><b>Add Product</b></h2>
            <nav>
                <Link className="btn btn-info mx-2 bg-success" to="/">Home</Link> 
                <Link  className="btn btn-info mx-2 bg-success"to="/signup">Sign Up</Link>
                <Link className="btn btn-info mx-2 bg-success" to="/login">Log In</Link>
            </nav>
            <b className="text-info">{loading}</b>
            <b className="text-danger">{error}</b>
            <b className="text-success">{Message}</b>
            <form onSubmit={submitForm}>
                <input type="text" required className="form-control" placeholder="Enter Car Name" onChange={(e)=>setCar_name(e.target.value)} value={car_name}/> <br />
                <input type="text" required className="form-control" placeholder="Enter Car Brand" onChange={(e)=>setCar_brand(e.target.value)} value={car_brand}/> <br />
                <input type="text" required className="form-control" placeholder="Enter car Model" onChange={(e)=>setCar_model(e.target.value)} value={car_model} /> <br />
                <textarea name="" id=""className="form-control" required placeholder="Car Description" onChange={(e)=>setCar_desc(e.target.value)} value={car_desc}></textarea> <br />
                <input type="number" required className="form-control" placeholder="Enter Car price" onChange={(e)=>setCar_price(e.target.value)}value={car_price} /> <br />
                <label htmlFor="">Car Image</label>
                <input type="file" required className="form-control" onChange={(e)=>setCar_image(e.target.files[0])} /> <br />
                <button className="btn btn-info bg-primary">Add Product</button> <br />


            

            </form>
        </div>
    </div>
  );
}
export default AddproductsComponent;
