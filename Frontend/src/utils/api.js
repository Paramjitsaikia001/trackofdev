import axios from "axios";

const Api = axios.create({
    baseURL:process.env.REACT_APP_BASE_URL,
    withCredentials:true,

    headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
    },
});

export {Api}