import axios from "axios";
const applicationMode =import.meta.env.MODE !=="production";

export const devAPIURL = import.meta.env.VITE_DEV_API_URL;
export const prodAPIURL = import.meta.env.VITE_PROD_API_URL;
const API =axios.create({
    baseURL: applicationMode ? devAPIURL:prodAPIURL,
});

// API.interceptors.request.use((config)=>{
//     const token = localStorage.getItem("token");
//     if(token){
//         config.headers.Authorization=`bearer $(token)`;
//     }
// },(error)=>{
//     return Promise.reject(error);
// });

export default API;
