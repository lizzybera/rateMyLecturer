//@ts-ignore
//@ts-nocheck

import Header from "../../components/common/Header"
import { useState, useEffect } from "react"
// import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai"
// import { GoShare } from "react-icons/go"
// import { GrFlag } from "react-icons/gr"
import { useParams } from 'react-router-dom';
import LoadingScreen from "../../components/LoadingScreen";
import axios from "axios"
import { useNavigate } from "react-router-dom"


const ProfDetailsPage = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false)
    const [singleProfessor, setSingleProfessor] = useState([])
    const [allProfessors, setAllProfessors] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true)
        axios.get(
            `https://lecturer-rating.onrender.com/api/prof`
        )
            .then((response) => {
                setLoading(false)
                console.log(response)
                setAllProfessors(response.data.data)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)

            })
    }, [id])
    const [avergeRating, setAverageRating] = useState("")
    const [numberOfRaters, setNumberOfRaters] = useState([])
    const [ratingComments, setRatingComments] = useState([])
  
   const [singleProfessorId, setProfessorId] = useState("")
  
    console.log(singleProfessor, "single")

    useEffect(() => {
        setLoading(true)
        axios.get(
            `https://lecturer-rating.onrender.com/api/prof`
        )
            .then((response) => {
                
                console.log(response)
                setSingleProfessor(response.data.data.filter((item) => item.userId.includes(id)));
                response.data.data.filter((item) => item.userId.includes(id)).map((id) => {
                    return (
                        setProfessorId(id.userId)
                       
                    )
                    
                })
               
                axios.get(
                    `https://lecturer-rating.onrender.com/api/prof/rating/${singleProfessorId}`
                )
                    .then((response) => {
                        setLoading(false)
                        console.log(response, "hello")
                        setAverageRating(response.data.averageRating);
                        setNumberOfRaters(response.data.raters)
                        setRatingComments(response.data.comments)
                        setAllRatings(response.data.rating)
                    })
                    .catch((err) => {
                        console.log(err)
                        setLoading(false)
        
                    })
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)

            })
    }, [id, singleProfessorId])
    function getRandomObjectsFromArray(array: any, count: any) {
        const randomObjects = [];
        const arrayCopy = [...array]; // Create a copy of the original array to avoid modifying it.

        while (randomObjects.length < count) {
            const randomIndex = Math.floor(Math.random() * arrayCopy.length);
            const randomObject = arrayCopy.splice(randomIndex, 1)[0]; // Remove the selected object from the copy.
            randomObjects.push(randomObject);
        }

        return randomObjects;
    }
    const randomObjects = getRandomObjectsFromArray(allProfessors, 3);
  
      const [allRatings, setAllRatings] = useState([])

    const mappedElements = ratingComments.map((element1, index) => {
        const element2 = allRatings[index];
  
        return (
            <div className="w-full bg-[#F9F9F9] p-8 mb-5 flex headerMedium:flex-col" key={index}>

            <div className="justify-between hidden mb-5 ml-4 headerMedium:flex">
                <div className="font-[700]">ANONYMOUS</div>
                <div className="font-[600] text-[14px]">27 march 2020</div>
            </div>
            <div className="headerMedium:flex">
                <div className="flex justify-center flex-col items-center w-[100px]">
                    <div className="font-[600] headerMedium:text-[16px]">QUALITY</div>
                    <div className="w-[75px] text-[30px] font-[800] h-[60px] flex justify-center items-center bg-[#7FF6C3]">{`${element2}.0`}</div>
                </div>
                {/* <div className="flex justify-center flex-col items-center w-[100px] mt-8 headerMedium:mt-0">
                    <div className="font-[600] headerMedium:text-[16px]">DIFFICULTY</div>
                    <div className="w-[75px] text-[30px] font-[800] h-[60px] flex justify-center items-center bg-[#7FF6C3]">4.0</div>
                </div> */}
        
        
        
            </div>
            <div className="ml-8 headerMedium:ml-3">
                <div className="mt-2">
                    <div className="flex justify-between headerMedium:hidden">
                        <div className="font-[700]">ANONYMOUS</div>
                        <div className="font-[600] text-[14px]">27 march 2020</div>
                    </div>
        
                    
                    {/* <div className="flex mt-4 headerMedium:mt-6 headerMedium:flex-col ">
                        <div className="text-[16px] headerMedium:mb-2 headerMedium:text-[15px]">For Credit: <span className="font-[700] mr-5 ">YES</span></div>
        
                        <div className="text-[16px] headerMedium:mb-2 headerMedium:text-[15px]">Grade <span className="font-[700] mr-5">YES</span></div>
        
                        <div className="text-[16px] headerMedium:mb-2 headerMedium:text-[15px]">TextBook: <span className="font-[700] mr-5">YES</span></div>
        
                        <div className="text-[16px] headerMedium:mb-2 headerMedium:text-[15px]">Attendance: <span className="font-[700] mr-5">YES</span></div>
                    </div> */}
        
                    <div className="text-[15px] mt-4 headerMedium:mt-5 headerMedium:text-[14px]" >{element1}</div>
        
        
                </div>
            </div>
        </div>
        );
      });

 
    return (
        <>
      
            {loading && (<LoadingScreen />)}
            <Header />
            
            {singleProfessor?.map((list) => {
                return (
                    <div className="flex items-center justify-center w-full h-full">
                        {/* main */}
                        <div className="w-[90%] h-full justify-center items-center  flex-col mt-16 headerMedium:mt-10">

                            {/* all ratings */}
                            <div className="flex w-full h-full mt-8 headerMedium:flex-col">
                                {/* first part */}

                                <div className="w-[33%] h-full headerMedium:w-full ">
                                    <div className="font-[700] text-[80px]">{`${avergeRating}.0`}</div>

                                    <div className="font-[700] text-[14px] -mt-3">
                                        Overall Quality Based on {numberOfRaters.length}  <span className="underline cursor-pointer">{numberOfRaters.length < 2 ? "rating" : "ratings"}</span>
                                    </div>

                                    <div className="font-[700] text-[40px] mt-4">{list.Name}</div>

                                    <div className=" text-[14px] w-[400px]">Lecturer in the <span className="font-[700] underline cursor-pointer" onClick={() => navigate("/profs/all")}>{`${list.Professional_Department} Department`}</span> at <span className="font-[700] underline cursor-pointer" onClick={() => navigate("/profs/all")}>{list.school}</span></div>

                                    {/* <div className="flex mt-8">
                                        <div className="flex flex-col items-center justify-center" >
                                            <div className="font-[800] text-[30px] ">N/A</div>
                                            <div className=" text-[14px]">Would take again</div>
                                        </div>
                                        <div className="w-[1px] h-[80px] bg-black mx-4"></div>
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="font-[800] text-[30px] ">3.3</div>
                                            <div className=" text-[14px]">Level of Difficulty</div>
                                        </div>
                                    </div> */}

                                    <div
                                        onClick={() => navigate(`/rate-a-professor/${list.userId}`)}
                                        className="w-[250px] h-[45px] justify-center items-center flex bg-blue-600 text-white text-[14px] font-[500] rounded-full cursor-pointer hover:bg-blue-800 duration-300 mt-8">
                                        {`Rate ${list.Name}`}

                                    </div>

                                    <div className="font-[500] text-[14px] mt-5 cursor-pointer underline">
                                        {`I'm ${list.Title} ${list.Name}`}

                                    </div>



                                </div>

                                {/* second part */}
                                {/* <div className="w-[500px] headerMedium:ml-4 headerMedium:mt-5 headerMedium:w-full flex flex-col justify-center items-center"> */}
<div>
                                    {/* a */}
                                    {/* <div className="w-full p-5 bg-gray-100 rounded-md ">
                                        <div className=" text-[16px] font-[700] ">
                                            Rating Distribution
                                        </div>
                                        <div className="flex items-center my-4">
                                            <div className="text-[15px] headerMedium:w-[90px] w-[100px] headerMedium:text-[13px] text-end">Awesome 5</div>
                                            <div className="w-[350px] h-[40px] bg-blue-600 mx-4 headerMedium:w-[200px]"></div>
                                            <div className="font-[500]">3</div>
                                        </div>

                                        <div className="flex items-center my-4">
                                            <div className="text-[15px] headerMedium:w-[90px] w-[100px] headerMedium:text-[13px] text-end">great 4</div>
                                            <div className="w-[350px] h-[40px] bg-gray-200 mx-4 headerMedium:w-[200px]"></div>
                                            <div className="font-[500]">0</div>
                                        </div>

                                        <div className="flex items-center my-4">
                                            <div className="text-[15px] headerMedium:w-[90px] w-[100px] headerMedium:text-[13px] text-end">good 3</div>
                                            <div className="w-[350px] h-[40px] bg-blue-600 mx-4 headerMedium:w-[200px]"></div>
                                            <div className="font-[500]">1</div>
                                        </div>

                                        <div className="flex items-center my-4">
                                            <div className="text-[15px] headerMedium:w-[90px] w-[100px] headerMedium:text-[13px] text-end">OK 2</div>
                                            <div className="w-[350px] h-[40px] bg-gray-200 mx-4 headerMedium:w-[200px]"></div>
                                            <div className="font-[500]">0</div>
                                        </div>

                                        <div className="flex items-center my-4">
                                            <div className="text-[15px] headerMedium:w-[90px] w-[100px] headerMedium:text-[13px] text-end">Awful 1</div>
                                            <div className="w-[350px] h-[40px] bg-gray-200 mx-4 headerMedium:w-[200px]"></div>
                                            <div className="font-[500]">0</div>
                                        </div>
                                    </div> */}

                                    {/* similar professors */}
                                    <div>
                                        <div className="text-[16px] font-[700]">Check out Similar Lecturers in the {list?.Professional_Department} Department</div>

                                        <div className="w-full rounded-sm h-[80px] headerMediuheaderMedium:m:t9xt-[ w-[100px]13px] mt-2 bg-[#E8F1FF] flex items-center justify-center">
                                            {randomObjects.map((rave) => {
                                                return (
                                                    <div
                                                        onClick={() => navigate(`/professor-details/${rave.userId}`)}
                                                        className="flex ju headerMedium:w-[200px]stify-center items-center cursor-pointer">
                                                        <div className="text-white font-[700] bg-blue-600 cursor-pointer duration-200 hover:bg-blue-700 w-[60px] h-[38px] flex justify-center items-center ">{`${rave.averageRate === null ? 0 : rave.averageRate}.0`}</div>
                                                        <div className="text-[13px] ml-3 mr-4">{rave.Name}</div>
                                                    </div>
                                                )
                                            })}

                                            {/* <div className="flex items-center justify-center">
                    <div className="text-white font-[700] bg-blue-600 cursor-pointer duration-200 hover:bg-blue-700 w-[60px] h-[38px] flex justify-center items-center">5.00</div>
                    <div className="text-[13px] ml-3 mr-4">Aida Hass</div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="text-white font-[700] bg-blue-600 cursor-pointer duration-200 hover:bg-blue-700 w-[60px] h-[38px] flex justify-center items-center">5.00</div>
                    <div className="text-[13px] ml-3 mr-4">Aida Hass</div>
                </div> */}
                                            {/* <div>1</div>
                <div>1</div> */}
                                        </div>
                                    </div>

                                </div>

                            </div>


                            {/* courses ratings */}
                            <div className="mt-7 w-[73%] headerMedium:w-full">
                                <div className="cursor-pointer hover:text-gray-500">
                                    <div className="text-[15px] font-[700] mb-3">{`${ratingComments.length} students Rating`}</div>
                                    <div className="w-[150px] h-[2px] bg-black hover:text-gray-500"></div>
                                </div>
                                <div className="w-full bg-gray-300 h-[2px]"></div>

                                <select className="mt-5 mb-10 w-[150px] text-[15px] font-[700] border border-b-gray-500 h-[40px] outline-0 rounded-md px-3">
                                    <option value="">All courses</option>
                                    {/* <option value="">Ba 2</option>
        <option value="">Ba 3</option> */}
                                </select>

                                {/* rating words */}

                             
                                {ratingComments.length < 1 ? (
                                <div >
    <h2 className="font-[700]">OPPs! This Lecturer Has No Rating</h2>
</div>
                                ) : (
                                    <>
                                    {ratingComments.map((data) => {
return (
    <>
    {mappedElements}
    </>
)
                                    })}
                                    </>
                                )}

                            </div>


                        </div>
                    </div>
                )
            })}


        </>
    )
}

export default ProfDetailsPage