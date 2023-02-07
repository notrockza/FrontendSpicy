import React from 'react'
import Footer from '../../../layouts/publicLayout/Footer'
import Header from '../../../layouts/publicLayout/Header'


function About() {
  return (
   <>
    

{/* <Header></Header> */}



    {/* <!-- Feature Start --> */}
    <div className="container-fluid bg-light bg-icon my-5 py-6">
        <div className="container">
            <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{"max-Width": "500px"}}>
                <h1 className="display-5 mb-3">Our Features</h1>
                <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="bg-white text-center h-100 p-4 p-xl-5">
                        <img className="img-fluid mb-4" src="img/icon-1.png" alt=""/>
                        <h4 className="mb-3">Natural Process</h4>
                        <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                        <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="bg-white text-center h-100 p-4 p-xl-5">
                        <img className="img-fluid mb-4" src="img/icon-2.png" alt=""/>
                        <h4 className="mb-3">Organic Products</h4>
                        <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                        <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="bg-white text-center h-100 p-4 p-xl-5">
                        <img className="img-fluid mb-4" src="img/icon-3.png" alt=""/>
                        <h4 className="mb-3">Biologically Safe</h4>
                        <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                        <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Feature End --> */}


    


    {/* <!-- Firm Visit Start --> */}
    <div className="container-fluid bg-primary bg-icon mt-5 py-6">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-md-7 wow fadeIn" data-wow-delay="0.1s">
                    <h1 className="display-5 text-white mb-3">Visit Our Firm</h1>
                    <p className="text-white mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
                </div>
                <div className="col-md-5 text-md-end wow fadeIn" data-wow-delay="0.5s">
                    <a className="btn btn-lg btn-secondary rounded-pill py-3 px-5" href="">Visit Now</a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Firm Visit End --> */}


    {/* <!-- Testimonial Start --> */}
    <div className="container-fluid bg-light bg-icon py-6 mb-5">
        <div className="container">
            <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{"maxWidth": "500px"}}>
                <h1 className="display-5 mb-3">Customer Review</h1>
                <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                <div className="testimonial-item position-relative bg-white p-5 mt-4">
                    <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg" alt=""/>
                        <div className="ms-3">
                            <h5 className="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item position-relative bg-white p-5 mt-4">
                    <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" alt=""/>
                        <div className="ms-3">
                            <h5 className="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item position-relative bg-white p-5 mt-4">
                    <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg" alt=""/>
                        <div className="ms-3">
                            <h5 className="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item position-relative bg-white p-5 mt-4">
                    <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 rounded-circle" src="img/testimonial-4.jpg" alt=""/>
                        <div className="ms-3">
                            <h5 className="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Testimonial End --> */}


    {/* <!-- Blog Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{"maxWidth": "500px"}}>
                <h1 className="display-5 mb-3">Latest Blog</h1>
                <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <img className="img-fluid" src="img/blog-1.jpg" alt=""/>
                    <div className="bg-light p-4">
                        <a className="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>
                        <div className="text-muted border-top pt-4">
                            <small className="me-3"><i className="fa fa-user text-primary me-2"></i>Admin</small>
                            <small className="me-3"><i className="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <img className="img-fluid" src="img/blog-2.jpg" alt=""/>
                    <div className="bg-light p-4">
                        <a className="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>
                        <div className="text-muted border-top pt-4">
                            <small className="me-3"><i className="fa fa-user text-primary me-2"></i>Admin</small>
                            <small className="me-3"><i className="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <img className="img-fluid" src="img/blog-3.jpg" alt=""/>
                    <div className="bg-light p-4">
                        <a className="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>
                        <div className="text-muted border-top pt-4">
                            <small className="me-3"><i className="fa fa-user text-primary me-2"></i>Admin</small>
                            <small className="me-3"><i className="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Blog End --> */}
    <Footer/>



    
   </>
  )
}

export default About