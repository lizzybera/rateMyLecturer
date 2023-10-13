import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GrFormClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState<boolean>(false);

  const onEmail = () => {
    setEmail(!email);
  };
  const onEmail2 = () => {
    if(email === true){
      setEmail(false)
    }
  };
  return (
    <div className="w-full h-[100vh] justify-center items-center flex bg-opacity-20 shadow-lg backdrop-blur-md backdrop-filter border border-opacity-18 border-white/5 rounded-10" 
    // style={{background : "rgba( 155, 155, 155, 0.1 )", boxShadow : " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )", backdropFilter : "blur( 20px ) ", WebkitBackdropFilter: "blur( 6.5px )", borderRadius : "10px", border: "1px solid rgba( 255, 255, 255, 0.18 )" , }}
    
    >
      {/* 
 

background: rgba( 155, 155, 155, 0 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 20px );
-webkit-backdrop-filter: blur( 20px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
      
      */}
      {/* form the body */}
      <div className="w-[90%] tab:w-[550px] bg-white  p-3 desktop:flex desktop:justify-center desktop:items-center desktop:flex-col shadow-2xl"
      onClick={()=>{
        onEmail2()
      }}
      >
        <div className="text-[27px] flex justify-end cursor-pointer desktop:justify-end desktop:flex desktop:w-full ">
          <GrFormClose />
        </div>

        {/* main part */}
        <div className="justify-center items-center flex flex-col mt-3 desktop:w-[350px] duration-[400ms]">
          {/* title */}
          <div className="flex items-center">
            <div className="font-[800] text-[30px] mr-2">Student</div>
            <div className=" text-[30px]">Sign Up</div>
          </div>

          {/* Professor routes/Link */}
          <div className="my-5">
            Are you a professor?
            <span className="text-blue-700 font-[700] ml-1">Sign up here</span>
          </div>

          {/* google sign up w-[350px] */}
          <div className="w-full h-[50px] rounded-[25px] border-gray-300 border mt-3 flex justify-center items-center hover:cursor-pointer hover:scale-[1.1] duration-[350ms]">
            <div className="text-[25px] text-green-600">
              {" "}
              <FcGoogle />{" "}
            </div>
            <div className="font-[700] text-[13px] ml-2">
              Sign up with Google
            </div>
          </div>

          {/* options */}
          <div className="w-full flex justify-between items-center mt-7">
            <div className="w-[30%] desktop:w-[25%] h-[1px] bg-gray-300"></div>
            <div className="text-[13px] desktop:text-[15px] ">
              Or sign up with email
            </div>
            <div className="w-[30%] desktop:w-[25%] h-[1px] bg-gray-300"></div>
          </div>

          {/* form */}
          <div className="mt-6 w-full">
            {/* input */}
            <div className="ml-1 font-[600] text-[16px] duration-[300ms] h-[10px] mb-5">
            {email ? (
              <div className="duration-[350ms]">
                Email
              </div>
            ) : null}
            </div>
            {!email ? (
              <input
                type="text"
                placeholder="Email"
                className="w-full h-[40px] bg-white border border-gray-300 px-4 placeholder:text-black outline-0"
                onClick={() => {
                  onEmail();
                }}
              />
            ) : (
              <input
                type="text"
                className="w-full h-[40px] bg-white border border-black px-4 outline-0"
                onClick={() => {
                  onEmail();
                }}
              />
            )}

            <div className="w-full h-[45px] duration-[350ms] rounded-[25px] border border-[blue] mt-[47px] flex justify-center items-center text-white bg-black hover:cursor-pointer hover:scale-[1.1] ">
              <div className="font-[700] text-[13px] ml-2">Continue</div>
            </div>
          </div>

          <div className="w-full  justify-center items-center text-center flex flex-col text-[11px] mt-3">
            Rate My Professors is designed for and targeted to U.S. audiences
            and is governed by and operated in accordance with U.S. laws
          </div>

          <div className="my-7">
            Already have an account?
            <Link to="/sign-in">
              <span className="text-blue-700 font-[700] ml-1">Login</span>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
