import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Formik, ErrorMessage, Form } from "formik";
import { useNavigate, useLocation } from "react-router-dom";
import HeaderAdmin from '../../../layouts/private/privateLayout/HeaderAdmin';
import SidebarAdmin from '../../../layouts/private/privateLayout/SidebarAdmin';
import FooterAdmin from '../../../layouts/private/privateLayout/FooterAdmin';


import { ValidateUser } from "../Validate/ValidateUser";
import { Input, Upload, message } from 'antd';
import { Registers , UpdateUser } from "../../../services/Account.Service";
import Swal from "sweetalert2";
import { UploadOutlined } from '@ant-design/icons';

function UserCreate() {
  const { state } = useLocation();


  const navigate = useNavigate();
  const [showImg, setShowImg] = useState("");
  const [image, setImg] = useState("");
  const [validated, setValidated] = useState(false);
  const [categoryProduct, setCategoryProduct] = useState([]);

  useEffect(() => {
    if (state) {
      console.log(state)
      
    }
  }, []);

  




  const InputProduct = (props) => {
    return (
      <>
        <Input
          placeholder={props.title}
          name={props.name}
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
          status={`${props.touched && props.errors
            ? "error"
            : ""
            }`}
          className="form-control"
        />
        <ErrorMessage
          component="div"
          name={props.name}
          className="text-danger"
        />
      </>
    );
  };

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },

    onChange(info) {
      if (info.file.status !== 'uploading') {
        // console.log(info.file, info.fileList);
        setImg(info.file.originFileObj);
      }

      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
        getBase64(info.file.originFileObj, (url) => {
          setShowImg(url);
        });
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  
  async function onAddUser(name , email , password , tell ,address , image) {
    console.log("มาไหมนิ")
    if (state !== null) {
      var result = await UpdateUser(name , email , password , tell ,address , image);
      if (result.msg === "OK") {
        Swal.fire({
          icon: "success",
          title: "แก้ไขเรียบร้อย!",
          confirmButtonText: "ตกลง",
        }).then(() => {
          navigate('/admin/product');
        });
      }
    } else {
        console.log("test",name , email , password , tell ,address , image)
      var result = await Registers(name , email , password , tell ,address , image);
      if (result.msg === "OK") {
        Swal.fire({
          icon: "success",
          title: "เพิ่มสินค้าเรียบร้อย!",
          confirmButtonText: "ตกลง",
        }).then(() => {
          navigate('/admin/product');
        });
      }
    }

  }

  return (


    <Formik
      // ค่าเริ่มต้น
      initialValues={{
        // categoryName //categoryID
        name: state !== null ? state.dataAccount.name : "",
        email: state !== null ? state.dataAccount.email : "",
        password: state !== null ? state.dataAccount.password : "",
        tell: state !== null ? state.dataAccount.tell : "",
        address: state !== null ? state.dataAccount.address : "",

      }}
      enableReinitialize={true}
      validationSchema={ValidateUser}
      onSubmit={(values) => {

        onAddUser(values, image)

      }}
    >
      {({
        errors,
        touched,
        values,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => {
        return (
          <>

              <div className="container-scroller">
                <HeaderAdmin />
                <div className="container-fluid page-body-wrapper">
                  <SidebarAdmin />
                  <div className="main-panel">

                    <div className="content-wrapper">
                      <div className="row">
                        <div className="col-md-6 grid-margin stretch-card">
                          <div className="card">
                            <div className="card-body">
                            {state !== null ?( <h4 className="card-title">User Edit</h4> ):<h4 className="card-title">User Careat</h4>}
                              
                              <p className="card-description">
                              {state !== null ?( <div>Form</div> ):<div>Careat</div>}
                             
                              
                              </p>
                              <Form onSubmit={handleSubmit} className="forms-sample">
                               
                                <div className="form-group">
                                  <label >Name</label>
                                  <InputProduct
                                    title="name"
                                    name="name"
                                    placeholder="Name"

                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name || ""}
                                    touched={touched.name}
                                    errors={errors.name}
                                  />

                                </div>
                                <div className="form-group">
                                  <label >Email</label>
                                  <InputProduct
                                    title="email"
                                    name="email"
                                    placeholder="email"

                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email || ""}
                                    touched={touched.email}
                                    errors={errors.email}
                                  />

                                </div>

                                <div className="form-group">
                                  <label >Password</label>
                                  <InputProduct
                                    title="password"
                                    name="password"
                                    placeholder="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password || ""}
                                    touched={touched.password}
                                    errors={errors.password}

                                  />

                                </div>

                               


                                <div className="form-group">
                                  <label >Tell</label>
                                  <InputProduct
                                    title="tell"
                                    name="tell"
                                    placeholder="tell"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.tell || ""}
                                    touched={touched.tell}
                                    errors={errors.tell}

                                  />

                                </div>

                                <div className="form-group">
                                  <label >Address</label>
                                  <InputProduct
                                    title="address"
                                    name="address"
                                    placeholder="address"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.address || ""}
                                    touched={touched.address}
                                    errors={errors.address}

                                  />

                                </div>

                                

                                <div className="form-group">
                                  <Upload {...props} >
                                    <a  icon={<UploadOutlined />}>
                                      Upload
                                    </a>
                                  </Upload> 


                                </div>
                                <div className="col-9 d-flex justify-content-end">
                                  {/* {showImg && (
                                    <img
                                      src={showImg}
                                      alt="avatar"
                                      style={{
                                        width: "250px",
                                      }}
                                    />
                                  )} */}
                                   {state !== null  ? (
                       showImg !== "" ? (
                        <div className="col-md-12 d-flex justify-content-center mt-3 ">
                          <img src={showImg} width="80%" />
                        </div>
                      ) :
                      <img src={state.dataAccount.image} width="80%"/>
                    ) : (
                      showImg !== "" && (
                        <div className="col-md-12 d-flex justify-content-center mt-3 ">
                          <img src={showImg} width="80%" />
                        </div>
                      )
                    )}
                                </div>

                                <div className="form-check form-check-flat form-check-primary">





                                </div>
                                <Button type="submit" className="btn btn-primary mr-2">Submit</Button>

                                <Button  onClick={() => {
                          navigate("/admin/product");
                        }} className="btn btn-light">Cancel</Button>
                             
                              </Form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <FooterAdmin />

                  </div>
                </div>
              </div>
        


           
          </>
        );
      }}
    </Formik>


  )
}

export default UserCreate