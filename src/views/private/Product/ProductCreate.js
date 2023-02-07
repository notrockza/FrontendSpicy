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
import { GetCategoryProduct } from "../../../services/CategoryProduct.Service";
import { ValidateProduct } from "../Validate/ValidateProduct";
import { Input, Select, Upload, message } from 'antd';
import { AddProduct, UpdateProduct } from "../../../services/Products.Service";
import Swal from "sweetalert2";
import { UploadOutlined } from '@ant-design/icons';

function ProductCreate() {
  const { state } = useLocation();

  const { Option } = Select;
  const navigate = useNavigate();
  const [showImg, setShowImg] = useState("");
  const [image, setImg] = useState("");
  const [validated, setValidated] = useState(false);
  const [categoryProduct, setCategoryProduct] = useState([]);

  useEffect(() => {
    loadCate();
    if (state) {
      console.log(state)
    }
  }, []);

  async function loadCate() {
    var resultCate = await GetCategoryProduct();
    if (resultCate) {
      //console.log(resultCate)
      setCategoryProduct(resultCate);
    }
  }

  const displatCate = categoryProduct.map((e) => {
    return (
      <Option value={e.id}>{e.name}</Option>
    );
  });

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

  async function onAddproduct(data, image) {
    if (state !== null) {
      var result = await UpdateProduct(data, image);
      if (result.msg === "OK") {
        Swal.fire({
          icon: "success",
          title: "Edit successful!",
          confirmButtonText: "Accept",
        }).then(() => {
          navigate('/admin/product');
        });
      }
    } else {
      var result = await AddProduct(data, image);
      if (result.msg === "OK") {
        Swal.fire({
          icon: "success",
          title: "Product add successfully!",
          confirmButtonText: "Accept",
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
        name: state !== null ? state.dataProduct.name : "",
        id: state !== null ? state.dataProduct.id : "",
        category: state !== null ? state.dataProduct.categoryID : "",
        price: state !== null ? state.dataProduct.price : "",
        stock: state !== null ? state.dataProduct.stock : "",
        detail: state !== null ? state.dataProduct.detail : "",
      }}
      enableReinitialize={true}
      validationSchema={ValidateProduct}
      onSubmit={(values) => {

        onAddproduct(values, image)

      }}
    >
      {({
        errors,
        touched,
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
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
                            {state !== null ?( <h4 className="card-title">Product Edit</h4> ):<h4 className="card-title">Product Careat</h4>}
                              
                              <p className="card-description">
                              {state !== null ?( <div>Form</div> ):<div>Careat</div>}
                             
                              
                              </p>
                              <Form onSubmit={handleSubmit} className="forms-sample">
                                <div className="form-group ">
                                  <label >Id</label>

                                  <InputProduct
                                    title="id"
                                    name="id"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.id || ""}
                                    touched={touched.id}
                                    errors={errors.id}
                                  />

                                </div>
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
                                  <label >Price</label>
                                  <InputProduct
                                    title="price"
                                    name="price"
                                    placeholder="orice"

                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.price || ""}
                                    touched={touched.price}
                                    errors={errors.price}
                                  />

                                </div>

                                <div className="form-group">

                                  <label >Stock</label>
                                  <InputProduct
                                    title="stock"
                                    name="stock"
                                    placeholder="stock"

                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.stock || ""}
                                    touched={touched.stock}
                                    errors={errors.stock}
                                  />

                                </div>

                                <div className="form-group">
                                  <label >Category</label>
                                  <Select

                                    placeholder="ประเภทสินค้า"
                                    status={`${touched.category && errors.category ? "error" : ""
                                      }`}
                                    style={{
                                      width: "100%",
                                    }}
                                    onChange={(data, dataMore) => {
                                      if (dataMore !== null) {
                                        setFieldValue("category", data);
                                      }
                                    }}
                                    value={values.category || ""}
                                    onBlur={handleBlur}
                                  >
                                    <Option value="">...</Option>
                                    {displatCate}
                                  </Select>

                                </div>


                                <div className="form-group">
                                  <label >Detail</label>
                                  <InputProduct
                                    title="detail"
                                    name="detail"
                                    placeholder="detail"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.detail || ""}
                                    touched={touched.detail}
                                    errors={errors.detail}

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
                      <img src={state.dataProduct.image} width="80%"/>
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

export default ProductCreate