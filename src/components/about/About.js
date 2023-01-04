import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/loginContext";
export const About = () => {
    const { loginData } = useContext(LoginContext);
    return (<body class="sub_page">
        <div className="hero_area">
            {/* header section */}
            <header className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <Link className="navbar-brand" to="/">
                            <img src="images/logo.png" alt="" />
                            <span>Lodge</span>
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                {loginData._id && <span>{loginData.email}</span>}
                                <ul className="navbar-nav  ">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/">
                                            Home <span className="sr-only">(current)</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">
                                            {" "}
                                            About
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/jewellery">
                                            Jewellery{" "}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contacts">
                                            Contact us
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">
                                            Login
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register">
                                            Register
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="quote_btn-container ">
                                <Link to="/">
                                    <img src="images/cart.png" alt="" />
                                    <div className="cart_number">0</div>
                                </Link>
                                <form className="form-inline">
                                    <button
                                        className="btn  my-2 my-sm-0 nav_search-btn"
                                        type="submit"
                                    />
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            {/* end header section */}
        </div>
        {/* about section */}
        <section className="about_section layout_padding2-top layout_padding-bottom">
            <div className="design-box">
                <img src="images/design-2.png" alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="detail-box">
                            <div className="heading_container">
                                <h2>About Jewellery Shop</h2>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud
                            </p>
                            <div>
                                <Link to="/about">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="img-box">
                            <img src="images/about-img.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* end about section */}
        {/* client section */}
        <section className="client_section">
            <div className="container">
                <div className="heading_container">
                    <h2>Testimonial</h2>
                </div>
                <h4 className="secondary_heading">What is says our customer</h4>
                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="client_container">
                                <div className="client-id">
                                    <div className="img-box">
                                        <img src="images/client.png" alt="" />
                                    </div>
                                    <div className="name">
                                        <h5>Aliqua</h5>
                                        <h6>Consectetur adipiscing</h6>
                                    </div>
                                </div>
                                <div className="detail-box">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrudLorem ipsum
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link
                        className="carousel-control-prev"
                        to="#carouselExampleControls"
                        role="button"
                        data-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </Link>
                    <Link
                        className="carousel-control-next"
                        to="#carouselExampleControls"
                        role="button"
                        data-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </Link>
                </div>
            </div>
        </section>
        {/* end client section */}
        {/* info section */}
        <section className="info_section ">
            <div className="container">
                <div className="info_container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="info_logo">
                                <Link to="/">
                                    <img src="images/logo.png" alt="" />
                                    <span>Lodge</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info_contact">
                                <Link to="/contacts">
                                    <img src="images/location.png" alt="" />
                                    <span>Address</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info_contact">
                                <Link to="/">
                                    <img src="images/phone.png" alt="" />
                                    <span>+01 1234567890</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info_contact">
                                <Link to="/">
                                    <img src="images/mail.png" alt="" />
                                    <span>demo@gmail.com</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="info_form">
                        <div className="d-flex justify-content-center">
                            <h5 className="info_heading">Newsletter</h5>
                        </div>
                        <form action="">
                            <div className="email_box">
                                <label htmlFor="email2">Enter Your Email</label>
                                <input type="text" id="email2" />
                            </div>
                            <div>
                                <button>subscribe</button>
                            </div>
                        </form>
                    </div>
                    <div className="info_social">
                        <div className="d-flex justify-content-center">
                            <h5 className="info_heading">Follow Us</h5>
                        </div>
                        <div className="social_box">
                            <Link to="/">
                                <img src="images/fb.png" alt="" />
                            </Link>
                            <Link to="/">
                                <img src="images/twitter.png" alt="" />
                            </Link>
                            <Link to="/">
                                <img src="images/linkedin.png" alt="" />
                            </Link>
                            <Link to="/">
                                <img src="images/insta.png" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* end info_section */}
        {/* footer section */}
        <section className="container-fluid footer_section">
            <p>
                © <span id="displayYear" /> All Rights Reserved By
                <a href="https://html.design/">Free Html Templates</a>
            </p>
        </section>
        {/* end footer section */}
    </body>)
}