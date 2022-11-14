import axios from "axios";

export default axios.create({
  baseURL: "http://127.0.0.1:8000",
    // baseURL: process.env.REACT_APP_BACKEND,
   
    headers:{
        common:{
            Authorization: `Bearer ${localStorage.getItem("user")}`,
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Accept: "application/json",

        },
    }

});
