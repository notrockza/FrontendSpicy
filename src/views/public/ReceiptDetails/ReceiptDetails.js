import React, { useState, useRef } from "react";
import { Button } from 'antd';
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useReactToPrint } from 'react-to-print';
import NumberFormat from "react-number-format";
export default function ReceiptDetails(props) {
    const { state } = useLocation();
    const navigate = useNavigate();
    console.log(state)
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp0data',
        // onAfterPrint: ()=> alert('Print success')
    });
    return (
        <section className="py-5">

            <div className='container' >

                <div className="cardd mt-50 mb-50 ">
                    <div className="my-2">
                        <Button className="" type="button" onClick={handlePrint}>
                            <i className="bi bi-printer"></i>
                        </Button>


                    </div>


                    
                    <div className="cardd-title mx-auto ">
                        Order :{state.dataOrder.id}
                    </div>

                    <div className="navs">
                        <ul className="mx-auto">
                            {/* <li><a href="#">Account</a></li> */}
                            <li className="active"> <a><a>Detail Payment</a></a></li>
                        </ul>
                    </div>
                    <form >
                        <span id="cardd-header">Transfer payment:</span>
                        <div className="row row-1">
                            <div className="col-2"><img className="img-fluid" src="https://cutewallpaper.org/24/time-logo-png/download-hd-clock-icon-clock-circle-logo-png-transparent-clock-color-icon-pngtime-icon-png-free-transparent-png-images-pngaaacom.png" width="40px" /></div>
                            <div className="col-7">
                                <span id="cardd-inner">2022-07-16T13:50:35.5809215+07:00</span>
                            </div>
                        </div>
                        <div className="row row-1">
                            <div className="col-2"><img className="img-fluid" src="https://i.pinimg.com/originals/e8/ca/3f/e8ca3ffb013fc4fa42ce5d852171d436.jpg" width="50px" /></div>
                            <div className="col-7">
                                <span id="cardd-inner"><NumberFormat
                                    value={state.dataOrder.priceTotal}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"฿"}
                                /></span>
                            </div>
                        </div>

                        <div className="row three" >
                            <div className="m-4 ">
                                <label className="mx-3 ">Proof of payment
                                </label>
                            </div>
                            <img ref={componentRef} className="card-img-top mb-5 mb-md-0" src={"https://localhost:7286/images/" + state.dataOrder.proofOfPayment} />
                        </div>

                        <button onClick={() => {
                            navigate("/order")
                        }} className="btn d-flex mx-auto"><b>Confirm</b></button>
                    </form>
                </div>
            </div>
        </section>


    )
}

