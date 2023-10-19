import React from "react"
import styles from "./styles.module.css"
import {FaGraduationCap} from 'react-icons/fa'
import { IconContext } from "react-icons";

interface Props {
    profileInput: string;
    setProfileInput: any;
  }

const DropDown = ({profileInput, setProfileInput} : Props) => {
    const listOfProfessors = [
        {
            id: "1",
            name: "Henry Omofonmwan",
            dept: "computer science",
            college: "funnab"
        }, 
        {
            id: "1",
            name: "Henry Omofonmwan",
            dept: "lola",
            college: "funnab"
        },
        {
            id: "3",
            name: "James odasi",
            dept: "computer science",
            college: "funnab"
        },
        {
            id: "4",
            name: "James odasi",
            dept: "computer science",
            college: "funnab"
        },

    ]
    return (
        <div className={styles.parentContainer}>
            <div className={styles.inputContainer}>
                <div className={styles.iconContainer}>
                <IconContext.Provider
                                value={{ color: 'black', size: '20px' }}
                            >
                                <FaGraduationCap />
                            </IconContext.Provider>

                </div>
                <input 
                placeholder="Your School" 
                value={profileInput} 
                onChange={(e) => setProfileInput(e.target.value)}
                />
            </div>
            
        </div>
    )
}

export default DropDown;