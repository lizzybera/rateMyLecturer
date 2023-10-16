import { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const ProfSignUp = () => {
  const [password, setPassword] = useState<boolean>(false);

  const onPassword = () => {    
    setPassword(!password);
  };

  const onPassword2 = () => {
    if(password === true){
      setPassword(false)
    }
  };
  
  return (
    <div className="w-full h-[100vh] justify-center items-center flex bg-opacity-20 shadow-lg backdrop-blur-md backdrop-filter border border-opacity-18 border-white/5 rounded-10">
     
      <div className="w-[90%] tab:w-[550px] bg-white  p-3 desktop:flex desktop:justify-center desktop:items-center desktop:flex-col shadow-2xl"
      onClick={()=>{
        onPassword2()
      }}
      >
        <div className="text-[27px] flex justify-end cursor-pointer desktop:justify-end desktop:flex desktop:w-full ">
          <GrFormClose />
        </div>

        {/* main part */}
        <div className="justify-center items-center flex flex-col mt-3 desktop:w-[350px] duration-[400ms]">
          {/* title */}
          <div className="flex items-center">
            <div className="font-[800] text-[30px] mr-2">Professor</div>
            <div className=" text-[30px]">Sign Up</div>
          </div>

          {/* form */}
          <div className="mt-6 w-full">
            {/* input Email */}
            <div>
            <div className="ml-1 font-[600] text-[16px] duration-[300ms] h-[10px] mb-5">
           
              <div className="duration-[350ms]">
                Search for your professor profile
              </div>
            </div>
            
            {!password ? (
              <input
                // type="password"
                className="w-full h-[40px] bg-white border border-gray-300 px-4 placeholder:text-black outline-0"
                onClick={() => {
                  onPassword();
                }}
              />
            ) : (
              <input
                // type="password"
                className="w-full h-[40px] bg-white border border-black px-4 outline-0"
                onClick={() => {
                  onPassword();
                }}
              />
            )}
            
            </div>
       

            <div className="my-1">
            Can't find your profile? 

            <Link to="/prof/signup">
            <span className="text-blue-700 cursor-pointer font-[700] ml-1">Create one here</span>
            </Link>
          </div>

            
          </div>

          <div className="mt-[170px] mb-2">
          Already have an account? 
            <Link to="/sign-in">
            <span className="text-blue-700 cursor-pointer font-[700] ml-1">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfSignUp;