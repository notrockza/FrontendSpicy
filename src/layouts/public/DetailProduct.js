import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { InputNumber, Space ,Button } from 'antd';

import Footer from '../publicLayout/Footer'
import { AddCartAccount } from '../../services/Cart.Service';
import Swal from "sweetalert2";
import { GetDetailAll } from '../../services/Products.Service'

function Detail() {
    const { state } = useLocation();
    const [numberProduct, setNumberProduct] = useState(1);
    const [idAccounts, setIDAccounts] = useState("");
    const [DetailProduct, setDetailProduct] = useState([]);
    const [idProductimage, setidProduct] = useState([]);

    useEffect(() => {
        var resultID = localStorage.getItem("idAccount");
        setIDAccounts(resultID);
        if (state) {
            loadDetail(state.dataProduct.id);
        }
    }, []);
    const onChange = (value) => {
        console.log('changed', value);
    };
    async function AddCart(idAccount, idProduct, amountProduct) {
        var result = await AddCartAccount(idAccount, idProduct, amountProduct);
        if (result.msg === "OK") {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Add Succes',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }


    

    async function loadDetail(idProduct) {
        var resultetail = await GetDetailAll(idProduct);
        if (resultetail.msg === "OK") {
          console.log(resultetail)
          setDetailProduct(resultetail.data);
        }
      }

      const displatImageDetail = DetailProduct.map((e) => {
        return (
            <div className="col-lg-3 col-md-3 wow fadeInUp" data-wow-delay="0.1s">
                <img className="img-fluid" height="700px" width="400px" src={e.image} alt="" />
            </div>
        );
      });

    return (
        <>

            {/* <!-- About Start --> */}
            {/* <Header/> */}
            {/* py-5 */}
            <div className="container-xxl ">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="about-img position-relative overflow-hidden p-5 pe-0">
                                {/* <img className="img-fluid w-100" src="img/about.jpg"/> */}
                                {state.dataProduct.image !== "" && <img className="card-img-top mb-5 mb-md-0" src={state.dataProduct.image} alt="..." />}
                                {state.dataProduct.image === "" && <img className="card-img-top mb-5 mb-md-0" src="img/about.jpg" alt="..." />}
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            
                            <h1 className="display-5 mb-4">{state.dataProduct.name}</h1>
                            {/* <p className="mb-4">{state.dataProduct.detail}</p> */}
                            <p><i className="fa fa-credit-card text-primary me-3"></i>Price : {state.dataProduct.price}</p>
                            <p><i className="fa fa-archive text-primary me-3"></i>Stock : {state.dataProduct.stock}</p>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
                            <Space className='text-primary me-3 '>
                                <InputNumber size="large" min={1} max={state.dataProduct.stock} value={numberProduct} onChange={setNumberProduct} />
                            </Space>

                            {/* <p><i className="fa fa-check text-primary me-3"></i>Clita duo justo magna dolore erat amet</p> */}
                            {/* <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">Add Cart</a> */}
                            
                                <button className="btn btn-primary rounded-pill py-3 px-5 mt-0 " type="button" onClick={() => {
                                    AddCart(idAccounts, state.dataProduct.id, numberProduct)
                                }}>

                                    
                                    <i className="bi-cart-fill me-1"></i>
                                    Add Cart
                                </button>
                               

                         
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}




    {/* <!-- Blog Start --> */}
    <div className="container-xxl ">
        <div className="container">
            <div className="row g-4">
                {/* <div className="col-lg-3 col-md-3 wow fadeInUp" data-wow-delay="0.1s">
                    <img className="img-fluid" src="img/blog-1.jpg" alt=""/>
                   
                </div> */}
                {displatImageDetail}
                {/* <div className="col-lg-3 col-md-3 wow fadeInUp" data-wow-delay="0.3s">
                    <img className="img-fluid" src="img/blog-2.jpg" alt=""/>
                   
                </div>
                <div className="col-lg-3 col-md-3 wow fadeInUp" data-wow-delay="0.5s">
                    <img className="img-fluid" src="img/blog-3.jpg" alt=""/>
                   
                </div>
                <div className="col-lg-3 col-md-3 wow fadeInUp" data-wow-delay="0.5s">
                    <img className="img-fluid" src="img/blog-3.jpg" alt=""/>
                   
                </div> */}
                
            </div>
        </div>
    </div>
    {/* <!-- Blog End --> */}
            <Footer />
        </>

    )
}

export default Detail