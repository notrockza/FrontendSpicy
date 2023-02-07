import React, { useState , useEffect , useRef } from "react";
import {
    
    Container,
    Row,
    Col,
  } from "react-bootstrap";
  import { EditOutlined, EllipsisOutlined, AudioOutlined , DeleteOutlined } from '@ant-design/icons';
  import { Avatar, Card , Input, Pagination, Button} from 'antd';

  import { useReactToPrint } from 'react-to-print';
  import {useNavigate ,Link } from "react-router-dom";
  import * as XLSX from "xlsx";
  import { jsPDF } from "jspdf";
  import autoTable from 'jspdf-autotable';

function ProductCard(props) {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: 'emp0data',
      // onAfterPrint: ()=> alert('Print success')
  });
  const [size, setSize] = useState('large');
    useEffect(()=>{
        if(props.data){
          setTotalPage(props.data.length / pageSize)
          setMaxIndex(pageSize)
          setMinIndex(0)
        }
      },[]);

      const { Meta } = Card;
      const { Search } = Input;
    
    
      const pageSize = 10;
      const [totalPage, setTotalPage] = useState(0);
      const [current, setCurrent] = useState(1);
      const [minIndex, setMinIndex] = useState(0);
      const [maxIndex, setMaxIndex] = useState(0);
    
      const handleChange = (page) => {
        setCurrent(page);
        setMinIndex((page - 1) * pageSize);
        setMaxIndex(page * pageSize);
      };

      const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");

  const IconDeleteProduct = (props) => {
    return <>
     <DeleteOutlined key="setting" onClick={props.onClick} />
    </>;
  };

  const IconEditProduct = (props) => {
    return <>
     <EditOutlined key="setting" onClick={props.onClick} />
    </>;
  };

  const IconDetallProduct = (props) => {
    return <>
     <EllipsisOutlined key="setting" onClick={props.onClick} />
    </>;
  };

  const CartProduct = (data)=>{
    return (
      <div className="col-md-4 mt-5">
        <Card
         
          style={{
            width: 275,
            
          }}
          cover={
            <img
              alt="example"
              src={data.data.image}
               style={{
                height:"250px"
               }}
            />
          }
          actions={[
            <IconDeleteProduct onClick={()=>{
              props.onDelete(data.data.id)
            }} />,
            <Link to="/admin/product/form" 
             state={{ dataProduct:data.data }}
            >
            <IconEditProduct key="edit" />
            </Link>
            ,
            <Link to="/admin/product/uploadfile"
            state={{ dataProduct : data }}>
            <IconDetallProduct key="ellipsis" />
            </Link>
            ,
            
          ]}
        >
          <Meta
            title={data.data.name}
            description={data.data.categoryName}
          />
        </Card>
      </div>
    );
  }

  const showProduct = props.data.map((data , index)=> index >= minIndex &&
  index < maxIndex && (
     <CartProduct data={data}  />)
  );

  const handleOnExport = () => {
    var wb  = XLSX.utils.book_new(),
    ws = XLSX.utils.json_to_sheet(props.data);

    XLSX.utils.book_append_sheet(wb, ws, "MySheet1");

    XLSX.writeFile(wb , "MyExcel.xlsx");

};

const columns = [
  {title: "id ",field: "id" ,},
  {title: "Name ",field: "name" , type: "text"},
  {title: "Price ",field: "price", type: "number" ,},
  {title: "Stock ",field: "stock", type: "number" ,},
  {title: "CategoryName ",field: "categoryName", type: "text" ,},
  {title: "Detail ",field: "detail", type: "text" ,},
  
]

function pdf (){
const doc = new jsPDF();
doc.text("User Details",20,10)
doc.autoTable({
  theme: "striped",
  columns: columns.map(col => ({ ...col, dataKey: col.field })),
  body:props.data
})

doc.save('table.pdf')
}

  return (
    
    <>
    <br/>
      <Container >
        <h2>Product {props.data.length} List</h2>
        <form className="d-flex mt-3 me-5 mb-4">
          <div className="row">
          <Search placeholder="Name Product" onSearch={(value)=>{
            props.onSearch(value)
          }} enterButton />
          </div>
         
          
        </form>
        <Row>
          <Col md="12">


            <Button type="button " onClick={() => {
              navigate("/admin/product/form")
            }} size={size}>
              <i className="bi bi-plus me-1"></i> Add Product
            </Button>{" "}
            <Button variant="outline-primary" onClick={handlePrint} size={size} >
              <i className="bi bi-printer "></i>{" "}

            </Button>{" "}

            <Button variant="outline-primary" onClick={handleOnExport} size={size} >
              <i className="bi bi-file-earmark-excel"></i>
              {" "}
            </Button>{" "}

            <Button variant="outline-primary" onClick={() => { pdf() }} size={size} >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-pdf mb-1" viewBox="0 0 16 16">
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                <path d="M4.603 14.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.712 5.712 0 0 1-.911-.95 11.651 11.651 0 0 0-1.997.406 11.307 11.307 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.266.266 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.71 12.71 0 0 1 1.01-.193 11.744 11.744 0 0 1-.51-.858 20.801 20.801 0 0 1-.5 1.05zm2.446.45c.15.163.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.876 3.876 0 0 0-.612-.053zM8.078 7.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z" />
              </svg>{" "}
            </Button>{" "}
              
            <div className="row" ref={componentRef}>  
            {showProduct}
            </div>
          </Col>
        </Row>
        <div className="d-flex justify-content-center mb-4 mt-2"></div>
      </Container>
      <div className="d-flex justify-content-center md-5">
      <Pagination
        pageSize={pageSize}
        current={current}
        total={props.data.length}
        onChange={handleChange}
        style={{ bottom: "0px" }}
      />
      </div>
      
    </>
  )
}

export default ProductCard