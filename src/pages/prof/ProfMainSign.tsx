/* eslint-disable */

import { useState } from "react";
// import * as yup from 'yup'
// import { yupResolver } from "@hookform/resolvers/yup";
// import {useForm} from "react-hook-form"
// import { profRegister } from "../../api/professorApis";
// import { useNavigate } from "react-router-dom";


const ProfMainSign = () => {
  // const navigate = useNavigate()

  // const [name, setName] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<boolean>(false);
  const [middleName, setMiddleName] = useState<boolean>(false);
  const [lastName, setLastame] = useState<boolean>(false);
  const [department, setDepartment] = useState<boolean>(false);

  // const onName = () => {    
  //   setName(!name);
  // };

  // const onName2 = () => {
  //   if(name === true){
  //     setName(false)
  //   }
  // };
  const onFirstName = () => {    
    setFirstName(!firstName);
  };

  const onFirstName2 = () => {
    if(firstName === true){
      setFirstName(false)
    }
  };
  const onMiddleName = () => {    
    setMiddleName(!middleName);
  };

  const onMiddleName2 = () => {
    if(middleName === true){
      setMiddleName(false)
    }
  };
  const onLastName = () => {    
    setLastame(!lastName);
  };

  const onLastName2 = () => {
    if(lastName === true){
      setLastame(false)
    }
  };
  const onDepartment = () => {    
    setDepartment(!department);
  };

  const onDepartment2 = () => {
    if(department === true){
      setDepartment(false)
    }
  };

  // const Schema = yup.object({
  //   // email : yup.string().email().required(),
  //   // password : yup.string().required()
  // })

  // const { register,handleSubmit} = useForm({
  //   resolver : yupResolver(Schema)
  // })

  // const onHandleSubmit = handleSubmit((data : any) =>{
  //   const {email, password} = data
  //   console.log("data",data);
    
    
  //   profRegister({email, password}).then((res : any) =>{
  //     console.log("handleRes", res);
  //     navigate("/")
  //   })
  // })

  return (
    <div className="w-full h-[100%] py-10"
    onClick={()=>{
        // onName2()
        onLastName2()
        onFirstName2()
        onMiddleName2()
        onDepartment2()
      }}
    >
      <div className="flex flex-col px-10 py-10 mobile:px-6 mobile:justify-center"
       
      >
           {/* title */}
           <div className="">
            <div className="font-[800] text-[40px] mr-2">Add a Professor</div>
            <div className=" text-[16px] italic">Please use the search bar above to make sure that the professor does not already exist at this school</div>
            </div>

            {/* form */}
            <div className="w-[450px] mt-10 mobile:w-full">

            <div className="w-full mb-4 ">
                <div>School</div>
                
               <div className="mt-1">
              <select className="w-full h-[40px] bg-white border border-gray-300 px-4 placeholder:text-black outline-0 rounded-sm" >
                <option value=""></option>
                <option value="University of Lagos">University of Lagos</option>
                <option value="Yaba College of Education">Yaba College of Education</option>
                <option value="Lagos State University">Lagos State University</option>
                <option value="Funab">Funab</option>
                <option value="Civil Enginering">Civil Enginering</option>
              </select>
               </div>

              </div>

              <div className="w-full mb-4 ">
                <div>Professor's First Name</div>
                
               <div className="mt-1">
               {!firstName ? (
              <input
                // type="name"
                className="w-full h-[40px] bg-white border border-gray-300 px-4 placeholder:text-black outline-0 rounded-sm"
                onClick={() => {
                  onFirstName();
                }}
              />
            ) : (
              <input
                // type="name"
                className="w-full h-[40px] bg-white border border-black px-4 outline-0 rounded-sm"
                onClick={() => {
                  onFirstName();
                }}
              />
            )}
               </div>

              </div>

              <div className="w-full mb-4 ">
                <div>Professor's Middle Name</div>
                
               <div className="mt-1">
               {!middleName ? (
              <input
                // type="name"
                className="w-full h-[40px] bg-white border border-gray-300 px-4 placeholder:text-black outline-0 rounded-sm"
                onClick={() => {
                  onMiddleName();
                }}
              />
            ) : (
              <input
                // type="name"
                className="w-full h-[40px] bg-white border border-black px-4 outline-0 rounded-sm"
                onClick={() => {
                  onMiddleName();
                }}
              />
            )}
               </div>

              </div>

              <div className="w-full mb-4 ">
                <div>Professor's Last Name</div>
                
               <div className="mt-1">
               {!lastName ? (
              <input
                // type="name"
                className="w-full h-[40px] bg-white border border-gray-300 px-4 placeholder:text-black outline-0 rounded-sm"
                onClick={() => {
                  onLastName();
                }}
              />
            ) : (
              <input
                // type="name"
                className="w-full h-[40px] bg-white border border-black px-4 outline-0 rounded-sm"
                onClick={() => {
                  onLastName();
                }}
              />
            )}
               </div>

              </div>

              <div className="w-full mb-4 ">
                <div>Department
</div>
                
               <div className="mt-1">
              <select className="w-full h-[40px] bg-white border border-gray-300 px-4 placeholder:text-black outline-0 rounded-sm" >
                <option value=""></option>
                <option value="Computer Science">Computer Science</option>
                <option value="Food Technology">Food Technology</option>
                <option value="Bussiness Administration">Bussiness Administration</option>
                <option value="Computer Enginering">Computer Enginering</option>
                <option value="Civil Enginering">Civil Enginering</option>
              </select>
               </div>

              </div>

              <div className="w-full mb-4 ">
                <div>Directory Listing of Professor</div>
                
               <div className="mt-1">
               {!department ? (
              <input
                // type="name"
                className="w-full h-[40px] bg-white border border-gray-300 px-4 placeholder:text-black outline-0 rounded-sm"
                onClick={() => {
                  onDepartment();
                }}
              />
            ) : (
              <input
                // type="name"
                className="w-full h-[40px] bg-white border border-black px-4 outline-0 rounded-sm"
                onClick={() => {
                  onDepartment();
                }}
              />
            )}
               </div>

              </div>

              <div className="flex ml-[-10px] mt-10 items-center text-[14px]">
                <input type="checkbox" className="w-[50px] h-[30px] border border-black mr-6 " />
                <div>I agree to the Terms of Use and Privacy Policy</div>
              </div>

              <button className="w-[230px] h-[45px] mt-10 border border-blue-700 text-white text-[15px] rounded-full flex justify-center items-center bg-slate-500">
                Add Professor
              </button>

            </div>

          </div>
      </div>
  )
}

export default ProfMainSign