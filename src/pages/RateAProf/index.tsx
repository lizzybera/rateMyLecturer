import React, { useState, useEffect } from "react"
import styles from "./style.module.css"

const RateAProf = () => {

    const [professorRating, setProfessorRating] = useState<number>(0)
    const [professorRatingMessage, setProfessorRatingMessage] = useState("")
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

    return (
        <div className="w-full h-[100%] py-10">
            <div className="flex flex-col px-10 py-10 mobile:px-6 mobile:justify-center"

            >
                <div className={styles.singleRateBox}>
                    <h2>Rate your Professor <sup>*</sup></h2>
                    <div className={styles.rateBox}>
                        <div
                            className={`${professorRating === 5 && styles.fifthElementActive} ${styles.fifthElement}`}
                            onClick={() => setProfessorRating(5)}
                        ></div>
                        <div
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
            </div>
        </div>
    )
}

export default RateAProf;