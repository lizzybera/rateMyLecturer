import axios from "axios"

const url : string = ""

export const studentRegister = async (data : any) =>{
    try {
        return axios.post(`${url}/`, data).then((res : any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error);
    }
}

export const studentSignIn = async (data : any) =>{
    try {
        return axios.post(`${url}/`, data).then((res : any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error);
    }
}