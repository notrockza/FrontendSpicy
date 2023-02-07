import Instance from "../helper/Axios";

export async function GetRoleByID(id) {
    try {                                     
        const response = await Instance.get("Role/GetRoleByID/" + id);
        return await response.data;
    } catch (error) {
        console.log("error", error);
    }
}