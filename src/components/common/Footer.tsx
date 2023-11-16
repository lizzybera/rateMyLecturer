import {BiLogoFacebookSquare, BiLogoTwitter, BiLogoInstagram}  from "react-icons/bi"
import pics from "../../assets/rmp 2.svg"
import pics2 from "../../assets/dropdown main.svg"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { useState } from "react"

const Footer = () => {
    const [parent] = useAutoAnimate()

    const [show, setShow] = useState<boolean>(false)

    const onShow = () =>{
        setShow(!show)
    }
  return (
    <div ref={parent} className="duration-700">

        {
            !show ? (
                  <div className="flex items-center justify-center w-full py-4 text-white bg-black" ref={parent}> 
         {/* main  */}
         <div className="w-[90%] h-full justify-center items-center flex flex-col"> 
             {/* dropdown  */}
         <div className="cursor-pointer headerMedium:mb-3"
        onClick={()=>{
            onShow()
        }}
        >
        {
                    show ? (
                        <img src={pics2} alt="dropdown" className="ml-3"
                        />
                    ) : (
                        <img src={pics2} alt="dropdown" className="ml-3 rotate-180"/>
                    )
                }
        </div> 

         {/* first footer  */}
         <div className="flex items-center justify-between w-full headerMedium:flex-col-reverse headerMedium:items-center headerMedium:ml-3">
            <div className="text-[13px] text-center">© 2023 Rate My Lecturer. All Rights Reserved</div>
            <div className="flex text-[23px] justify-between items-center headerMedium:flex-col-reverse">
                    <div  className="flex w-[100px] justify-between">
                        <BiLogoFacebookSquare />
                        <BiLogoTwitter />
                        <BiLogoInstagram />
                    </div>

                    <div className="ml-5 headerMedium:ml-0">
                    {/* <img src={pics} alt="logo" className="h-[43px]"/> */}
                    <h2 className="cursor-pointer">RML</h2>
                    </div>
            </div>
        </div> 


         </div> 
     </div> 
            ) : (
               <div className="flex items-center justify-center w-full py-4 text-white bg-black" ref={parent}>
         {/* main  */}
        <div className="w-[90%] h-full justify-center items-center flex flex-col">
             {/* dropdown  */}
        <div className="cursor-pointer headerMedium:mb-3"
        onClick={()=>{
            onShow()
        }}
        >
        {
                    show ? (
                        <img src={pics2} alt="dropdown" className="ml-3"
                        />
                    ) : (
                        <img src={pics2} alt="dropdown" className="ml-3 rotate-180"/>
                    )
                }
        </div>

         {/* second Footer  */}

 <div className="flex w-[90%] justify-between headerMedium:h-[510px] headerMedium:flex-col">
 <img src={pics} alt="logo" className="h-[43px] mb-6 headerMedium:mr-4 headerMedium:flex hidden"/>
                    <div className="headerMedium:mb-4">
                        <div className="font-[500] text-[18px] mb-3">Site</div>

                        <div className="text-[14px] mb-2">About</div>
                        <div className="text-[14px] mb-2">Help</div>
                        <div className="text-[14px] mb-2">Site Guidelines</div>
                    </div>

                    <div className="headerMedium:mb-4">
                        <div className="font-[500] text-[18px] mb-3">LEGAL</div>

                        <div className="text-[14px] mb-2">Terms & Conditions</div>
                        <div className="text-[14px] mb-2">Privacy Policy</div>
                        <div className="text-[14px] mb-2">Copyright Compliance Policy</div>
                        <div className="text-[14px] mb-2">CA Notice at Collection</div>
                        <div className="text-[14px] mb-2">CA Do Not Sell or Share My Personal Information</div>
                    </div>

                    <div>
                        <div className="font-[500] text-[18px] mb-3">PARTNERS</div>
                        <div className="text-[14px] mb-2">Optimum</div>
                    </div>
                    
                    <div className="flex flex-col items-end headerMedium:w-full headerMedium:items-center">
                    <img src={pics} alt="logo" className="h-[43px] mb-6 headerMedium:hidden"/>
        
                    <div  className="flex w-[100px] justify-between text-[23px] mb-6 headerMedium:mb-0">
                        <BiLogoFacebookSquare />
                        <BiLogoTwitter />
                        <BiLogoInstagram />
</div>
            <div className="text-[14px] text-center">© 2023 Rate My Lecturer. All Rights Reserved</div>
        </div>
        </div>

        </div>
    </div> 
            )
        }


    </div>
  )
}

export default Footer







    