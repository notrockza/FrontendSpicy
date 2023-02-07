import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../../layouts/private/privateLayout/HeaderAdmin";
import SidebarAdmin from "../../../layouts/private/privateLayout/SidebarAdmin";
import FooterAdmin from "../../../layouts/private/privateLayout/FooterAdmin";
import xtype from "xtypejs";
import Swal from "sweetalert2";
import NumberFormat from "react-number-format";
import { ImCross, ImCheckmark } from "react-icons/im";
import {
  Alert,
  Button,
  Card,
  Checkbox,
  Empty,
  message,
  Modal,
  Popconfirm,
  Space,
} from "antd";
import {
  ConfrimOrders,
  GetOrderConfrim,
} from "../../../services/Order.Service";
//rcfe
function OrderConfrim() {
  const [dataOrderConfrim, setDataOrderConfrim] = useState([]);
  const [modal, contextHolder] = Modal.useModal();
  useEffect(() => {
    loadOrderConfrim();
  }, []);
  // โหลดใบสั่งซื้อที่ส่งหลักฐานมาและยังไม่ได้ยืนยัน
  async function loadOrderConfrim() {
    const result = await GetOrderConfrim();

    setTimeout(async () => {
      if (result.msg === "OK") {
        setDataOrderConfrim(result.data);
        console.log(result.data);
      } else {
        setDataOrderConfrim([]);
      }
    }, 1000);
  }
  // กดเพื่อยืนยัน
  async function onConfirmOrder(idOrder) {
    const data = [];
    if (xtype(idOrder) === "multi_elem_array") {
      for (let i = 0; i < idOrder.length; i++) {
        data.push(idOrder[i]);
      }
    } else {
      data.push(idOrder);
    }
    const result = await ConfrimOrders(data);
    if (result.msg === "OK") {
      Swal.fire({
        icon: "success",
        title: "Successful!",
        text: "",
        confirmButtonText: "Accept",
      }).then(() => {
        loadOrderConfrim();
      });
    }
  }
  const config = (proofOfPayment) => {
    return {
      title: "Proof of payment",
      okText: "Accept",
      cancelText: "Cancel",
      content: (
        <>
          <img src={"https://localhost:7286/images/" + proofOfPayment} className="m-auto" width='250px' />
        </>
      ),
    };
  };
  const DataDescriptionsOrderConfrim = (props) => {
    return (
      <div>
        <h5 style={{ display: "inline" }}>
          {props.title} :{" "}
          <p
            style={{
              display: "inline",
              fontSize: "18px",
              color: "orange",
            }}
          >
            {" "}
            {props.data}{" "}
          </p>{" "}
        </h5>
      </div>
    );
  };

   // ตัวแสดง
  const showOrderConfrim = dataOrderConfrim.map((data) => {
    const created = new Date(data.created).toLocaleString("th-TH", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const priceTotal = (
      <NumberFormat
        value={data.priceTotal}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"฿"}
      />
    );

    return (
      <div className="col-md-6  mt-4">
        <Card
          hoverable={true}
          style={{
            width: "240%",
          }}  
          actions={data.paymentStatus === false &&[
            <Popconfirm
              title="Cancel post-base"
              onConfirm={() => {
                message.success("Cancel");
              }}
              okText="Accept"
              cancelText="Cancel"
            >
              <ImCross size="25px" className="m-auto" color="red" />
            </Popconfirm>,
            <Popconfirm
              title="Confirm delivery"
              onConfirm={() => {
                message.success("Confirmed");
                onConfirmOrder(data.id);
              }}
              okText="Accept"
              cancelText="Cancel"
            >
              <ImCheckmark size="25px" className="m-auto" color="green" />
            </Popconfirm>,
          ]}
        >
          <div className="row">
            <div className="col-11">
              <Space
                direction="vertical"
                size="small"
                style={{
                  display: "flex",
                }}
              >
                <DataDescriptionsOrderConfrim
                  title="Order"
                  data={data.id}
                />
                <DataDescriptionsOrderConfrim
                  title="Time"
                  data={created}
                />
                  <DataDescriptionsOrderConfrim
                  title="ID User"
                  data={data.accountID}
                />
                <DataDescriptionsOrderConfrim
                  title="Price"
                  data={priceTotal}
                />
              </Space>
            </div>
            <div className="d-flex justify-content-end col-1">
              {/* ตัวแสดงหลักฐาน */}
              {contextHolder}
              <div>
                {data.paymentStatus === true && (
                  <Alert message="Successful" type="success" showIcon />
                )}
                <Button
                  type="primary"
                  size="large"
                  className="mt-2"
                  onClick={() => {
                    // modal.info(()=>{configOrder(data.proofOfPayment)});
                    modal.confirm(config(data.proofOfPayment));
                  }}
                  style={{
                    background: "orange",
                    borderColor: "orange",
                  }}
                >
                  Check payment
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  })


  // ข้อมูลแต่ละอันในใบสั่ง

  return (
    <>
    {/* className="container-scroller" */}
      <div >
        <HeaderAdmin />
        <div className="container-fluid page-body-wrapper">
          <SidebarAdmin />
          {/* className="main-panel" */}
          <div >
          {showOrderConfrim}
            {/* <FooterAdmin /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderConfrim;
