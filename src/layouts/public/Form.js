import React from 'react'

import Footer from '../publicLayout/Footer'
import logo from '../../assets/Logo/80254853_146557020351880_8779454856632481429_n.jpg';
function Form() {
  return (
    <>




    {/* <!-- Contact Start --> */}
    <div className="container-xxl py-6">
        <div className="container">
            <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{"max-width" : "500px;"}}>
                <h1 className="display-5 mb-3">Login</h1>
                <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div className="row g-5 justify-content-center">
                {/* <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.1s">
                    <img className="img-fluid w-100" src={logo} widt="100px" height="500px" alt="" />
                    <div className="bg-primary text-white d-flex flex-column justify-content-center h-100 p-5">
                        <h5 className="text-white">Call Us</h5>
                        <p className="mb-5"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <h5 className="text-white">Email Us</h5>
                        <p className="mb-5"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                        <h5 className="text-white">Office Address</h5>
                        <p className="mb-5"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        <h5 className="text-white">Follow Us</h5>
                        <div className="d-flex pt-2">
                            <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-square btn-outline-light rounded-circle me-0" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div> */}
                <div className="col-lg-7 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                    {/* <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p> */}
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                    <label for="email">Your Email</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                    <label for="subject">Subject</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{"max-width" : "200px;"}}></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div>
                            
                            <div className="col-12 text-center">
                                <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Login</button>
                              
                              

                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    
    </>
  )
}

export default Form