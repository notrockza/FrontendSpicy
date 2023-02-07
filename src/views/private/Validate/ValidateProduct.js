import * as Yup from "yup";

export const ValidateProduct = Yup.object({
    name: Yup.string().required("required name" ),
    id: Yup.string().required("required Id"),
    category:  Yup.string().required("required category"),
    price:  Yup.string().required("required price"),
    stock:  Yup.string().required("required stock"),
    detail:  Yup.string().required("required detail")
    // image:  Yup.string().required("กรุณาเลือกรูปภาพ"),
    
  });