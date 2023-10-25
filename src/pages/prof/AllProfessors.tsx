import Header from "../../components/common/Header"
import {CiSaveDown1}  from "react-icons/ci"


const AllProfessors = () => {
  return (
      <>
        <Header />
        <div className='w-full min-h-[100vh]'>
      <div className="pt-[100px] px-10 w-[1000px] headerMedium:w-full ">

      <div className="text-[20px]">278963 professors with 
      <span className="font-[700]">"henry"</span> 
      in their name
      </div>

      {/* department */}
        <div className="flex text-[17px] mt-8 items-center">
            <div className="font-[700] mr-4">Department</div>
            <select className="w-[250px] h-[45px] border rounded-md placeholder:red outline-0" placeholder="select ....">
                <option value="">Any</option>
                <option value="">Any</option>
                <option value="">Any</option>
                <option value="">Any</option>
                <option value="">Any</option>
                <option value="">Any</option>
                <option value="">Any</option>
            </select>
        </div>

        {/*profs Data  */}
        <div className="flex justify-between w-full bg-[#F7F7F7] h-[170px] headerMedium:h-full items-center mt-8 px-6 py-4">
              <div className="flex headerMedium:flex-col">
                  <div className="flex justify-center flex-col items-center mr-10 headerMedium:items-start">
                      <div className="font-[500] ml-3">Quality</div>
                      <div className="w-[80px] h-[60px] bg-[#FFF170] flex justify-center items-center font-[700] text-[30px] mb-2 ">3.8</div>
                      <div className="text-[14px] ">58 ratings</div>
                  </div>

                  <div>
                    <div className="font-[700] text-[20px] headerMedium:mt-5">WAYNE HENRY</div>
                    <div className="text-[15px] mt-2">Philosophy</div>
                    <div className="text-[15px] mt-2">Capalino University</div>

                    <div className="text-[15px] mt-2 flex items-center flex-wrap">
                      <div className="font-[700] text-[18px]">N/A 
                        <span className="text-[15px] font-[400] ml-2">would you again</span>
                      </div>

                      <div className="w-[1px] mx-2 h-[16px] bg-black"/>

                      <div className="font-[700] text-[18px]">3.2 
                        <span className="text-[15px] font-[400] ml-2">level of difficulty</span>
                      </div>
                    </div>

                  </div>
              </div>

              {/* share button */}
              <div className="-mt-28 headerMedium:-mt-[250px] cursor-pointer">
                <CiSaveDown1 className="text-[20px]" />
              </div>

        </div>

        
      </div>
    </div>
      </>
  )
}

export default AllProfessors

