import { Link } from "react-router-dom";

const FooterComponent = () => {
    return ( 
        <div>
            <section className="row bg-primary p-4">
                <div className="col-md-4">
                    <h4 className="text-info text-center">About us</h4>
                    <p className="text-light text-start">
                        Motor sport is a car company dedicated to selling the best cars in the world.The company makes cars easily available for buying to save time.It also ensure the value of the car is at its peak.The company works hand in hand with <b>Zera Corporation</b> to ensure the safety insurance of the car is up to date and all maintenance is cuttered for. <i>Cars for life</i>
                    </p>
                    <p className="text-light text-start">
                       The cars sold are accessed directly from the manufucturers.The cars are sold at a descount of upto 10% off.The documentation of the vehicles is done under strict supervision to ensure value is delivered to our clients
                    </p>
                </div>
                <div className="col-md-4">
                    <h4 className="text-center text-info">Contact us</h4>
                    <form>
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="form-control"
                            required
                        /><br/>
                        <textarea 
                            placeholder="Leave a comment" 
                            rows="7" 
                            className="form-control"
                            required
                        ></textarea>
                        <br/>
                        <input 
                            type="submit" 
                            value="Send Message" 
                            className="btn btn-outline-info"
                            
                        />
                    </form>
                </div>
                <div className="col-md-4">
                    <h4 className="text-center text-info">Stay connected</h4><br/>
                    <Link to="https://facebook.com">
                        <img src="images/fb.png" alt="Facebook" className="me-2" />
                    </Link>
                    <Link to="https://instagram.com">
                        <img src="images/in.png" alt="Instagram" />
                    </Link>
                    <p className="text-light">
                        We value our clients just as they value cars.Contact us on the above plat forms for a far much greater journey with cars
                    </p>
                </div>
            </section>
            <footer className="bg-info text-white text-center p-2">
                <h5>Developed by Dollar Billionaire &copy; 2025. All rights reserved</h5>
            </footer>
        </div>
    );
}

export default FooterComponent;