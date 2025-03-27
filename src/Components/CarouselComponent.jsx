import {Link} from "react-router-dom"
const CarouselComponent = () => {
    return ( 
        <div>
            <section className="row">
                <div className="col-md-12">
                    <div className="carousel slide" id="mycarousel" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img 
                                    src="images/Mclarencar-5842273_1280.jpg" 
                                    alt="" 
                                    className="d-block w-100" 
                                    height="500px"
                                />
                            </div>

                            <div className="carousel-item">
                                <img 
                                    src="images/2024-lamborghini-reveulto-104-67aa3276672fb.avif" 
                                    alt="" 
                                    className="d-block w-100" 
                                    height="500px"
                                />
                            </div>

                            <div className="carousel-item">
                                <img 
                                    src="images/pexels-autorecords-10550012.jpg" 
                                    alt="" 
                                    className="d-block w-100" 
                                    height="500px"
                                />
                            </div>
                            <div className="carousel-item">
                                <img 
                                    src="images/2023-lamborghini-huracan-sterrato-135-66844c67d8d43.avif" 
                                    alt="" 
                                    className="d-block w-100" 
                                    height="500px"
                                />
                            </div>
                            <div className="carousel-item">
                                <img 
                                    src="images/2025-lamborghini-urus-se-phev-106-67005496322ba.avif" 
                                    alt="" 
                                    className="d-block w-100" 
                                    height="500px"
                                />
                            </div>
                            <div className="carousel-item">
                                <img 
                                    src="images/pagani-zonda-7401736_1280.jpg" 
                                    alt="" 
                                    className="d-block w-100" 
                                    height="500px"
                                />
                            </div>
                            <div className="carousel-item">
                                <img 
                                    src="images/pexels-maria-geller-801267-2127037.jpg" 
                                    alt="" 
                                    className="d-block w-100" 
                                    height="500px"
                                />
                            </div>
                            <div className="carousel-item">
                                <img 
                                    src="images/pexels-mikebirdy-112460.jpg" 
                                    alt="" 
                                    className="d-block w-100" 
                                    height="500px"
                                />
                            </div>
                            <div className="carousel-item">
                                <img 
                                    src="images/mclaren-5987996_1280.jpg" 
                                    alt="" 
                                    className="d-block w-100" 
                                    height="500px"
                                />
                            </div>
                            <div className="carousel-item">
                                <img 
                                    src="images/pexels-ryan-west-838532-1719647.jpg" 
                                    alt="" 
                                    className="d-block w-100" 
                                    height="500px"
                                />
                            </div>

                        </div>

                        <Link 
                            to="#mycarousel" 
                            className="carousel-control-prev" 
                            role="button" 
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </Link>

                        <Link
                            to="#mycarousel" 
                            className="carousel-control-next" 
                            role="button" 
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </Link>

                        {/* <ol className="carousel-indicators">
                            <li 
                                data-bs-target="#mycarousel" 
                                data-bs-slide-to="0" 
                                className="active"
                            ></li>
                            <li 
                                data-bs-target="#mycarousel" 
                                data-bs-slide-to="1"
                            ></li>
                            <li 
                                data-bs-target="#mycarousel" 
                                data-bs-slide-to="2"
                            ></li>
                            <li 
                                data-bs-target="#mycarousel" 
                                data-bs-slide-to="3"
                            ></li>
                            <li 
                                data-bs-target="#mycarousel" 
                                data-bs-slide-to="4"
                            ></li>
                            <li 
                                data-bs-target="#mycarousel" 
                                data-bs-slide-to="5"
                            ></li>
                        </ol> */}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CarouselComponent;