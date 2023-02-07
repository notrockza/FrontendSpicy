import React from 'react'
import { Steps } from 'antd';
import "./Transport.css"
const { Step } = Steps;


function Transport() {
    return (
        <>

            <div class="container">
                <article class="card">
                    <header class="card-header"> My Orders / Tracking </header>
                    <div class="card-body">
                        <h6>Order ID: OD45345345435</h6>
                        <article class="card">
                            <div class="card-body row">
                                <div class="col"> <strong>Estimated Delivery time:</strong> <br />29 nov 2019 </div>
                                <div class="col"> <strong>Shipping BY:</strong> <br /> BLUEDART, | <i class="fa fa-phone"></i> +1669 </div>
                                <div class="col"> <strong>Status:</strong> <br /> Picked by the courier </div>
                                <div class="col"> <strong>Tracking #:</strong> <br /> BD045903594059 </div>
                            </div>
                        </article>
                        <div class="card-body">
                            <Steps current={1} >
                                <Step title="Confirmation" description="Payment confirmation." />
                                <Step title="Transport" subTitle="Left 00:00:08" description="In process." />
                                <Step title="Success" description="This is a description." />
                            </Steps>
                        </div>
                        <hr>
                            {/* <ul class="row"> */}
                                {/* <li class="col-md-4">
                                    <figure class="itemside mb-3">
                                        <div class="aside"><img src="http://www.thaitechno.net//uploadedimages/161208025249_croppedImage_5849115155499.jpg" class="img-sm border"/></div>
                                        <figcaption class="info align-self-center">
                                            <p class="title">Dell Laptop with 500GB HDD <br/> 8GB RAM</p> <span class="text-muted">$950 </span>
                                        </figcaption>
                                    </figure>
                                </li> */}
                                {/* <li class="col-md-4">
                                    <figure class="itemside mb-3">
                                        <div class="aside"><img src="http://www.thaitechno.net//uploadedimages/161208025249_croppedImage_5849115155499.jpg" class="img-sm border"/></div>
                                        <figcaption class="info align-self-center">
                                            <p class="title">HP Laptop with 500GB HDD <br/> 8GB RAM</p> <span class="text-muted">$850 </span>
                                        </figcaption>
                                    </figure>
                                </li>
                                <li class="col-md-4">
                                    <figure class="itemside mb-3">
                                        <div class="aside"><img src="http://www.thaitechno.net//uploadedimages/161208025249_croppedImage_5849115155499.jpg" class="img-sm border"/></div>
                                        <figcaption class="info align-self-center">
                                            <p class="title">ACER Laptop with 500GB HDD <br/> 8GB RAM</p> <span class="text-muted">$650 </span>
                                        </figcaption>
                                    </figure>
                                </li> */}
                            {/* </ul> */}
                            {/* <hr>
                                <a href="#" class="btn btn-warning" data-abc="true"> <i class="fa fa-chevron-left"></i> Back to orders</a>
                            </hr> */}
                          </hr>
                    </div>
                </article>

            </div>
        </>
    )
}

export default Transport