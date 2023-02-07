import Instance from "../helper/Axios";

export async function Logins(email , password) {
    try {                      
        let formData = new FormData();
        formData.append("Email",email);
        formData.append("Password",password);                
        const response = await Instance.post("/Account/Login" , formData );
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }
}


export async function GetAccountByID(id) {
    try {                     
        const response = await Instance.get("Account/GetAccountByID/" + id);
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }
}



export async function Registers(name , email , password , tell ,address , image) {
    try {   
        let formData = new FormData();
        formData.append("Name",name);
        formData.append("Email",email);          
        formData.append("Password",password);      
        formData.append("Tell",tell);      
        formData.append("Address",address);        
        formData.append("FormFiles",image);                           
        const response = await Instance.post("Account/Register", formData);
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }
}



export async function UpdateUser(name , email , password , tell ,address  , image) {
    try {   
        let formData = new FormData();
        formData.append("Name",name);
        formData.append("Email",email);          
        formData.append("Password",password);      
        formData.append("Tell",tell);      
        formData.append("Address",address);        
        formData.append("FormFiles",image);                           
        const response = await Instance.put("Account/UpdateAccount", formData);
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }
}


export async function GetAll() {
    try {   
             
        const response = await Instance.get("Account/GetAccountAll");
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }
}