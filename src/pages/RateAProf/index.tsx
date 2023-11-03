import  { useState, useEffect } from "react"
import styles from "./style.module.css"
import { LuAlertOctagon } from "react-icons/lu"
import { IconContext } from "react-icons";
import { useParams } from "react-router";
import axios from "axios";
import LoadingScreen from "../../components/LoadingScreen";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RateAProf = () => {
 const {id} = useParams();
 const user = useSelector((state : any) => state.user)
 console.log(user, "the user")
  const [professorRating, setProfessorRating] = useState<number>(0)
  const [professorDifficulty, setProfessorDifficulty] = useState<number>(0)
  const [professorRatingMessage, setProfessorRatingMessage] = useState("")
  const [professorDifficultyMessage, setprofessorDifficultyMessage] = useState("")

  const [takeProfessorAgain, setTakeProfessorAgain] = useState('none');
  const [creditClass, setCreditClass] = useState("none")
  const [useTextBooks, setUseTextBook] = useState("none")
  const [mandatory, setMandetory] = useState("none")
  const [comment, setComment] = useState("")



 

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
      setprofessorDifficultyMessage("Awful")
    } else if (professorDifficulty === 2) {
      setprofessorDifficultyMessage("OK")
    } else if (professorDifficulty === 3) {
      setprofessorDifficultyMessage("Good")
    } else if (professorDifficulty === 4) {
      setprofessorDifficultyMessage("Great")
    } else if (professorDifficulty === 5) {
      setprofessorDifficultyMessage("Awesome")
    }
  }, [professorDifficulty])


  const [singleProfessor, setSingleProfessor] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
      setLoading(true)
      axios.get(
          `https://lecturer-rating.onrender.com/api/prof`
        )
        .then((response) => {
       setLoading(false)
          console.log(response)
          setSingleProfessor(response.data.data.filter((item: any) => item.userId.includes(id)))
         })
        .catch((err) => {
          console.log(err)
          setLoading(false)
         
        })
  }, [id])

  console.log(singleProfessor)

  const addARating = () => {
    if (professorRating === 0) {
      toast.error("Please add a rating for this lecturer")
    }
    else if (professorRating === 0) {
      toast.error("Please add a difficulty for this lecturer")
    }
    else if (comment?.length < 1) {
      toast.error("Please add a comment for this lecturer")
    }
    else {
      setLoading(true)
      axios.post(
        `https://lecturer-rating.onrender.com/api/user/${user._id}/${singleProfessor.userId}`,
        {
          rating: professorRating,
          comments: comment
        }
      )
      .then((response) => {
        toast.success("Lecturar rated successfully")
        setLoading(false)
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

    <div className={styles.fixedHeader}>
      <div className={styles.fixedHeaderContainer}>
      <h2>Rate : <b>{list.Name}</b></h2>
      <p>{list.Professional_Department} . <span>{list.school}</span></p>
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
          <p>1 - Awful</p>
          <p>5 - Awesome</p>
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
    </div>

    <div className={styles.singleRateBox}>
      <div className={styles.subContainer}>
      <p>By clicking the "Submit" button, I acknowledge that I have read and agreed to the Rate My Lecturer's Site Guidelines, Terms of Use and Privacy Policy. Submitted data becomes the property of RateMyProfessors.com. IP addresses are logged.</p>
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