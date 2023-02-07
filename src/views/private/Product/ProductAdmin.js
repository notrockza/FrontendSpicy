import React,{useState , useEffect} from 'react'
import HeaderAdmin from '../../../layouts/private/privateLayout/HeaderAdmin'
import SidebarAdmin from '../../../layouts/private/privateLayout/SidebarAdmin'
import FooterAdmin from '../../../layouts/private/privateLayout/FooterAdmin'
import "../../../layouts/private/privateLayout/Sideber.css"
import "../../../../src/layouts/private/privateLayout/css/feather.css"
import "../../../../src/layouts/private/privateLayout/css/themify-icons.css"
import {GetProduct ,DeleteProduct } from "../../../services/Products.Service"
import Swal from "sweetalert2";
import ProductCard from './ProductCard'
function ProductAdmin() {

    const pageSize = 15;
    const [totalPage, setTotalPage] = useState(0);
    const [current, setCurrent] = useState(1);
    const [minIndex, setMinIndex] = useState(0);
    const [maxIndex, setMaxIndex] = useState(0);


      // เก็บข้อมูลสินค้า
  const [dataProduct , setDataProduct] = useState([]);
  // ชื่อสินค้า
  const [searchProduct, setSearchProduct] = useState("");
  // เช็ค load สินค้า
  const [isDataProduct , setIsDataProduct] = useState(false);


  useEffect(() => {
    loadData("","");
  }, []);

  async function loadData(searchName , searchCategory){
    var result = await GetProduct(searchName , searchCategory);
    setIsDataProduct(false);
    if(result){
     setDataProduct(result.data);
     setIsDataProduct(true);
     console.log(result);
    }else{
     setDataProduct([]);
    }
 }

 async function onDelete (id){
    Swal.fire({
      title: 'Delete the product?',
      text: "You won't be able to go back!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Accept!',
      cancelButtonText:"Cancel"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Delete success!',
          '',
          'success'
        ).then(async()=>{
           await DeleteProduct(id);
           loadData("","");
        })
      }
    })
  }

  function onSearch (value) {
    loadData(value,"");
  }

     

  return (
    <>
    <div className="container-scroller">
        <HeaderAdmin />
         <div className="container-fluid page-body-wrapper">
          <SidebarAdmin />
          <div className="main-panel">

         <ProductCard 
       data={dataProduct} onDelete={onDelete} onSearch={onSearch}
         />

            <FooterAdmin />

          </div>
        </div>
      </div>
    </>
  )
}

export default ProductAdmin