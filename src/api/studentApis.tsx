import axios from "axios"

const url : string = "https://lecturer-rating.onrender.com/api/user"

export const registerUser = async (data: any) => {
    try {
      
      return await axios
        .post(`${url}/register`, data)
        .then((res: any) => {
          return res.data.data;
        });
    } catch (error) {
      console.log(error);
    }
  };

export const studentSignIn = async (data : any) =>{
    try {
        return await axios.post(`${url}/`, data).then((res : any)=>{
            // return res.data.data
            console.log(res);
            
        })
    } catch (error) {
        console.log(error);
    }
}