import React, { useEffect, useState } from "react";
import { GetOrderAll } from "../../../services/Order.Service";
import OrderProductList from "./OrderProductList";
import { Button } from 'antd';
import {useNavigate ,Link } from "react-router-dom";

function Order() {
  const [size, setSize] = useState('large');
  const [dataOrder, setDataOrder] = useState([]);
  const [idAccount, setIDAccount] = useState("");
  useEffect(() => {
    var result = localStorage.getItem("idAccount");
    if (result) {
      setIDAccount(result);
      loadOrderData(result);
    }
  }, []);
  async function loadOrderData(id) {
    var result = await GetOrderAll(id);
    if (result) {
      setDataOrder(result);
      console.log(result);
    }
  }

  const showOrder = dataOrder.map((data) => {
    const classStatusPayment = data.proofOfPayment === null ? "danger" : "success";
    const StatusPayment = data.proofOfPayment === null ? "Have not paid " : "Pending";

    return (
      <div className="container mt-5 ">
        <div className="card p-4 mt-3">
          <div className="first">
            <h6 className="heading">Order</h6>
           
          </div>
          
          <OrderProductList idOrder={data.id} />
         

          <h6>Total purchase order {data.priceTotal}฿</h6>

          <div className="third mt-4">

          {data.proofOfPayment === null ? (

            <Link 
            to="/payment"
            state={{ dataOrder: data }}
            >
            <Button className="third mt-4" type="primary" danger>
              <i className="fa fa-clock-o" ></i>To pay
            </Button>
            </Link>
 ) : (
            <Link to="/receiptdetails"
            state={{ dataOrder: data }}
            >
              
            <Button className="third mt-4 ml-3" type="primary" danger>
              <i className="fa fa-clock-o"></i> Examine
            </Button>
            </Link>
    )}
     <Link to="/transport">
            <Button className="third mt-4 ml-3" >
              <i className="fa fa-clock-o"></i> Transport
            </Button>
            </Link>
            <Button className="third mt-4  ml-3">
              <i className="fa fa-clock-o"></i> Buy again
            </Button>
            <div className="time d-flex flex-row align-items-center justify-content-between mt-3">
              <div></div>
              <div className={`text-${classStatusPayment}`}>
                <i className="fa fa-clock-o"></i> {StatusPayment}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="newspaper">{showOrder}</div>
    </React.Fragment>
  );
}

export default Order;
