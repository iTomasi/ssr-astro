import Axios from "axios";

export const AxiosCloudinary = Axios.create({
  baseURL: `https://api.cloudinary.com/v1_1/${import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME || "nocloudname"}`
})