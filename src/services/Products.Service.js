import Instance from "../helper/Axios";

export async function GetProduct() {
    try {                                     
        const response = await Instance.get("/Product/GetProduct/");
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }
}

export async function GetProductByID(id) {
    try {                                     
        const response = await Instance.get("Product/GetProductByID/" + id);
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }
}

export async function AddProduct(data , image) {
    try {
        let formData = new FormData();  
        formData.append("Id", data.id);
        formData.append("Name", data.name);
        formData.append("Stock", data.stock);
        formData.append("Price", data.price);
        formData.append("CategoryProductID", data.category);
        formData.append("Detail", data.detail);
        formData.append("FormFiles", image);
        const response = await Instance.post("/Product/AddProduct" , formData);
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }
}

export async function UpdateProduct(data, image) {
    try {
        let formData = new FormData();  
        formData.append("ID", data.id);
        formData.append("Name", data.name);
        formData.append("Stock", data.stock);
        formData.append("Price", data.price);
        formData.append("CategoryProductID", data.category);
        formData.append("Detail", data.detail);
        formData.append("FormFiles", image);
        const response = await Instance.put("/Product/UpdateProduct" , formData);
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }
}

export async function DeleteProduct(id) {
    try {
        const response = await Instance.delete("/Product/DeleteProduct?id=" + id);
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }
}

// export async function AddProductDescription( idProduct , image) {
//     try {      
//         let formData = new FormData();
//         formData.append("ProductID",idProduct);          
//         formData.append("FormFiles",image);                                          
//         const response = await Instance.post("/ProductDescription/AddProductDescription" , formData);
//         return await response.data;
//     } catch (error) {
//         console.log("error", error);
//     }
// }


export async function AddProductDescription(idProduct , image) {
    try {   
         let formData = new FormData();
         for (const iterator of image) {
             formData.append("FormFiles",iterator); 
            console.log(iterator)
         }
        // for (let i = 0; i < image.length; i++) {
        //     formData.append("FormFiles",image[i]); 
        //  }          
        formData.append("ProductID",idProduct);                            
        const response = await Instance.post("/ProductDescription/AddProductDescription", formData);
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }
}

export async function GetDetailAll(idProduct) {
    try {                                     
        const response = await Instance.get("ProductDescription/GetDetailAll/" + idProduct);
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }
}
