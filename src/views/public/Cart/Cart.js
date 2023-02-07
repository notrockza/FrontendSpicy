/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NumberFormat from "react-number-format";
import Swal from "sweetalert2";
// import { Empty,Space ,InputNumber} from "antd";
import {
  GetCartAccount,
  DeleteCartAccount,
} from "../../../services/Cart.Service";
import {AddOrder} from "../../../services/Order.Service";

function Cart() {
  const naivgate = useNavigate();
  // const [numberProduct, setNumberProduct] = useState(1);
  const [idAccount, setIDAccount] = useState("");
  const [dataCart, setDataCart] = useState([]);
  const [isLoadingDataCart, setIsLoadingDataCart] = useState(false);
  useEffect(() => {
    const result = localStorage.getItem("idAccount");
    if (!result) {
      naivgate("/login");
    } else {
      setIDAccount(result);
      GetDataCart(result);
    }
  }, []);

  async function GetDataCart(idCustomer) {
    var dataCart = await GetCartAccount(idCustomer);
    console.log(dataCart);
    setIsLoadingDataCart(true);
    if (dataCart) {
      setDataCart(dataCart);
      setIsLoadingDataCart(false);
    } else {
      setDataCart([]);
    }
  }

  async function onDeleteCart(id) {
    Swal.fire({
      title: "Removed?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Accept",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "success deleted",
          showConfirmButton: false,
          timer: 1000,
        }).then(async () => {
          var result = await DeleteCartAccount(id);
          if (result.msg === "OK") {
            GetDataCart(idAccount);
          }
        });
      }
    });
  }

  async function onAddOrder(dataProducts , priceTotalProduct , AccountID) {
    Swal.fire({
      title: 'Order confirmation or not?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Accept',
      cancelButtonText:"Cencel"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("success!", "", "success").then(async() => {
          var result = await AddOrder(
            dataProducts,
            priceTotalProduct,
            AccountID
          );
          if(result.msg === "OK"){
           
            naivgate("/order");
          }
          
        });
      }
    })
}

  const priceTotal = dataCart.reduce((curNumber, item) => {
    return curNumber + item.amountProduct * item.product.price;
  }, 0);
  const showCart = dataCart.map((data) => {
    return (
      <tr>
        <th scope="row" className="border-0">
          <div className="p-2">
            <img src={data.imageProduct} alt="" width="70" className="img-fluid rounded shadow-sm" />
            <div className="ml-3 d-inline-block align-middle">
              <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block align-middle">{data.product.name}</a></h5><span className="text-muted font-weight-normal font-italic d-block">Category: Watches</span>
            </div>
          </div>
        </th>
        <td className="border-0 align-middle"><strong>{data.product.price}</strong></td>
        {/* <Space className='text-primary me-3 '>
                                <InputNumber size="large" min={1} max={data.amountProduct} value={numberProduct} onChange={setNumberProduct}/>
                            </Space> */}
        <td className="border-0 align-middle"><strong>{data.amountProduct}</strong></td>
        <td className="border-0 align-middle"><strong> <NumberFormat
          value={data.product.price * data.amountProduct}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"฿"}
        /></strong></td>
        <td className="border-0 align-middle" onClick={() => {
          onDeleteCart(data.id);
        }}><a href="#" className="text-dark"><i className="fa fa-trash"></i></a></td>
      </tr>
    );
  });
  return (
    <>
      <div className="px-4 px-lg-0">

        {/* <!-- End --> */}

        <div className="pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

                {/* <!-- Shopping cart table --> */}
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" className="border-0 bg-light">
                          <div className="p-2 px-3 text-uppercase">Product</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Price</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Quantity</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Total</div>
                        </th>

                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Remove</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {showCart}




                    </tbody>
                  </table>
                </div>
                {/* <!-- End --> */}
              </div>
            </div>

            <div className="row py-5 p-4 bg-white rounded shadow-sm">
              <div className="col-lg-6">

              </div>
              <div className="col-lg-6">

                <div className="p-4">

                  <ul className="list-unstyled mb-4">
                    <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>฿0.00</strong></li>
                    <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Shipping and handling</strong><strong>฿0.00</strong></li>
                    <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tax</strong><strong>฿0.00</strong></li>
                    <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                      <h5 className="font-weight-bold" ><NumberFormat
                        value={priceTotal}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"฿"}
                      /></h5>
                    </li>
                  </ul><a
                    onClick={()=>{
                      onAddOrder(dataCart , priceTotal ,idAccount)
                    }} className="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Cart