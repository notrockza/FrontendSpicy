import React, { useEffect, useState } from 'react'
import { GetProduct } from "../../../services/Products.Service"
import Footer from '../../../layouts/publicLayout/Footer'
import { Pagination} from 'antd';
import { Link } from "react-router-dom";


function Product() {
    const pageSize = 12;
    const [current, setCurrent] = useState(1);
    const [minIndex, setMinIndex] = useState(0);
    const [maxIndex, setMaxIndex] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [dataProduct , setDataProduct] = useState([]);
    useEffect(()=>{
      loadData();
    },[]);

    async function loadData() {
        let result = await GetProduct();
        console.log("data" + JSON.stringify(result));
        if (result) {
            setDataProduct(result.data);
            setTotalPage(result.data.length / pageSize)
            setMaxIndex(pageSize)
            setMinIndex(0)
        } 
      }

      const onChange = (value) => {
        console.log('changed', value);
      };

      const handleChange = (page) => {
        setCurrent(page);
        setMinIndex((page - 1) * pageSize);
        setMaxIndex(page * pageSize);
      };

      const ShowData = dataProduct.map((data, index)=>{
        return <>
        <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="product-item">
                                    <div className="position-relative bg-light overflow-hidden">
                                        <img className="img-fluid w-100" src={data.image} alt="" />
                                        {/* <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div> */}
                                    </div>
                                    <div className="text-center p-4">
                                        <a className="d-block h5 mb-2" href="">{data.name}</a>
                                        <span className="text-primary me-1">${data.price}</span>
                                        <span className="text-body text-decoration-line-through">$29.00</span>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="w-50 text-center border-end py-2">
                                            <Link className="text-body"  to={"/detail?id=" + data.id} state={{ dataProduct: data }}><i className="fa fa-eye text-primary me-2"></i>View detail</Link>
                                        </small>
                                        <small className="w-50 text-center py-2">
                                            <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                        </small>
                                    </div>
                                </div>
                            </div>
        </>
    });
    return (
        <>
        {/* <Header/> */}
            {/* <!-- Product Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-0 gx-5 align-items-end">
                        <div className="col-lg-6">
                            <div className="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{"max-width": "500px;"}}>
                                <h1 className="display-5 mb-3">Our Products</h1>
                                <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                            <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                                <li className="nav-item me-2">
                                    <a className="btn btn-outline-primary border-2 active" data-bs-toggle="pill" href="#tab-1">Vegetable</a>
                                </li>
                                <li className="nav-item me-2">
                                    <a className="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-2">Fruits </a>
                                </li>
                                <li className="nav-item me-0">
                                    <a className="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-3">Fresh</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div id="tab-2" className="tab-pane fade show p-0">
                        <div className="row g-4">
                            {ShowData}
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="d-flex justify-content-center mb-4">
                <Pagination
                    pageSize={pageSize}
                    current={current}
                    total={dataProduct.length}
                    onChange={handleChange}
                    style={{ bottom: "0px" }}
                />
            </div>
            <Footer/>
            {/* <!-- Product End --> */}
           
        </>
    )
}


export default Product;