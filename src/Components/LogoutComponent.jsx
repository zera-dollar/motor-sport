import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const LogoutComponent = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear user data from localStorage or sessionStorage
        localStorage.removeItem("authToken"); // Replace "authToken" with your token key
        localStorage.removeItem("userData"); // Optional: Clear additional user data
        localStorage.clear("user")

        // Redirect to the login page or home page
        navigate("/Signup");
    }, [navigate]);

    return (
        <div className="text-center mt-5">
            <h1>Logging Out...</h1>
            <Navbar/>
        </div>
    );
};

export default LogoutComponent;