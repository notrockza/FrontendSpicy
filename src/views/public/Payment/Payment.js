/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './Paymentcss.css';
import { Button } from 'antd';
import { useLocation, useNavigate } from "react-router-dom";
import { PaymentOrder } from '../../../services/Order.Service';
import Swal from "sweetalert2";
import NumberFormat from "react-number-format";

function Payment() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [showImage, setShowImage] = useState("");
    const [image, setImage] = useState("");

    const changeHandler = (event) => {
        console.log(event.target.files[0])
        if (event.target.files[0] != null) {
            setImage(event.target.files[0]);
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onloadend = function (e) {
                setShowImage(reader.result)
            }.bind(this);
        }
    }

    async function onPaymentOrder(id, image) {
        const result = await PaymentOrder(id, image);
        if (result.msg === "OK") {
            Swal.fire(
                'Successful ',
                'waiting!',
                'success'
            ).then(() => {
                navigate("/order");
            })
        } else {
            Swal.fire({
                icon: "error",
                title: "an error occurred",
                text: "",
            });
        }
    }

    const checkShowImage = showImage !== "";
    return (
        <div className='container'>
            <div class="cardd mt-50 mb-50 ">
                <div class="cardd-title mx-auto ">
                    Order #{state.dataOrder.id}
                </div>
                <div class="navs">
                    <ul class="mx-auto">
                        {/* <li><a href="#">Account</a></li> */}
                        <li class="active"><a href="#">Payment</a></li>
                    </ul>
                </div>
                <form>
                    <span id="cardd-header">Transfer payment:</span>
                    <div class="row row-1">
                        <div class="col-2"><img class="img-fluid" src="https://www.kasikornbank.com/SiteCollectionDocuments/about/img/logo/logo.png" width="50px" /></div>
                        <div class="col-7">
                            <span id="cardd-inner">KBANK \\ 012-3-45678-9</span>
                        </div>
                        {/* <div class="col-3 d-flex justify-content-center">
                            <a href="#">Remove card</a>
                        </div> */}
                    </div>
                    <div class="row row-1">
                        <div class="col-2"><img class="img-fluid" src="https://img.icons8.com/color/48/000000/mastercard-logo.png" /></div>
                        <div class="col-7">
                            <span id="cardd-inner">Account : นายทนงทวย คงควรคอย</span>
                        </div>
                        {/* <div class="col-3 d-flex justify-content-center">
                            <a href="#">Remove card</a>
                        </div> */}
                    </div>
                    <span id="cardd-header">Total price:</span>
                    {/* <div class="row-1">
                    
                        <div class="row row-2">
                            <span id="cardd-inner">Total price</span>
                        </div>
                        <div class="row row-2">
                      
                        </div>
                    </div> */}

                    <div class="row row-1">
                        <div class="col-2"><img class="img-fluid" src="https://i.pinimg.com/originals/e8/ca/3f/e8ca3ffb013fc4fa42ce5d852171d436.jpg" /></div>
                        <div class="col-7">

                            <span id="cardd-inner"><NumberFormat
                                value={state.dataOrder.priceTotal}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"฿"}
                            /></span>
                        </div>
                        {/* <div class="col-3 d-flex justify-content-center">
                            <a href="#">Remove card</a>
                        </div> */}
                    </div>
                    <div class="row three">
                        {/* <div class="col-7">
                            <div class="row-1">
                                <div class="row row-2">
                                    <span id="cardd-inner">ID ผู้ใช้</span>
                                </div>
                                <div class="row row-2">
                                    <input type="text" placeholder="5134-5264-4" />
                                </div>
                            </div>
                        </div>

                        <div class="col-2">

                            <span id="cardd-inner">ID ผู้ใช้</span>
                        </div>
                        <div class="col-2">
                            <span id="cardd-inner">ID ผู้ใช้</span>
                        </div> */}
                        <div className="m-4 ">
                            <label className="mx-3 ">Proof of payment
                                <input
                                    type="file"
                                    accept="jpeg,png"
                                    hidden
                                    onChange={changeHandler}
                                />
                                <a className="btn btn-info text-white" type="submit">
                                Upload
                                </a>
                            </label>
                            {checkShowImage && (
                                <a
                                    className="btn btn-success text-white ml-3"
                                    type="submit"
                                    onClick={() => {
                                        onPaymentOrder(state.dataOrder.id, image);
                                    }}
                                >
                                    Accept
                                </a>
                            )}
                        </div>
                        {checkShowImage && (
                            <img src={showImage} style={{ height: "1000px" ,width:"" }} />
                        )}
                    </div>

                    {/* <button class="btn d-flex mx-auto"><b>Confirm</b></button> */}
                </form>
            </div>
        </div>
    )
}

export default Payment