import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CarouselComponent from "./CarouselComponent";
import FooterComponent from "./FooterComponent";

const Getproductscomponent = () => {
    let[products,setProducts] =  useState([])
    let[error,setError] = useState("")
    let[loading,setLoading] = useState("")
    const img_url = "https://isaaczera.pythonanywhere.com/static/images/"
    const navigate = useNavigate()
    const getProducts =async()=>{
        setError("")
        setLoading("Please wait ....receiving products...")
        try {
            const response = await axios.get("https://isaaczera.pythonanywhere.com/api/getproducts")
            setProducts(response.data.products)
            setLoading("")
        } catch (error) {
            setLoading("")
            setError(error.message)
        }
    }
    // useEffect(function,depandacy)

    useEffect(()=>{
        getProducts();
    },[])
    return ( 
        <div className="row getproducts-background">
            
            <b className="text-warning">{loading}</b>
            <b className="text-danger">{error}</b>
            <nav>
    
                <Link  className="btn btn-info mx-2"to="/signup">Sign Up</Link>
                <Link className="btn btn-info mx-2" to="/login">Log In</Link>
                <Link className="btn btn-info mx-2" to="/addproduct">Add Product</Link>
                <Link className="btn btn-info mx-2" to="/logout">Log Out</Link>
            </nav>
            {/* carousel */}
            <CarouselComponent/>
            {/* content */}
            {products.map((product)=>(
                      <div className="col-md-3 justify-content-center md-4">
                      <div className="card shadow">
                          <img src={img_url + product.car_image} alt="" className="car_img" />
                          <div className="card-body">
                              <h5 className="mt-2">{product.car_name}</h5>
                              <p className="text-muted">{product.car_desc? product.car_desc.slice(0,100):"No description available"}</p>
                              <b className="text-warning">Ksh:{product.car_price}</b>
                              <button className="btn btn-info w-100" onClick={()=>navigate("/singleproduct",{state:{product}})}>View Product</button>
                          </div>
                      </div>
                      </div>
                      ))}
            {/* footer */}
            <FooterComponent/>
        </div>
     );
}
 
export default Getproductscomponent;