import * as Yup from "yup";

export const ValidateUser = Yup.object({
    name: Yup.string().required("required name"),
    email:  Yup.string().required("required email"),
    password:  Yup.string().required("required password"),
    tell:  Yup.string().required("required tell"),
    address:  Yup.string().required("required address")
    // image:  Yup.string().required("กรุณาเลือกรูปภาพ"),
    
  });