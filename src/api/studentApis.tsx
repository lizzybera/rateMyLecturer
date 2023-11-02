import axios from "axios"

const url : string = "https://lecturer-rating.onrender.com/api/user"

export const registerUser = async (data: any) => {
    try {
      
      return await axios
        .post(`${url}/register`, data)
        .then((res: any) => {
          return res;
        });
    } catch (error) {
      console.log(error);
    }
  };

export const studentSignIn = async (data : any) =>{
    try {
        return await axios.post(`${url}/login`, data).then((res : any)=>{
            return res.data.data
            // console.log(res);
            
        })
    } catch (error) {
        console.log(error);
    }
}

export const studentVerify = async (userID : any, token : any) =>{
    try {
        return await axios.get(`${url}/verify-email/${userID}/${token}`).then((res : any)=>{
            return res.data.data
            // console.log(res);
        })
    } catch (error) {
        console.log(error);
    }
}

export const googleSignIn = async () =>{
    try {
        return await axios.get("https://lecturer-rating.onrender.com/api/auth/google")
    } catch (error) {
        console.log(error);
    }
}