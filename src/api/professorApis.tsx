import axios from "axios"

const url : string = "https://lecturer-rating.onrender.com/api/prof"

export const profRegister = async (data : any) =>{
    try {
        return await axios.post(`${url}/`, data).then((res : any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error);
    }
}

export const profSignIn = async (data : any) =>{
    try {
        return await axios.post(`${url}/`, data).then((res : any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error);
    }
}