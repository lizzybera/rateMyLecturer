import  { useState, useEffect } from "react"
import styles from "./style.module.css"
// import { LuAlertOctagon } from "react-icons/lu"
import { MdLaptopWindows } from "react-icons/md"
import { IoMdCheckmarkCircle } from "react-icons/io"
import { BsCircle } from "react-icons/bs"
// import { IconContext } from "react-icons";
import { useParams } from "react-router";
import axios from "axios";
import LoadingScreen from "../../components/LoadingScreen";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const RateAProf = () => {
 const {id} = useParams();
 const navigate = useNavigate();
 const user = useSelector((state : any) => state.user)

  const [professorRating, setProfessorRating] = useState<number>(0)
  const [professorDifficulty, setProfessorDifficulty] = useState<number>(0)
  const [professorRatingMessage, setProfessorRatingMessage] = useState("")
  const [professorDifficultyMessage, setprofessorDifficultyMessage] = useState("")
  const [iconShow, setIconShow] = useState<boolean>(false)
  const [courseCode, setCourseCode] = useState("")

const onIcon = ()=>{
  setIconShow(!iconShow)
}

  const [takeProfessorAgain, setTakeProfessorAgain] = useState('none');
  const [creditClass, setCreditClass] = useState("none")
  const [useTextBooks, setUseTextBook] = useState("none")
  const [mandatory, setMandetory] = useState("none")
  // const [comment, setComment] = useState("")



 

  const handletakeProfessor = (event: any) => {
    setTakeProfessorAgain(event.target.value);
  };

  const handleCreditClass = (event: any) => {
    setCreditClass(event.target.value);
  };

  const handleUseTextBook = (event: any) => {
    setUseTextBook(event.target.value);
  };

  const handleMandetory = (event: any) => {
    setMandetory(event.target.value);
  };

  useEffect(() => {
    if (professorRating === 1) {
      setProfessorRatingMessage("Awful")
    } else if (professorRating === 2) {
      setProfessorRatingMessage("OK")
    } else if (professorRating === 3) {
      setProfessorRatingMessage("Good")
    } else if (professorRating === 4) {
      setProfessorRatingMessage("Great")
    } else if (professorRating === 5) {
      setProfessorRatingMessage("Awesome")
    }
  }, [professorRating])

  useEffect(() => {
    if (professorDifficulty === 1) {
      setprofessorDifficultyMessage("Very Eazy")
    } else if (professorDifficulty === 2) {
      setprofessorDifficultyMessage("Eazy")
    } else if (professorDifficulty === 3) {
      setprofessorDifficultyMessage("Good")
    } else if (professorDifficulty === 4) {
      setprofessorDifficultyMessage("Difficult")
    } else if (professorDifficulty === 5) {
      setprofessorDifficultyMessage("Very Difficult")
    }
  }, [professorDifficulty])


  const [singleProfessor, setSingleProfessor] = useState([])
  const [loading, setLoading] = useState(false)
  const [professorId, setProfessorId] = useState("")

  useEffect(() => {
      setLoading(true)
      axios.get(
          `https://lecturer-rating.onrender.com/api/prof`
        )
        .then((response) => {
       setLoading(false)
          console.log(response)
          setSingleProfessor(response.data.data.filter((item: any) => item.userId.includes(id)))
          response.data.data.filter((item: any) => item.userId.includes(id)).map((id: any) => {
            return (
              setProfessorId(id.userId)
            )
          })
         })
        .catch((err) => {
          console.log(err)
          setLoading(false)
         
        })
  }, [id])

  console.log(singleProfessor)
  console.log(professorId)
  const [toughGrader, setToughGrader] = useState(false)
  console.log(toughGrader)
  const [getReadyToRead, setGetReadyToRead] = useState(false)
  const [participationMatters, setParticipationMatters] = useState(false)
  const [extraCredits, setExtraCredits] = useState(false)
  const [groupProjects, setGroupProjects] = useState(false)
  const [amazinglecturers, setAmazingLecturers] = useState(false)
  const [clearGradingMaterials, setClearGradingMaterials] = useState(false)
  const [givesGoodFeedback, setGivesGoodFeedback] = useState(false)
  const [inspirational, setInspirational] = useState(false)
  const [lotsOfHomework, setLotsOfHomework] = useState(false)
  const [hilarous, setHilarous] = useState(false)
  const [bewareOfPopQuiz, setBewareOfPopQuiz] = useState(false)
  const [soManyPapers, setSoManyPapers] = useState(false)
  const [caring, setCaring] = useState(false)
  const [respected, setRespected] = useState(false)
  const [lectureHeavy, setLectureHeavy] = useState(false)
  const [testHeavy, setTestHeavy] = useState(false)
  const [gradedByFewThings , setGradedByFewThings] = useState(false)
  const [accessibleOutsideClass, setAccessibleOutsideClass] = useState(false)
  const [onlineSavvy, setOnlineSavvy] = useState(false)
  

  const henry = `
  ${toughGrader ? "Tough Grader," : " "}
  ${getReadyToRead ? "Get Ready to Read," : " "}
  ${participationMatters ? "Participation matters," : " "}
  ${extraCredits ? "Extra Credits," : " "}
  ${groupProjects ? "Group Projects," : " "}
  ${amazinglecturers ? "Amazing lecturers," : " "}
  ${clearGradingMaterials ? "Clear Grading Materials," : " "}
  ${givesGoodFeedback ? "Gives Good Feedback," : " "}
  ${inspirational ? "Inspirational," : " "}
  ${lotsOfHomework ? "Lots of Homework" : " "}
  ${hilarous ? "Hilarous" : " "}
  ${bewareOfPopQuiz ? "Beware Of Pop Quiz," : " "}
  ${soManyPapers ? "So Many Papers," : " "}
  ${caring ? "Caring," : " "}
  ${respected ? "Respected," : " "}
  ${lectureHeavy ? "Lecture Heavy," : " "}
  ${testHeavy ? "Test Heavy," : " "}
  ${gradedByFewThings ? "Graded By Few Things," : " "}
  ${accessibleOutsideClass ? "Accessible Outside Class," : " "}
  ${onlineSavvy ? "Online Savvy," : " "}
  `
  const addARating = () => {
   
    if (!user) {
      toast.error("Please Log in Before you can Rate a Lecturer")
    }
    else if (courseCode.length < 1) {
      toast.error("Please add a course code for this lecturer")
    }
    else if (professorRating === 0) {
      toast.error("Please add a rating for this lecturer")
    }
    else if (professorDifficulty === 0) {
      toast.error("Please add a difficulty for this lecturer")
    }
    // else if (
    //   !toughGrader || 
    //   !getReadyToRead || 
    //   !participationMatters || 
    //   !extraCredits ||
    //   !groupProjects ||
    //   !amazinglecturers ||
    //   !clearGradingMaterials ||
    //   !givesGoodFeedback ||
    //   !inspirational ||
    //   !lotsOfHomework ||
    //   !hilarous ||
    //   !bewareOfPopQuiz ||
    //   !soManyPapers ||
    //   !caring ||
    //   !respected ||
    //   !lectureHeavy ||
    //   !testHeavy ||
    //   !gradedByFewThings ||
    //   !accessibleOutsideClass ||
    //   !onlineSavvy
    //   ) {
    //   toast.error("Please select at least 3 tags for this lecturer")
    // }
    else {
      setLoading(true)
      axios.post(
        `https://lecturer-rating.onrender.com/api/user/${user._id}/${professorId}`,
        {
          rating: professorRating,
          comments: henry,
          course_code: courseCode,
          difficulty: professorDifficulty,
        }
      )
      .then((response) => {
        toast.success("Lecturer rated successfully")
        setLoading(false)
        navigate(`/professor-details/${professorId}`)
        console.log(response, "response")
    })
      .catch((err) => {
        console.log(err);
        setLoading(false)
      toast.error("Lecturer rating unsuccessful, Please make sure you've not rated this lecturer before")
      });
    }
  
  }




  return (
    <div className="w-full h-[100%] py-10">
      {loading && (<LoadingScreen/>)}
      {singleProfessor?.map((list: any) => {
return (
  <div className="flex flex-col px-10 py-10 mobile:px-6 mobile:justify-center"
  >

    <div className={`${styles.fixedHeader} z-[2]`}>
      <div className={styles.fixedHeaderContainer}>
      <h2>Rate : <b>{list.Name}</b></h2>
      <p>{list.Professional_Department} . <span>{list.school}</span></p>
      </div>
    </div>

    <div className={`${styles.singleRateBox} ${styles.newRateBox} mb-[-80px]`}>
      <h2>Select Course Code<sup>*</sup></h2>
      <div className={styles.rateBox}>
        <div>

        {/* <select name="" id="" className="w-[300px] h-[40px] border outline-none hover:border-blue-500 cursor-pointer">
          <option value="">Select course code</option>
          <option value="">102</option>
          <option value="">111</option>
          <option value="">111</option>
          <option value="">111</option>
          <option value="">111</option>
          <option value="">111</option>
          <option value="">111</option>
          <option value="">111</option>
          <option value="">111</option>
          <option value="">111</option>
          <option value="">111</option>
          <option value="">111</option>
          <option value="">111</option>
          <option value="">111</option>
        </select> */}

        <input 
        placeholder="Enter course code"
        className={styles.newInputcode}
        value={courseCode}
        onChange={(e) => setCourseCode(e.target.value)}
         />


        <div className="text-[15px] mt-[15px] flex text-black items-center h-[20px] w-[270px] justify-between">
         <div className="cursor-pointer ">
         {
           !iconShow ? (<BsCircle size={25}
           onClick={()=>{
            onIcon()
           }}
           />) : (<IoMdCheckmarkCircle size={30}
            onClick={()=>{
              onIcon()
             }}
           />)
         }
         </div>

<div className="flex">
<div className="ml-3">
<MdLaptopWindows size={25} />
</div>
        <span className="ml-3">This is an online course</span>
</div>
        </div>
        </div>

      </div>
   
    </div>

    <div className={`${styles.singleRateBox} ${styles.newRateBox}`}>
      <h2>Rate your Lecturer<sup>*</sup></h2>
      <div className={styles.rateBox}>
        <div
          className={`${professorRating === 5 && styles.fifthElementActive} ${styles.fifthElement}`}
          onClick={() => setProfessorRating(5)}
        ></div>
    <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>    <div
          className={`${professorRating >= 4 && styles.forthElementActive} ${styles.forthElement}`}
          onClick={() => setProfessorRating(4)}
        ></div>
        <div
          className={`${professorRating >= 3 && styles.thirdElementActive} ${styles.thirdElement}`}
          onClick={() => setProfessorRating(3)}
        >
        </div>
        <div
          onClick={() => setProfessorRating(2)}
          className={`${professorRating >= 2 && styles.secondElementActive} ${styles.secondElement}`}
        ></div>
        <div
          className={`${professorRating >= 1 && styles.firstElementActive} ${styles.firstElement}`}
          onClick={() => setProfessorRating(1)}
        >
        </div>

      </div>
      {professorRating > 0 ? (
        <div className={styles.dynamicStatus}>
          <p>{`${professorRating} - ${professorRatingMessage}`}</p>
        </div>
      ) : (
        <div className={styles.rateBoxStatus}>
          <p>1 - Awful</p>
          <p>5 - Awesome</p>
        </div>
      )}
    </div>

    <div className={styles.singleRateBox}>
      <h2>How difficult was this Lecturer?<sup>*</sup></h2>
      <div className={styles.rateBox}>
        <div
          className={`${professorDifficulty === 5 && styles.fifthElementActive} ${styles.fifthElement}`}
          onClick={() => setProfessorDifficulty(5)}
        ></div>
        <div
          className={`${professorDifficulty >= 4 && styles.forthElementActive} ${styles.forthElement}`}
          onClick={() => setProfessorDifficulty(4)}
        ></div>
        <div
          className={`${professorDifficulty >= 3 && styles.thirdElementActive} ${styles.thirdElement}`}
          onClick={() => setProfessorDifficulty(3)}
        >
        </div>
        <div
          onClick={() => setProfessorDifficulty(2)}
          className={`${professorDifficulty >= 2 && styles.secondElementActive} ${styles.secondElement}`}
        ></div>
        <div
          className={`${professorDifficulty >= 1 && styles.firstElementActive} ${styles.firstElement}`}
          onClick={() => setProfessorDifficulty(1)}
        >
        </div>
      </div>
      {professorDifficulty > 0 ? (
        <div className={styles.dynamicStatus}>
          <p>{`${professorDifficulty} - ${professorDifficultyMessage}`}</p>
        </div>
      ) : (
        <div className={styles.rateBoxStatus}>
          <p>1 - Eazy</p>
          <p>5 - Very Difficult</p>
        </div>
      )}


    </div>

    <div className={styles.singleRateBox}>
      <h2>Would you take this lecturer again?<sup>*</sup></h2>
      <div className={styles.inputBoxFlex}>
        <div className={styles.inputContainer}>
          <input
            type="radio"
            value="yes"
            checked={takeProfessorAgain === 'yes'}
            onChange={handletakeProfessor}
            className={styles.yesCheck}
          />
          <label>Yes</label>

        </div>
        <div className={styles.inputContainer}>
          <input
            type="radio"
            value="no"
            checked={takeProfessorAgain === 'no'}
            onChange={handletakeProfessor}
            className={styles.noCheck}
          />
          <label>No</label>

        </div>
      </div>


    </div>

    <div className={styles.singleRateBox}>
      <h2>Was this class taken for credit?<sup>*</sup></h2>
      <div className={styles.inputBoxFlex}>
        <div className={styles.inputContainer}>
          <input
            type="radio"
            value="yes"
            checked={creditClass === 'yes'}
            onChange={handleCreditClass}
            className={styles.yesCheck}
          />
          <label>Yes</label>

        </div>
        <div className={styles.inputContainer}>
          <input
            type="radio"
            value="no"
            checked={creditClass === 'no'}
            onChange={handleCreditClass}
            className={styles.noCheck}
          />
          <label>No</label>

        </div>
      </div>


    </div>

    <div className={styles.singleRateBox}>
      <h2>Did this lecturer use textbooks?<sup>*</sup></h2>
      <div className={styles.inputBoxFlex}>
        <div className={styles.inputContainer}>
          <input
            type="radio"
            value="yes"
            checked={useTextBooks === 'yes'}
            onChange={handleUseTextBook}
            className={styles.yesCheck}
          />
          <label>Yes</label>

        </div>
        <div className={styles.inputContainer}>
          <input
            type="radio"
            value="no"
            checked={useTextBooks === 'no'}
            onChange={handleUseTextBook}
            className={styles.noCheck}
          />
          <label>No</label>

        </div>
      </div>


    </div>

    <div className={styles.singleRateBox}>
      <h2>Was attendance mandatory?<sup>*</sup></h2>
      <div className={styles.inputBoxFlex}>
        <div className={styles.inputContainer}>
          <input
            type="radio"
            value="yes"
            checked={mandatory === 'yes'}
            onChange={handleMandetory}
            className={styles.yesCheck}
          />
          <label>Yes</label>

        </div>
        <div className={styles.inputContainer}>
          <input
            type="radio"
            value="no"
            checked={mandatory === 'no'}
            onChange={handleMandetory}
            className={styles.noCheck}
          />
          <label>No</label>

        </div>
      </div>


    </div>

    <div className="border-[1px] border-[rgb(228, 228, 228)] rounded-[6px] shadow-[rgba(126, 126, 126, 0.25)] shadow-md w-[98%] p-10 m-[10px]">
      <h2 className="font-[700]">Select up to 3 tags<sup className="text-[red]">*</sup></h2>
       <div className="flex flex-wrap w-full mt-5">
          <div className={`bg-slate-200 px-5 h-8 flex justify-center items-center rounded-full text-[12px] mr-3 hover:bg-blue-200 cursor-pointer my-1 ${toughGrader && "cursor-pointer my-1"}`}
          style={ {background: toughGrader ? "rgb(191 219 254 / 1)" : ""}}

          onClick={() => {setToughGrader(!toughGrader)}}
          >Tough Grader</div>
          
          <div className={`bg-slate-200 px-5 h-8 flex justify-center items-center rounded-full text-[12px] mr-3 hover:bg-blue-200 cursor-pointer my-1 ${getReadyToRead && "bg-blue-200 cursor-pointer my-1"}`}
          style={ {background: getReadyToRead ? "rgb(191 219 254 / 1)" : ""}}
onClick={() => {setGetReadyToRead(!getReadyToRead)}}>Get Ready to Read</div>

          <div 
          className={`bg-slate-200 px-5 h-8 flex justify-center items-center rounded-full text-[12px] mr-3 hover:bg-blue-200 cursor-pointer my-1 ${participationMatters && "bg-blue-200 cursor-pointer my-1"}`}
          style={ {background: participationMatters? "rgb(191 219 254 / 1)" : ""}}
          onClick={() => {setParticipationMatters(!participationMatters)}}
          >Participation matters</div>

          <div 
             className={`bg-slate-200 px-5 h-8 flex justify-center items-center rounded-full text-[12px] mr-3 hover:bg-blue-200 cursor-pointer my-1 ${extraCredits && "bg-blue-200 cursor-pointer my-1"}`}
             style={ {background: extraCredits ? "rgb(191 219 254 / 1)" : ""}}
             onClick={() => {setExtraCredits(!extraCredits)}}
          >Extra Credits</div>

          <div className={`bg-slate-200 px-5 h-8 flex justify-center items-center rounded-full text-[12px] mr-3 hover:bg-blue-200 cursor-pointer my-1 ${groupProjects && "bg-blue-200 cursor-pointer my-1"}`}
            style={ {background: groupProjects ? "rgb(191 219 254 / 1)" : ""}}
             onClick={() => {setGroupProjects(!groupProjects)}}>Group Projects</div>

          <div  className={`bg-slate-200 px-5 h-8 flex justify-center items-center rounded-full text-[12px] mr-3 hover:bg-blue-200 cursor-pointer my-1 ${amazinglecturers && "bg-blue-200 cursor-pointer my-1"}`}
                      style={ {background: amazinglecturers ? "rgb(191 219 254 / 1)" : ""}}
             onClick={() => {setAmazingLecturers(!amazinglecturers)}}>Amazing lecturers</div>

          <div className={`bg-slate-200 px-5 h-8 flex justify-center items-center rounded-full text-[12px] mr-3 hover:bg-blue-200 cursor-pointer my-1 ${clearGradingMaterials && "bg-blue-200 cursor-pointer my-1"}`}
             style={ {background: clearGradingMaterials ? "rgb(191 219 254 / 1)" : ""}}
             onClick={() => {setClearGradingMaterials(!clearGradingMaterials)}}>Clear grading materials</div>

          <div className={`bg-slate-200 px-5 h-8 flex justify-center items-center rounded-full text-[12px] mr-3 hover:bg-blue-200 cursor-pointer my-1 ${givesGoodFeedback && "bg-blue-200 cursor-pointer my-1"}`}
           style={ {background: givesGoodFeedback ? "rgb(191 219 254 / 1)" : ""}}
             onClick={() => {setGivesGoodFeedback(!givesGoodFeedback)}}>Gives good feedback</div>

          <div  className={`bg-slate-200 px-5 h-8 flex justify-center items-center rounded-full text-[12px] mr-3 hover:bg-blue-200 cursor-pointer my-1 ${inspirational && "bg-blue-200 cursor-pointer my-1"}`}
           style={ {background: inspirational ? "rgb(191 219 254 / 1)" : ""}}
          
             onClick={() => {setInspirational(!inspirational)}}>Inspirational</div>

          <div className={`bg-slate-200 px-5 h-8 flex justify-center items-center rounded-full text-[12px] mr-3 hover:bg-blue-200 cursor-pointer my-1 ${lotsOfHomework && "bg-blue-200 cursor-pointer my-1"}`}
          style={ {background: lotsOfHomework ? "rgb(191 219 254 / 1)" : ""}}
             onClick={() => {setLotsOfHomework(!lotsOfHomework)}}>Lots of HomeWork</div>

          <div className={`bg-slate-200 px-5 h-8 flex justify-center items-center rounded-full text-[12px] mr-3 hover:bg-blue-200 cursor-pointer my-1 ${hilarous && "bg-blue-200 cursor-pointer my-1"}`}
             style={ {background: hilarous ? "rgb(191 219 254 / 1)" : ""}}
             onClick={() => {setHilarous(!hilarous)}}>Hilarious</div>

          <div className={`bg-slate-200 px-5 h-8 flex justify-center items-center rounded-full text-[12px] mr-3 hover:bg-blue-200 cursor-pointer my-1 ${bewareOfPopQuiz && "bg-blue-200 cursor-pointer my-1"}`}
           style={ {background: bewareOfPopQuiz ? "rgb(191 219 254 / 1)" : ""}}
             onClick={() => {setBewareOfPopQuiz(!bewareOfPopQuiz)}}>Beware of pop quiz</div>

          <div className={`bg-slate-200 px-5 h-8 flex justify-center items-center rounded-full text-[12px] mr-3 hover:bg-blue-200 cursor-pointer my-1 ${soManyPapers && "bg-blue-200 cursor-pointer my-1"}`}
           style={ {background: soManyPapers ? "rgb(191 219 254 / 1)" : ""}}
             onClick={() => {setSoManyPapers(!soManyPapers)}}>So Many papers</div>

          <div className={`bg-slate-200 px-5 h-8 flex justify-center items-center rounded-full text-[12px] mr-3 hover:bg-blue-200 cursor-pointer my-1 ${caring && "bg-blue-200 cursor-pointer my-1"}`}
           style={ {background: caring ? "rgb(191 219 254 / 1)" : ""}}
             onClick={() => {setCaring(!caring)}}>Caring</div>

          <div  className={`bg-slate-200 px-5 h-8 flex justify-center items-center rounded-full text-[12px] mr-3 hover:bg-blue-200 cursor-pointer my-1 ${respected && "bg-blue-200 cursor-pointer my-1"}`}
          style={ {background: respected ? "rgb(191 219 254 / 1)" : ""}}
             onClick={() => {setRespected(!respected)}}>Respected</div>

          <div className={`bg-slate-200 px-5 h-8 flex justify-center items-center rounded-full text-[12px] mr-3 hover:bg-blue-200 cursor-pointer my-1 ${lectureHeavy && "bg-blue-200 cursor-pointer my-1"}`}
          style={ {background: lectureHeavy ? "rgb(191 219 254 / 1)" : ""}}
             onClick={() => {setLectureHeavy(!lectureHeavy)}}>Lecture Heavy</div>

          <div className={`bg-slate-200 px-5 h-8 flex justify-center items-center rounded-full text-[12px] mr-3 hover:bg-blue-200 cursor-pointer my-1 ${testHeavy && "bg-blue-200 cursor-pointer my-1"}`}
          style={ {background: testHeavy ? "rgb(191 219 254 / 1)" : ""}}
             onClick={() => {setTestHeavy(!testHeavy)}}>Test Heavy</div>

          <div className={`bg-slate-200 px-5 h-8 flex justify-center items-center rounded-full text-[12px] mr-3 hover:bg-blue-200 cursor-pointer my-1 ${gradedByFewThings && "bg-blue-200 cursor-pointer my-1"}`}
           style={ {background: gradedByFewThings ? "rgb(191 219 254 / 1)" : ""}}
             onClick={() => {setGradedByFewThings(!gradedByFewThings)}}>Graded by few things </div>

          <div className={`bg-slate-200 px-5 h-8 flex justify-center items-center rounded-full text-[12px] mr-3 hover:bg-blue-200 cursor-pointer my-1 ${accessibleOutsideClass && "bg-blue-200 cursor-pointer my-1"}`}
           style={ {background: accessibleOutsideClass ? "rgb(191 219 254 / 1)" : ""}}
             onClick={() => {setAccessibleOutsideClass(!accessibleOutsideClass)}}>Accessible outside class</div>

          <div className={`bg-slate-200 px-5 h-8 flex justify-center items-center rounded-full text-[12px] mr-3 hover:bg-blue-200 cursor-pointer my-1 ${onlineSavvy && "bg-blue-200 cursor-pointer my-1"}`}
           style={ {background: onlineSavvy ? "rgb(191 219 254 / 1)" : ""}}
             onClick={() => {setOnlineSavvy(!onlineSavvy)}}>Online Savvy</div>
       </div>

    </div>

{/*     
    <div className={styles.singleRateBox}>
      <h2>Write a Review<sup>*</sup></h2>

      <p className={styles.paragraph}>
        Discuss the lecturer's professional abilities including teaching style and ability to convey the material clearly
      </p>
      <div className={styles.guideLineBox}>
        <div className={styles.guideLineHeader}>
          <div className={styles.guideLinesText}>
            <IconContext.Provider
              value={{ color: 'black', size: '20px' }}
            >
              <LuAlertOctagon />
            </IconContext.Provider>
            <h4>Guidelines</h4>
          </div>
        </div>
        <ul>
          <li>Your rating could be removed if you use profanity or derogatory terms.</li>
          <li>Don't claim that the lecturer shows bias or favoritism for or against students.</li>
          <li>Don’t forget to proof read!</li>
        </ul>
        <p className={styles.viewLink}>View all guidelines</p>
       
      </div>
      <input
         placeholder="what do you want other students to know about this lecturer?" 
         className={styles.newInput}
         value={comment}
         onChange={(e) => setComment(e.target.value)}
         />
    </div> */}

    <div className={styles.singleRateBox}>
      <div className={styles.subContainer}>
      <p>By clicking the "Submit" button, I acknowledge that I have read and agreed to the Rate My Lecturer's Site Guidelines, Terms of Use and Privacy Policy. Submitted data becomes the property of RateMyLecturers.com. IP addresses are logged.</p>
      <button onClick={addARating}>Submit Rating</button>
      </div>
      
    


    </div>
  </div>
)
      })}
    
    </div>
  )
}

export default RateAProf;