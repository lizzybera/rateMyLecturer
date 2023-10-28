import { useState } from "react";
import {RiArrowDropDownLine} from "react-icons/ri"
import { Link } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { useSelector } from "react-redux";


const ProfilePage = () => {
  const user = useSelector((state : any) => state.user)

  const [name, setName] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<boolean>(false);
  const [middleName, setMiddleName] = useState<boolean>(false);
  const [lastName, setLastame] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  const onName = () => {    
    setName(!name);
  };
  const onShow = () => {    
    setShow(!show);
  };

  const onName2 = () => {
    if(name === true){
      setName(false)
    }
  };
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
      setFirstName(false)
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

  return (
    <>
    <Header />

    <div className="flex w-full h-[100vh] justify-center  pt-[130px] pb-[350px]"
    onClick={()=>{
      onName2()
      onLastName2()
      onFirstName2()
      onMiddleName2()
      onLastName2()
    }}
    >
      <div className="w-[60%] min-h-[400px] justify-center headerMedium:w-full headerMedium:px-8">
        <div className="font-[800] text-[30px] mb-16">Hey, {user?.name}</div>

{/* Header */}
        <div className="flex">
          <div className="mr-14 headerMedium:text-[15px] text-[18px] font-[700] cursor-pointer">
            Profile
          <div className="w-full bg-black h-[2px] mt-1 "/>
          </div>
          <Link to="/acct-settings">
          <div className="mr-14 text-[16px] hover:font-[600]  headerMedium:text-[15px]cursor-pointer">
          Account Settings
          {/* <div className="w-full bg-black h-[2px] mt-1 "/> */}
          </div>
          </Link>
          
          <Link to="/ratings">
          <div className="mr-14 text-[16px] hover:font-[600]  headerMedium:text-[15px] cursor-pointer">
          Ratings
          {/* <div className="w-full bg-black h-[2px] mt-1 "/> */}
          </div>
          </Link>

          <Link to="/saved-prof">
          <div className="mr-14 text-[16px] hover:font-[600] headerMedium:text-[15px] cursor-pointer">      

Saved Professors
          {/* <div className="w-full bg-black h-[2px] mt-1 "/> */}
          </div>
          </Link>
        </div>

        <div className="w-full headerMedium:w-full h-[1px] bg-slate-400 mb-5"/>

        {
          !show ? (
            <div className="font-[700] text-[15px] text-end cursor-pointer"
        onClick={()=>{
          onShow()
        }}
        >Edit</div>

          ) : null
        }


        <div className="flex my-[25px]">

          <div className="w-[80%]">
            {/* first Name */}
            <div className="mb-14 text-[17px] flex ">
              <div className="w-[45%]">First Name</div>
             

              {
                show ? (
                   <div className="w-[50%]">
                
               <div className="">
               {!name ? (
              <input
                // type="name"
                className="w-full h-[40px] bg-white border border-gray-300 px-4 placeholder:text-black outline-0 rounded-sm"
                onClick={() => {
                  onName();
                }}
              />
            ) : (
              <input
                // type="name"
                className="w-full h-[40px] bg-white border border-black px-4 outline-0 rounded-sm"
                onClick={() => {
                  onName();
                }}
              />
            )}
               </div>

              </div> 
                ) : (
                  <div className=" text-[17px]">{user?.name}</div>
                )
              }

              
            </div>

{/* last Name */}
            <div className="mb-14 text-[17px] flex ">
               <div className="w-[45%]">Last Name</div>
            
                {
                  show ? (
                    <div className="w-[50%] ">
                
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
                  ) : (
                  <div className=" text-[17px]">{user?.name}</div>
                  )
                }
              

            </div>

{/* school */}
            <div className="mb-14 text-[17px] flex">
            <div className="w-[45%]">School</div>

            
            {
              show? (
<div className="w-[50%]">
                
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
              ) : (
                <div className=" text-[17px]">{user?.school}</div>
              )
            }


            </div>

{/* graduation */}
            <div className="mb-10 text-[17px] flex">
            <div className="w-[45%]">Expected year of graduation</div>

            {
              show ? (
                <div className="w-[50%] mb-10 ">
                
               <div className="mt-1">
               
              <div
                // type="name"
                className="w-[35%] h-[40px] bg-white border border-gray-300 px-4 placeholder:text-black outline-0 rounded-sm flex justify-between items-center">
                  <div></div>
                  <div className="cursor-pointer">
                    {
                      lastName ? <div
                      onClick={()=>{
                        onLastName()
                      }}
                      className="text-[30px]"><RiArrowDropDownLine /></div> : < div
                      onClick={()=>{
                        onLastName()
                      }}
                      className="text-[30px]"
                      ><RiArrowDropDownLine className="rotate-180"/></div>
                    }
                  </div>
                </div>
               </div>

              </div>
              ) : (
                <div className=" text-[17px]">2022</div>
              )
            }

            
            </div>

{/* Button */}
          {
            show ? (
              <div className="w-full flex flex-col items-end">
          <button type="submit" className="w-[45%] h-[45px] duration-[350ms] rounded-[25px] border border-[blue] flex justify-center items-center text-white bg-black hover:cursor-pointer hover:scale-[1.1] headerMedium:w-[60%]"
            >Save Changes
            </button>

            <div className="font-[500] cursor-pointer ml-[90px] mt-4"
            onClick={()=>{
              onShow()
            }}
            >Cancel</div>
          </div>
            ) : null
          }

          </div>
        
  
          </div>          

        </div>


      </div>

      <Footer />
    </>
  )
}

export default ProfilePage