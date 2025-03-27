import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/logout" className="btn btn-danger">
                Logout
            </Link>
        </nav>
    );
};

export default Navbar;