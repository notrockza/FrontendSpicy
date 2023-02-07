import React, { useEffect, useState, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import HeaderAdmin from '../../../layouts/private/privateLayout/HeaderAdmin'
import SidebarAdmin from '../../../layouts/private/privateLayout/SidebarAdmin'
import FooterAdmin from '../../../layouts/private/privateLayout/FooterAdmin'
import { Button } from 'antd';
import { AddProductDescription } from '../../../services/Products.Service'
import {useLocation ,useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};


const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const focusedStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};


function UploadFile(props) {
    const { state } = useLocation();
    // const [Test, setTest] = useState([]);
    const [imageAll, setImageAll] = useState([]);
    
   // console.log("test",state)
    const navigate = useNavigate();
    const [dataProduct , setDataProduct] = useState([]);
    // const [image, setImage] = useState("");
    
    
    const {
        isFocused,
        isDragAccept,
        isDragReject
    } = useDropzone({ accept: { 'image/*': [] } });

    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
            setImageAll(acceptedFiles);
           //onProductDetail(state.dataProduct.data.id,acceptedFiles)
            
        }
    });


    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                
                <img
                    
                    src={file.preview}
                    style={img}
                    // Revoke data uri after image is loaded
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                    
                />
               
            </div>
        </div>
        
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);


    


    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);

    async function onProductDetail(idProduct, image) {
        const result = await AddProductDescription(idProduct, image);
        if (result.msg === "OK") {
            Swal.fire(
                'Successful upload',
                'Waiting for confirmation!',
                'success'
            ).then(() => {
                navigate("/admin/product/");
            })
        } else {
            Swal.fire({
                icon: "error",
                title: "an error occurred",
                text: "",
            });
        }
    }

    return (
        <>
            <div className="container-scroller">
                <HeaderAdmin />
                <div className="container-fluid page-body-wrapper">
                    <SidebarAdmin />
                    <div className="cardd-title mx-auto ">
                    {/* test id product{state.dataProduct.data.id} */}
                </div>
                    {/* <div className="about-img position-relative overflow-hidden p-5 pe-0">
                      
                        {state.dataProduct.image !== "" && <img className="card-img-top mb-5 mb-md-0" src={state.dataProduct.data.image} alt="..." />}
                        {state.dataProduct.image === "" && <img className="card-img-top mb-5 mb-md-0" src="img/about.jpg" alt="..." />}
                        <br></br>
                        <p><i className="fa fa-credit-card text-primary me-3"></i>Price : {state.dataProduct.data.price}</p>
                            <p><i className="fa fa-archive text-primary me-3"></i>Stock : {state.dataProduct.data.stock}</p>
                    </div> */}

                    
                            
                
                    <div className="main-panel">

                        <section className="container">
                            <div {...getRootProps({ style })}>
                                <input {...getInputProps()} />
                                <p>Drag 'n' drop some files here, or click to select files</p>
                            </div>
                            <aside style={thumbsContainer} >
                                {thumbs}
                                
                            </aside>
                            <Button type="submit" className="btn btn-primary mr-2"  onClick={() => {
                                        if(imageAll.length !== 0){
                                            onProductDetail(state.dataProduct.data.id,imageAll)
                                        }
                                        if(imageAll.length === 0){
                                            Swal.fire({
                                                icon: 'warning',
                                                title: 'Oops...',
                                                text: 'You didnt put a image!',
                                              })
                                        }

                                    }}>Submit</Button>
                        </section>
                       
                        {/* <FooterAdmin /> */}

                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default UploadFile