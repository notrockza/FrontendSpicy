import Instance from "../helper/Axios";

//call api สำหรับดึงข้อมูลผู้ใช้งานมาแสดงผล
export async function GetCartAccount(idAccount) {
    try {                                     
        const response = await Instance.get("Cart/GetCartCustomerAll?idAccount=" + idAccount);
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }
}

//call api สำหรับดึงข้อมูลผู้ใช้งานมาแสดงผล
export async function AddCartAccount(idAccount , idProduct , amountProduct) {
    try {      
        let formData = new FormData();
        formData.append("AccountID",idAccount);
        formData.append("ProductID",idProduct);          
        formData.append("AmountProduct",amountProduct);                                          
        const response = await Instance.post("Cart/AddCartCustomer" , formData);
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }
}

//call api สำหรับดึงข้อมูลผู้ใช้งานมาแสดงผล
export async function UpdateCartAccount(data ,amountProduct,  idCustomer) {
    try {      
        let formData = new FormData();
        formData.append("ID",data.id);
        formData.append("CustomerID",idCustomer);
        formData.append("ProductID",data.product.id);          
        formData.append("AmountProduct",amountProduct);                                          
        const response = await Instance.put("/CartCustomer/UpdateCartCustomer" , formData);
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }
}

export async function DeleteCartAccount(id) {
    try {                                             
        const response = await Instance.delete("Cart/DeleteCartCustomer?id=" + id);
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }
}