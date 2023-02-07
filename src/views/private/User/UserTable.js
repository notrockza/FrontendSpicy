import React, { useState , useRef } from 'react'
// import { Pagination } from "antd";
import { EditOutlined , DeleteOutlined } from '@ant-design/icons';
import { useNavigate ,Link} from "react-router-dom";
import { useReactToPrint } from 'react-to-print';
import {  Button} from 'antd';
import { jsPDF } from "jspdf";
import * as XLSX from "xlsx";
import autoTable from 'jspdf-autotable';

import { Paragraph, Document, Packer } from "docx";
import { saveAs } from "file-saver";
// import * as fs from 'fs';

function UserTable(props) {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp0data',
        // onAfterPrint: ()=> alert('Print success')
       
    });

    const [size, setSize] = useState('large');
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");

    const showDataAccount = props.dataAccount.map((data) => {
        return (
            <tr>
            <td className="py-1">
                <img src={data.image} alt="image" />
            </td>
            <td>
                {data.id}
            </td>
            <td>
               {data.name}
            </td>
            <td>
                {data.email}
            </td>
            <td>
                {data.tell}
            </td>
            <td>
                {data.address}
            </td>
            <td>
            {/* <EditOutlined fontSize={50}/> */}
           <div className=''>
        <Link to="/admin/user/form"  style={{ color: "black", fontSize: "20px" }} >
        
              <EditOutlined fontSize={25} />
        </Link>
        </div>
        <Link to="" style={{ color: "black", fontSize: "20px" }} >
              <DeleteOutlined fontSize={25} />
        </Link>

 
            </td>
        </tr>
        );
    })

    const handleOnExport = () => {
        var wb  = XLSX.utils.book_new(),
        ws = XLSX.utils.json_to_sheet(props.dataAccount);

        XLSX.utils.book_append_sheet(wb, ws, "MySheet1");

        XLSX.writeFile(wb , "MyExcel.xlsx");
   
    };

    const columns = [
        {title: "id ",field: "id" ,},
        {title: "Email ",field: "email" ,},
        {title: "Name ",field: "name" , type: "text"},
        {title: "Tell ",field: "tell", type: "number" ,},
        {title: "Address ",field: "address", type: "text" ,},
        {title: "RoleName ",field: "roleName",  },
    ]

function pdf (){
    const doc = new jsPDF();
    doc.text("User Details",20,10)
    doc.autoTable({
        theme: "striped",
        columns: columns.map(col => ({ ...col, dataKey: col.field })),
        body:props.dataAccount
    })
    
    doc.save('table.pdf')
}
console.log("test",props.dataAccount);

const generate = () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              text: "Hello world",
              bullet: {
                level: 0 //How deep you want the bullet to be
              }
            }),
            new Paragraph({
              text: "The world",
              bullet: {
                level: 0
              }
            })
          ]
        }
      ]
    });

    Packer.toBlob(doc).then((blob) => {
      console.log(blob);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  };


    return (
        <div className="content-wrapper">
            <div className="row">


                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">User Table</h4>
                            <p className="card-description">

                                <Button type="button " onClick={() => {
                                    navigate("/admin/user/form")
                                }} size={size}>
                                    <i className="bi bi-plus me-1"></i> Add User
                                </Button>{" "}

                                <Button variant="outline-primary" onClick={handlePrint} size={size} >
                                    <i className="bi bi-printer "></i>{" "}
                                </Button>{" "}

                                <Button variant="outline-primary" onClick={handleOnExport} size={size} >
                                    <i className="bi bi-file-earmark-excel"></i>
                                    {" "} 
                                </Button>{" "}

                                <Button variant="outline-primary" onClick={()=>{pdf ()}} size={size} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-pdf mb-1" viewBox="0 0 16 16">
  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
  <path d="M4.603 14.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.712 5.712 0 0 1-.911-.95 11.651 11.651 0 0 0-1.997.406 11.307 11.307 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.266.266 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.71 12.71 0 0 1 1.01-.193 11.744 11.744 0 0 1-.51-.858 20.801 20.801 0 0 1-.5 1.05zm2.446.45c.15.163.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.876 3.876 0 0 0-.612-.053zM8.078 7.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z"/>
</svg>{" "}
                                </Button>{" "}

                                <Button variant="outline-primary" onClick={generate} size={size} >
                                    <i className="bi bi-file-earmark-word"></i>
                                </Button>{" "}


                            </p>
                            <div className="table-responsive">
                                <table className="table table-striped" ref={componentRef}>
                                    <thead>
                                        <tr>
                                        <th>
                                                image
                                            </th>
                                            <th>
                                                Id
                                            </th>
                                            <th>
                                                Name
                                            </th>
                                            <th>
                                                Email
                                            </th>
                                            <th>
                                                Phone
                                            </th>
                                            <th>
                                                Address
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* <tr>
                                            <td className="py-1">
                                                <img src="../../images/faces/face1.jpg" alt="image" />
                                            </td>
                                            <td>
                                                Herman Beck
                                            </td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }}
                                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                            <td>
                                                $ 77.99
                                            </td>
                                            <td>
                                                May 15, 2015
                                            </td>
                                        </tr> */}
                                        {showDataAccount}
                                        
                                        
                                      
                                       
                                       

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default UserTable