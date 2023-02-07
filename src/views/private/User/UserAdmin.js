import React,{useState,useEffect} from 'react'
import HeaderAdmin from '../../../layouts/private/privateLayout/HeaderAdmin'
import SidebarAdmin from '../../../layouts/private/privateLayout/SidebarAdmin'
import FooterAdmin from '../../../layouts/private/privateLayout/FooterAdmin'
import "../../../layouts/private/privateLayout/Sideber.css"
import "../../../../src/layouts/private/privateLayout/css/feather.css"
import "../../../../src/layouts/private/privateLayout/css/themify-icons.css"
import UserTable from './UserTable'
import {GetAll} from "../../../services/Account.Service"




function UserAdmin() {

    
  const [data, setData] = useState([]);
  const [isData, setIsData] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    GetAccount();
  },[])
  
  
  async function GetAccount (){
    var result = await GetAll();
    setIsData(false);
    if(result){
      setData(result);
      setIsData(true);
      console.log(result)       
    }
  }

  return (
    <>
      <div className="container-scroller">
        <HeaderAdmin />
        <div className="container-fluid page-body-wrapper">
          <SidebarAdmin />
          <div className="main-panel">

           <UserTable
           dataAccount={data}/>

            <FooterAdmin />

          </div>
        </div>
      </div>
    </>
  )
}

export default UserAdmin