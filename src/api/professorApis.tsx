import axios from "axios"

const url : string = ""

export const profRegister = async (data : any) =>{
    try {
        return axios.post(`${url}/`, data).then((res : any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error);
    }
}

export const profSignIn = async (data : any) =>{
    try {
        return axios.post(`${url}/`, data).then((res : any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error);
    }
}