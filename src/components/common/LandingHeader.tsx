import {AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import Register from "../../pages/auth/Register";
import SignIn from "../../pages/auth/SignIn";
import { toggleState, toggleState2 } from "../../global/GlobalState";



const LandingHeader = () => {
    const dispatch = useDispatch()
    const toggle = useSelector((state: any) => state.toggle);
  const toggle2 = useSelector((state: any) => state.toggle2);

  return (
    <>
        {toggle && <Register />}
      {toggle2 && <SignIn />}
    <div className='w-full flex justify-center h-[240px] bg-[#FFFFFF]'>
        <div className="w-[90%] justify-between mt-5 flex h-[50px]  items-center">
                <div className="flex w-[110px] justify-between text-[23px] cursor-pointer">
                    <AiFillFacebook />
                    <AiOutlineInstagram />
                    <AiOutlineTwitter />
                </div>

                <div className="flex w-[180px] justify-between items-center cursor-pointer">
                        <div className="font-[700]" 
                        onClick={()=>{
                            dispatch(toggleState2())
                        }}
                        >Log In</div>

                    <div className=" w-[110px] h-[38px] bg-black flex justify-center items-center text-[17px] rounded-full text-white font-[700] hover:bg-slate-900"
                    onClick={()=>{
                        dispatch(toggleState())
                    }}
                    >sign up</div>
                </div>
        </div>
    </div>
    </>
  )
}

export default LandingHeader