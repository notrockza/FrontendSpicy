import React ,{useState}from 'react'
import Footer from '../../../layouts/publicLayout/Footer'
import Header from '../../../layouts/publicLayout/Header'
import { useNavigate, Link } from "react-router-dom";
import { Registers } from "../../../services/Account.Service";
import Swal from "sweetalert2";
import { Button, message, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";



const defaultState = {
    name: null,
    email: null,
    password: null,
    tell: null,
    address: null,
    nameError: null,
    emailError: null,
    passwordError: null,
    tellError: null,
    addressError: null,
  };
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

function Register() {
    
        const navigate = useNavigate();
        const [imageUrl, setImageUrl] = useState();
        const [state, setState] = useState(defaultState);
        const [image, setImage] = useState(null);
        
        function NamenputChange(event) {
          const value = event.target.value;
          setState({
            ...state,
            name: value,
          });
        }
        function EmailnputChange(event) {
          const value = event.target.value;
          setState({
            ...state,
            email: value,
          });
        }
        function PasswordnputChange(event) {
          const value = event.target.value;
          setState({
            ...state,
            password: value,
          });
        }
        function TellnputChange(event) {
          const value = event.target.value;
          setState({
            ...state,
            tell: value,
          });
        }
        function AddressnputChange(event) {
          const value = event.target.value;
      
          setState({
            ...state,
            address: value,
          });
        }
        function ImagenputChange(event) {
          const value = event.target.value;
          setImage(value);
        }
        function validate() {
          let nameError = "";
          let emailError = "";
          let passwordError = "";
          let tellError = "";
          let AddressError = "";
          if (!state.name) {
            nameError = "Name field required";
          }
          const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if (!state.email || reg.test(state.email) === false) {
            emailError = "Invalid email field ";
          }
          if (!state.password) {
            passwordError = "Password field is required";
          }
          if (!state.tell) {
            tellError = "Phone number is required";
          }
          if (!state.address) {
            AddressError = "Address required";
          }
          
      
          if (
            emailError ||
            nameError ||
            passwordError ||
            tellError ||
            AddressError
          ) {
            setState({
              nameError,
              emailError,
              passwordError,
              tellError,
              AddressError,
            });
            return false;
          }
          return true;
        }
        function submit() {
          if (validate()) {
            onRegister(
              state.name,
              state.email,
              state.password,
              state.tell,
              state.address,
              image
            );
          }
        }
      
        async function onRegister(
          Name,
          Email,
          Password,
          Tell,
          Address,
          Images
        ) {
          const result = await Registers(
            Name,
            Email,
            Password,
            Tell,
            Address,
            Images
          );
          if(result.msg === "OK"){
            Swal.fire({
              icon: "success",
              title: "Succeed",
              text: "Welcome new member",
              confirmButtonText: "Accept",
            }).then(()=>{
              navigate("/").then(()=>{ 
                window.location.reload()});;
            });
          }else{
            Swal.fire({
              icon: "error",
              title: result.msg,
              confirmButtonText: "Accept",
            })
          }
        }
        const props = {
            name: 'file',
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            headers: {
              authorization: 'authorization-text',
            },
      
          onChange(info) {
            if (info.file.status !== "uploading") {
              console.log("data" + JSON.stringify(info));
              setImage(info.file.originFileObj);
            }
      
            if (info.file.status === "done") {
              message.success(`${info.file.name} file uploaded successfully`);
              getBase64(info.file.originFileObj, (url) => {
                setImageUrl(url);
              });
            } else if (info.file.status === "error") {
              message.error(`${info.file.name} file upload failed.`);
            }
          },
        };
  return (
    <>

    {/* <Header/> */}


    {/* <!-- Contact Start --> */}
    <div className="container-xxl py-6">
        <div className="container">
            <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{"max-width" : "500px;"}}>
                <h1 className="display-5 mb-3">Register</h1>
                <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div className="row g-5 justify-content-center">
                
                <div className="col-lg-7 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                  
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" 
                                    className={
                                        "form-control " + (state.nameError ? "invalid" : "")
                                      }
                                     id="idname"
                                     name="name"
                                     value={state.name}
                                     onChange={NamenputChange}
                                     placeholder="Your Name"
                                     />
                                  
                                    <label for="idname">Your Name</label>
                                    <span className="text-danger">{state.nameError}</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email"
                                       className={
                                        "form-control " + (state.emailError ? "invalid" : "")
                                      }
                                      id="idemail"
                                      name="email"
                                      value={state.email}
                                      onChange={EmailnputChange}
                                     
                                       placeholder="Your Email"/>
                                    <label for="idemail">Your Email</label>
                                    <span className="text-danger">{state.emailError}</span>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="password"
                                    className={
                                        "form-control " + (state.passwordError ? "invalid" : "")
                                      }
                                      id="idpassword" 
                                      name='password'
                                      value={state.password}
                                      onChange={PasswordnputChange}
                                      placeholder="password"/>
                                    <label for="idpassword">Password</label>
                                    <span className="text-danger">{state.passwordError}</span>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="number"
                                     className={
                                        "form-control " + (state.tellError ? "invalid" : "")
                                      }
                                      id="idTell"
                                      name='tell'
                                      value={state.tell}
                                      onChange={TellnputChange}
                                      placeholder="Tell"/>
                                    <label for="idTell">Tell</label>
                                    <span className="text-danger">{state.tellError}</span>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea type="address"
                                     className={
                                        "form-control " + (state.addressError ? "invalid" : "")
                                      }
                                      
                                      id="idaddress" 
                                      value={state.address}
                                      onChange={AddressnputChange}
                                      placeholder="Address" 
                                      style={{"max-width" : "200px;"}}></textarea>
                                    <label for="idaddress">Address</label>
                                    <span className="text-danger">{state.addressError}</span>
                                </div>
                            </div>

                            <div className="form-floating mb-3">
                        <div className="row">
                          <div className="col-3">
                            <Upload {...props}>
                              <Button icon={<UploadOutlined />}>
                                Upload
                              </Button>
                            </Upload>
                          </div>
                          <div className="col-9 d-flex justify-content-end">
                            {imageUrl && (
                              <img
                                src={imageUrl}
                                alt="avatar"
                                style={{
                                  width: "250px",
                                }}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                            
                            <div className="d-grid mt-3">
                                        <button
                                            className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                                            type="button"
                                            onClick={() => submit()}
                                        >
                                            Register
                                        </button>
                                        <div className="text-center">
                                            <Link className="small" to="/Login">
                                                Back to Login!
                                            </Link>
                                        </div>
                                    </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    
    </>
  )
}


export default Register