import Instance from "../helper/Axios";

export async function GetCategoryProduct() {
    try {                                     
        const response = await Instance.get("/CategoryProduct/GetAll");
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }
}