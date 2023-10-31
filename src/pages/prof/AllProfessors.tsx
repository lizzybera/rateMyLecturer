//@ts-nocheck
import Header from "../../components/common/Header"
import {CiSaveDown1}  from "react-icons/ci"
import { useState, useEffect , CSSProperties} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import LoadingScreen from "../../components/LoadingScreen"



const AllProfessors = () => {
  const [allProfessors, setAllProfessors] = useState([])
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue]= useState("")
  const navigate = useNavigate()
  console.log(allProfessors)
  useEffect(() => {
    setLoading(true)
    axios.get(
        `https://lecturer-rating.onrender.com/api/prof`
    )
        .then((response) => {
            setLoading(false)
            console.log(response)
            const filteredProfessors = response.data.data.filter(person => person.Name.toLowerCase().includes(inputValue.toLowerCase()));
            setAllProfessors(filteredProfessors)
        })
        .catch((err) => {
            console.log(err)
            setLoading(false)
        })
}, [inputValue])

const codeToStatus: (code: any) => {
  style: CSSProperties;
} = (code) =>
  code === 0
    ? {
      
        style: { backgroundColor: "#E2E5E3", color: "#344437" },
      }
      : code === 1
    ? {
       
        style: { backgroundColor: "rgb(255, 156, 156)", color: "#36B44A" },
      }
    : code === 2
    ? {
       
        style: { backgroundColor: "rgb(255, 156, 156)", color: "#36B44A" },
      }
      : code === 3
    ? {
       
        style: { backgroundColor: "rgb(255, 241, 112)", color: "#36B44A" },
      }
      : code === 4
    ? {
      
        style: { backgroundColor: "#73c5e6", color: "#36B44A" },
      }
    : code === 5
    ? {
     
        style: { backgroundColor: "rgb(127, 246, 195)", color: "#CD2B65" },
      }
    : {
        text: "In Progress",
        style: { backgroundColor: "#E2E5E3", color: "#344437" },
      };
  return (
      <>
      {loading && <LoadingScreen />}
        <Header inputValue={inputValue} setInputValue={setInputValue}/>
        <div className='w-full min-h-[100vh]'>
      <div className="pt-[100px] px-10 w-[1000px] headerMedium:w-full ">

      <div className="text-[20px]">{`${allProfessors.length} professors with`} 
      <span className="font-[700]">{`"${inputValue}"`}</span> 
      in their name
      </div>

      {/* department */}
        {/* <div className="flex text-[17px] mt-8 items-center">
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
        </div> */}

        {/*profs Data  */}
        {allProfessors?.map((list) => {
          return (
            <div 
            className="flex justify-between w-full bg-[#F7F7F7] h-[170px] headerMedium:h-full items-center mt-8 px-6 py-4 cursor-pointer"
            onClick={() => navigate(`/professor-details/${list.userId}`)}
            >
            <div className="flex headerMedium:flex-col">
                <div className="flex flex-col items-center justify-center mr-10 headerMedium:items-start">
                    <div className="font-[500] ml-3">Quality</div>
                    <div 
                    className="w-[80px] h-[60px] flex justify-center items-center font-[700] text-[30px] mb-2"
                    style={codeToStatus(list.__v).style}
                    >
                      {`${list.__v}.0`}
                      </div>
                    <div className="text-[14px] ">0 ratings</div>
                </div>

                <div>
                  <div className="font-[700] text-[20px] headerMedium:mt-5">{`${list.Title} ${list.Name}`}</div>
                  <div className="text-[15px] mt-2">{list.Professional_Department}</div>
                  <div className="text-[15px] mt-2">{list.school}</div>
{/* 
                  <div className="text-[15px] mt-2 flex items-center flex-wrap">
                    <div className="font-[700] text-[18px]">N/A 
                      <span className="text-[15px] font-[400] ml-2">would you again</span>
                    </div>

                    <div className="w-[1px] mx-2 h-[16px] bg-black"/>

                    <div className="font-[700] text-[18px]">3.2 
                      <span className="text-[15px] font-[400] ml-2">level of difficulty</span>
                    </div>
                  </div> */}

                </div>
            </div>

            {/* share button */}
            <div className="-mt-28 headerMedium:-mt-[250px] cursor-pointer">
              <CiSaveDown1 className="text-[20px]" />
            </div>

      </div>
          )
        })}
      

        
      </div>
    </div>
      </>
  )
}

export default AllProfessors

