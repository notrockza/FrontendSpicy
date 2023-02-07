import React, { useState } from 'react'
import Footer from '../../../layouts/publicLayout/Footer'
import Header from '../../../layouts/publicLayout/Header'
import { Logins } from "../../../services/Account.Service";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";

const defaultState = {
    email: null,
    password: null,
    nameError: null,
    emailError: null,
    passwordError: null
}

function Login() {
    const navigate = useNavigate();
    const [state, setState] = useState(defaultState);

    function emailChange(event) {
        setState({
            ...state,
            email: event.target.value
        });
        console.log(state.email)
    }
    function passwordChange(event) {
        setState({
            ...state,
            password: event.target.value
        });
        console.log(state.password)
    }

    function validate() {
        let emailError = "";
        let passwordError = "";

        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!state.email || reg.test(state.email) === false) {
            emailError = "Invalid email field.";
        }
        if (!state.password) {
            passwordError = "Password field is required.";
        }
        if (emailError || passwordError) {
            setState({ emailError, passwordError });
            return false;
        }
        return true;
    }

    function submit() {
        if (validate()) 
        // console.log(state)
        {
            onLogin(state.email, state.password);
        }
    }
    async function onLogin(email, password) {
        const result = await Logins(email, password);
        if (result.msg === "OK") {
            Swal.fire({
                icon: "success",
                title: "welcome!",
                text: "Have fun shopping.",
                confirmButtonText: "Accept",
            }).then(() => {
                localStorage.setItem("idAccount", result.data.id);
                localStorage.setItem("roleAccount", result.data.roleID );
                navigate('/product');
                window.location.reload();
            });
        } else {
            Swal.fire({
                icon: "error",
                title: result.msg,
                confirmButtonText: "Accept",
            }).then(() => {
            });
        }
    }


    return (
        <>

            {/* <Header /> */}

            {/* <!-- Contact Start --> */}
            <div className="container-xxl py-6">
                <div className="container">
                    <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" 
                    // style={{ "maxWidth": "500px;" }}
                    >
                        <h1 className="display-5 mb-3">Login</h1>
                        <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div className="row g-5 justify-content-center">

                        <div className="col-lg-7 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            {/* <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p> */}
                            <form>
                                <div className="row g-3">

                                    
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="email"
                                                className={
                                                    "form-control " +
                                                    (state.emailError ? "invalid" : "")
                                                }
                                                id="floatingInput"
                                                name='email'
                                                value={state.email}
                                                onChange={emailChange}
                                                placeholder="Email" 
                                                />
                                            <label htmlFor="floatingInput">Email</label>
                                            <span className="text-danger">
                                                {state.emailError}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="password"
                                             className={
                                                "form-control " +
                                                (state.passwordError ? "invalid" : "")
                                            }
                                            name="password"
                                            value={state.password}
                                            onChange={passwordChange}
                                            placeholder="Passworld" id="message" 
                                            // style={{ "maxWidth": "200px;" }}
                                            ></input>
                                            <label htmlFor="message">Password</label>
                                            <span className="text-danger">
                                                {state.passwordError}
                                            </span>
                                        </div>
                                    </div>

                                    {/* <div className="col-12 text-center mt-5">
                                        <button className="btn btn-primary rounded-pill py-3 px-5"
                                            type="submit"
                                            // onClick={() => submit()} 
                                            >Login</button>
                                        <div className="text-center">
                                            <div className="mt-3">
                                                <Link className="small " to="/register">
                                                    Register?
                                                </Link>
                                            </div>
                                        </div>


                                    </div> */}

                                    <div className="d-grid mt-5">
                                        <button
                                            className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                                            type="button"
                                            onClick={() => submit()}
                                        >
                                            Login
                                        </button>
                                        <div className="text-center">
                                            <Link className="small" to="/register">
                                                Register?
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Login