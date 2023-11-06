/* eslint-disable */
//@ts-ignore
//@ts-nocheck

import { useState, useEffect } from "react";
// import * as yup from 'yup'
// import { yupResolver } from "@hookform/resolvers/yup";
// import {useForm} from "react-hook-form"
// import { profRegister } from "../../api/professorApis";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import LoadingScreen from "../../components/LoadingScreen";


const ProfMainSign = () => {
  const navigate = useNavigate()

  // const [name, setName] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [middleName, setMiddleName] = useState<string>("");
  const [lastName, setLastame] = useState<string>("");
  const [department, setDepartment] = useState<boolean>(false);

  const [allschools, setAllSchools] = useState([]);
  const [loading, setLoading] = useState(false);





  useEffect(() => {
    setLoading(true)
    axios.get(
      `https://lecturer-rating.onrender.com/api/school/`

    )
      .then((response) => {
        // toast.success("Lecturar rated successfully")
        setLoading(false)
        console.log(response, "school")
        setAllSchools(response.data.data)
        // navigate(`/professor-details/${professorId}`)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
        toast.error("Lecturer rating unsuccessful, Please make sure you've not rated this lecturer before")
      });
  }, [])


  const [profDept, setProfDept] = useState<string>("");

  // const handleSelectProfChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setProfDept(e.target.value);
  // };
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  console.log(selectedOption, "the selected option")

  // const onName = () => {    
  //   setName(!name);
  // };

  // const onName2 = () => {
  //   if(name === true){
  //     setName(false)
  //   }
  // };
  // const onFirstName = () => {
  //   setFirstName(!firstName);
  // };

  // const onFirstName2 = () => {
  //   if (firstName === true) {
  //     setFirstName(false)
  //   }
  // };
  // const onMiddleName = () => {
  //   setMiddleName(!middleName);
  // };

  // const onMiddleName2 = () => {
  //   if (middleName === true) {
  //     setMiddleName(false)
  //   }
  // };
  // const onLastName = () => {
  //   setLastame(!lastName);
  // };

  // const onLastName2 = () => {
  //   if (lastName === true) {
  //     setLastame(false)
  //   }
  // };
  // const onDepartment = () => {    
  //   setDepartment(!department);
  // };

  // const onDepartment2 = () => {
  //   if (department === true) {
  //     setDepartment(false)
  //   }
  // };

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
  const [title, setTitle]= useState("")
  const addNewProfessor = () => {
    if (selectedOption.length < 1) {
      toast.error("Please Select a School to Proceed")
    }
    else if (title?.length < 1) {
      toast.error("Please Add a Title")
    }
    else if (firstName?.length < 1) {
      toast.error("Please Add a First Name")
    }
    else if (lastName?.length < 1) {
      toast.error("Please Add a Last Name")
    }
    else if (profDept?.length < 1) {
      toast.error("Please Add a Professor Department")
    }
    else if (!isChecked) {
      toast.error("Please Agree to Our Terms of Use to Proceed")
    }
    else {
      setLoading(true)
      axios.post(
        `https://lecturer-rating.onrender.com/api/prof/create`,
        {
          Title:title,
          Name:`${firstName} ${middleName} ${lastName}`,
          Professional_Department: profDept,
          school: selectedOption
          }
      )
      .then((response) => {
        toast.success("Lecturer added successfully")
        setLoading(false);
        console.log(response, "hhshshsh")
        setTimeout(() => navigate(`/professor-details/${response.data.data.userId}`), 5000);
        
    })
      .catch((err) => {
        console.log(err);
        setLoading(false)
      toast.error("Adding Lecturer unsuccessful, Please Check Your Network and Try Again")
      });
    }
    
  }

    // Use the useState hook to manage the checkbox state
    const [isChecked, setIsChecked] = useState<boolean>(false);

    // Function to handle the checkbox change event
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked); // Toggle the checkbox state
    };
  return (
    <div className="w-full h-[100%] py-10"
      // onClick={() => {
      //   // onName2()
      //   onLastName2()
      //   onFirstName2()
      //   onMiddleName2()
      //   onDepartment2()
      // }}
    >
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {loading && <LoadingScreen />}
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
              <select className="w-full h-[40px] bg-white border border-gray-300 px-4 placeholder:text-black outline-0 rounded-sm" value={selectedOption} onChange={handleSelectChange} >
              <option value=""></option>
                <option value="FUNAAB">FUNAAB</option>
                
                {allschools.map((list) => {
                  return (
                    <>
                      <option value={list?.schoolName}>{list.schoolName}</option>
                    </>
                  )
                })}
                {/* <option value="University of Lagos">University of Lagos</option>
                <option value="Yaba College of Education">Yaba College of Education</option>
                <option value="Lagos State University">Lagos State University</option>
                <option value="Funab">Funab</option>
                <option value="Civil Enginering">Civil Enginering</option> */}
              </select>
            </div>

          </div>
          <div className="w-full mb-4 ">
            <div>Lecturer's Title</div>

            <div className="mt-1">

              <input
                // type="name"
                className="w-full h-[40px] bg-white border border-gray-300 px-4 placeholder:text-black outline-0 rounded-sm"
                value={title}
                onChange={(e) => setTitle(e.target.value)}

              />

              {/* <input
                // type="name"
                className="w-full h-[40px] bg-white border border-black px-4 outline-0 rounded-sm"
                // onClick={() => {
                //   onFirstName();
                // }}
              /> */}

            </div>

          </div>
          <div className="w-full mb-4 ">
            <div>Professor's First Name</div>

            <div className="mt-1">

              <input
                // type="name"
                className="w-full h-[40px] bg-white border border-gray-300 px-4 placeholder:text-black outline-0 rounded-sm"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}

              />

              {/* <input
                // type="name"
                className="w-full h-[40px] bg-white border border-black px-4 outline-0 rounded-sm"
                // onClick={() => {
                //   onFirstName();
                // }}
              /> */}

            </div>

          </div>

          <div className="w-full mb-4 ">
            <div>Professor's Middle Name (optional)</div>

            <div className="mt-1">

              <input
                // type="name"
                className="w-full h-[40px] bg-white border border-gray-300 px-4 placeholder:text-black outline-0 rounded-sm"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}

              />

              {/* <input
                // type="name"
                className="w-full h-[40px] bg-white border border-black px-4 outline-0 rounded-sm"
                onClick={() => {
                  onMiddleName();
                }}
              /> */}

            </div>

          </div>

          <div className="w-full mb-4 ">
            <div>Professor's Last Name</div>

            <div className="mt-1">

              <input
                // type="name"
                className="w-full h-[40px] bg-white border border-gray-300 px-4 placeholder:text-black outline-0 rounded-sm"
                value={lastName}
                onChange={(e) => setLastame(e.target.value)}
              />



            </div>

          </div>

          <div className="w-full mb-4 ">
            <div>Department
            </div>

            {/* <div className="mt-1">
              <select className="w-full h-[40px] bg-white border border-gray-300 px-4 placeholder:text-black outline-0 rounded-sm" value={profDept} onChange={handleSelectProfChange}>
                <option value=""></option>
                <option value="Computer Science">Computer Science</option>
                <option value="Food Technology">Food Technology</option>
                <option value="Bussiness Administration">Bussiness Administration</option>
                <option value="Computer Enginering">Computer Enginering</option>
                <option value="Civil Enginering">Civil Enginering</option>
              </select>
               </div> */}
            <input
              // type="name"

              className="w-full h-[40px] bg-white border border-gray-300 px-4 placeholder:text-black outline-0 rounded-sm"
              // onClick={() => {
              //   onLastName();
              // }}
              value={profDept}
              onChange={(e) => setProfDept(e.target.value)}
            />

          </div>

          {/* <div className="w-full mb-4 ">
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

              </div> */}

          <div className="flex ml-[-10px] mt-10 items-center text-[14px]">
            <input 
            type="checkbox" 
            className="w-[50px] h-[30px] border border-black mr-6"   
            checked={isChecked}
          onChange={handleCheckboxChange}
          />
            <div>I agree to the Terms of Use and Privacy Policy</div>
          </div>

          <button className="w-[230px] h-[45px] mt-10 border border-blue-700 text-white text-[15px] rounded-full flex justify-center items-center bg-black" onClick={addNewProfessor}>
            Add Professor
          </button>

        </div>

      </div>
    </div>
  )
}

export default ProfMainSign