import axios from "axios";


// duong dan den APIs
export default axios.create({
    baseURL: "http://10.15.68.82:8081/api",
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    }
})