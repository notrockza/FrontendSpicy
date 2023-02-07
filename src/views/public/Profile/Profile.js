import React from 'react'
import Footer from '../../../layouts/publicLayout/Footer'
import "./Profilecss.css"
import { useLocation } from "react-router-dom";
function Profile() {
    const { state } = useLocation();
    console.log(state)
    return (
        <>
            <div className="container emp-profilee">
                <form method="post">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img src={state.dataAccount.image} alt="" />
                                <div className="file btn btn-lg btn-primary">
                                    Change Photo
                                    <input type="file" name="file" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h6>
                                    My Account
                                </h6>
                                <h5>
                                    {state.dataAccount.name}
                                </h5>

                                <p className="proile-rating">RANKINGS : <span>8/10</span></p>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-work">

                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                                    <div className="row">
                                        <div className="col-md-5">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{state.dataAccount.name}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-5">
                                            <p>{state.dataAccount.email}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-5">
                                            <p>{state.dataAccount.tell}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <label>Address</label>
                                        </div>
                                        <div className="col-md-5">
                                            <p>{state.dataAccount.address}</p>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Profile