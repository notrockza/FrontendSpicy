import Instance from "../helper/Axios";

export async function AddOrder( dataProduct , priceTotalProduct , idAccount) {
    try {   
        let formData = new FormData();
        for (let i = 0; i < dataProduct.length; i++) {
            formData.append("ProductID",dataProduct[i].product.id);
            formData.append("ProductPrice",dataProduct[i].product.price); 
            formData.append("ProductAmount",dataProduct[i].amountProduct);
            formData.append("CartID",dataProduct[i].id);
         }
        formData.append("AccountID",idAccount);          
        formData.append("CustomerStatus",false);      
        formData.append("PaymentStatus",false);   
        formData.append("PriceTotal",priceTotalProduct);                           
        const response = await Instance.post("OrderAccount/AddOrderCustomer", formData);
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }
}

export async function GetOrderAll(idAccount) {
    try {               
        const response = await Instance.get("OrderAccount/GetAll/" + idAccount);
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }
}


export async function GetProductList(idOrder) {
    try {                 
        const response = await Instance.get("OrderAccount/GetAllProductList/" + idOrder);
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }
}

export async function PaymentOrder(idOrder , image) {
    try {  
        let formData = new FormData();
        formData.append("ID",idOrder);          
        formData.append("FormFiles",image);                       
        const response = await Instance.put("OrderAccount/PaymentOrder", formData);
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }
}

export async function GetOrderConfrim() {
    try {               
        const response = await Instance.get("OrderAccount/GetConfirmOrder/");
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }
}
// ยืนยันใบสั่งซื้ออยู่ในฝั่ง Admin
export async function ConfrimOrders(idOrder) {
    try {   
        let formData = new FormData();
        for (let i = 0; i < idOrder.length; i++) {
            formData.append("ID",idOrder[i]);
         }                    
        const response = await Instance.put("/OrderAccount/ConfirmOrder", formData);
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }
}