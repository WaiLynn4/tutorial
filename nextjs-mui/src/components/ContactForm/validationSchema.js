import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone No. is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  town: yup.string().required("Township is required"),
});
