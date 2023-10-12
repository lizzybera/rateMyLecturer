

const Register = () => {
  return (
    <div className="w-full h-[100vh] justify-center items-center flex bg-slate-500">
      <div className="w-[590px] bg-slate-100 h-[87%] p-3">
        <div className="text-end">close</div>

{/* title */}
        <div className="justify-center items-center flex flex-col mt-3 w-">
          <div className="flex items-center">
            <div className="font-[800] text-[30px] mr-2">Student</div>
            <div className=" text-[30px]">Sign Up</div>
          </div>

{/* Professor routes/Link */}
          <div className="my-3">
          Are you a professor?
          <span className="text-blue-700 font-[700] ml-1">Sign up here</span>
          </div>

{/* google sign up */}
          <div className="w-[350px] h-[50px] rounded-[25px] border-gray-300 border mt-3 flex justify-center items-center hover:cursor-pointer hover:scale-[1.1] ">
              <div className="text-[25px] text-green-600">G</div>
              <div className="font-[700] text-[13px] ml-2">Sign up with Google</div>
          </div>

{/* options */}
          <div className="w-[350px] flex justify-between items-center mt-10">
              <div className="w-[80px] h-[1px] bg-gray-300"></div>
              <div className="text-[15px]">Or sign up with email</div>
              <div className="w-[80px]  h-[1px] bg-gray-300"></div>
          </div>

{/* form */}
          <div>
              
          </div>

        </div>

      </div>
    </div>
  );
};

export default Register;
