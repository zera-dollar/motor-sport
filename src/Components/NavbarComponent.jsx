import { Link } from "react-router-dom";

const NavbarComponent = () => {
    return ( 
      <div className="container-fluid">

        <section className="row">
            <div className="col-md-12">
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <Link to="/" className="navbar-brand">Motor Sport</Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                        >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/addproduct" className="nav-link">Add Product</Link>
                        </div>

                        <div className="navbar-nav ms-auto">
                            <Link to="/signin" className="nav-link">Log In</Link>
                            <Link to="/signup" className="nav-link">Sign Up</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
        </div>  
    );
}

export default NavbarComponent;