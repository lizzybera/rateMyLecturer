import React from 'react'

const Keeper = () => {
  return (
    <div>

{
                show ? (
                    <div className="w-[180px] h-[65px] bg-white absolute left-[150px] hover:bg-[blue]  shadow-lg top-[55px] flex items-center px-4 rounded-md cursor-pointer  text-black hover:text-white font-[500]">
  <div className="flex items-center"
               >
               <img src={pics2} alt="logo" className="bg-black"/>
               <div className="text-[20px] "><RiGraduationCapFill /></div>

<span className="text-[18px] ml-3">Schools</span>
               </div>
            </div>
                ) : null
            }



    </div>
  )
}

export default Keeper