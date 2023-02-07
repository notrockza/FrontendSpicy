/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react'
import Swal from "sweetalert2";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GetAccountByID } from '../../services/Account.Service';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { CgProfile, CgLogOut, CgShoppingBag } from "react-icons/cg";
import { Dropdown, Menu, Space, Avatar, Image , Badge} from 'antd';
import { GetCartAccount } from "../../services/Cart.Service";
import { GetRoleByID } from '../../services/Role.Service';
import { IoStorefront } from "react-icons/io5";
// import 'bootstrap/dist/css/bootstrap.min.css';
// rcfe
const NavItem = (props) => {
  return (
    <li className="nav-item">
      <a
        className="nav-link active"
        aria-current="page"
        href={props.path}
        style={{ fontSize: "20px" }}
      >
        
        {props.name}
      </a>
    </li>
  );
};



function Header() {
  const [numberCart , setNumberCart] = useState(0);
  const [dataAccount, datasetIDAccount] = useState(null);
  const [dataRole ,  setDataRole] = useState({});
  const [dataCart , setDataCart] = useState([]);
  const [idAccount, setIDAccount] = useState("");
  const [roleAccount, setRoleAccount] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const resultID = localStorage.getItem("idAccount");
    const resultRole = localStorage.getItem("roleAccount");
    if (resultID && resultRole) {
      // ข้อมูลส่วนตัว
      GetDataAccount(resultID);
      // เก็บไอดี Account
      setIDAccount(resultID);
        // เก็บไอดี Role
      setRoleAccount(resultRole);
      // ดึงข้อมูลจากตะกร้า
      GetCart(resultID);
      // ดึงข้อมูลของ Role
      GetRole(resultRole);
    }
    console.log(dataAccount)
  }, []);

  async function GetDataAccount(id) {
    await GetAccountByID(id).then((data) => {
      if (data) {
        datasetIDAccount(data);
      }
    })
  }

  async function GetCart(id){
    var result = await GetCartAccount(id);
    if(result){
      setDataCart(result);
      setNumberCart(result.length);
    }
  }

  const onLogout = () => {
    Swal.fire({
      icon: "warning",
      title: "Logout?",
      confirmButtonText: "Accept",
      showCancelButton: true,
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("idAccount");
        localStorage.removeItem("roleAccount");
        navigate("/");
        window.location.reload();
        
      }
    });
  };

  

  async function GetRole (id){
    var result = await GetRoleByID(id);
    if(result){
     setDataRole(result);
    }
 }

  const menu = (
    <div>
      <div >
        <Link to={"/profile"} state={{ dataAccount: dataAccount }} style={{ color: "black", fontSize: "15px" }}>
          <div className="row">
            <div className="col-2">
              <CgProfile fontSize={25} />
            </div>
            <div className="col-10">
              MyAccount
            </div>
          </div>
        </Link>

      </div>
      <div className="mt-3">
        <Link to="/Order" style={{ color: "black", fontSize: "15px" }}>
          <div className="row">
            <div className="col-2">
              <CgShoppingBag fontSize={25} />
            </div>
            <div className="col-10">
              Order
            </div>
          </div>
        </Link>

      </div>

      {dataRole.name === "Admin" && (
        <div className="mt-3">
          <Link   to="/admin" onClick={() => window.location.reload(navigate("/admin"))} style={{ color: "black", fontSize: "15px" }}>
            <div className="row">
              <div className="col-2">
                <IoStorefront fontSize={25} />
              </div>
              <div className="col-10">Admin Managerial</div>
            </div>
          </Link>
        </div>
      )}

      <div className="mt-3">
        <Link to="" style={{ color: "black", fontSize: "15px" }} onClick={onLogout}>
          <div className="row">
            <div className="col-2">
              <CgLogOut fontSize={25} />
            </div>
            <div className="col-10">
              Logout
            </div>
          </div>
        </Link>

      </div>
    
    </div>

    
    
  );
  return (
    <>



      {/* <!-- Navbar Start --> */}
      <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">

        <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
          <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
            <h1 className="fw-bold text-primary m-0">F<span className="text-secondary">oo</span>dy</h1>
          </a>
          <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <a href="/" className="nav-item nav-link active">Home</a>
              <a href="/" className="nav-item nav-link">About Us</a>
              <a href="/product" className="nav-item nav-link">Products</a>

              <Link to="/cart" className="nav-link" style={{ color: "black" }} href="#">
            <Badge count={numberCart}>
              <i className="fa fa-shopping-cart" style={{ fontSize: "30px" }}></i>
              </Badge>
              
            </Link>

            </div>
            <div className="d-none d-lg-flex ms-2">

             
              {dataAccount !== null ? (
                <a className="btn-sm-square  rounded-circle ms-3" href="">
                <Dropdown overlay={menu}>
                      <a onClick={e => e.preventDefault()}>
                        <Space>
                          <a className="nav-link">
                            <Avatar size={60} src={<Image src={dataAccount.image}/>} />
                          </a>
                        </Space>
                      </a>
                    </Dropdown>
                    
                </a>
  
                
              ) : <div>
                <a className="nav-link  mb-2" style={{ color: "black" }} href="/login">
                  Login
                </a>
              </div>
              }

             

            </div>
          </div>
        </nav>
      </div>
      {/* <!-- Navbar End --> */}

      

      {/* <!-- Carousel Start --> */}
      <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-7">
                      <h1 className="display-2 mb-5 animated slideInDown">Organic Food Is Good For Health</h1>
                      <a href="" className="btn btn-primary rounded-pill py-sm-3 px-sm-5">Products</a>
                      <a href="" className="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3">Services</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-7">
                      <h1 className="display-2 mb-5 animated slideInDown">Natural Food Is Always Healthy</h1>
                      <a href="" className="btn btn-primary rounded-pill py-sm-3 px-sm-5">Products</a>
                      <a href="" className="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3">Services</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button> */}
        </div>
      </div>
      {/* <!-- Carousel End --> */}
    </>
  )
}

export default Header