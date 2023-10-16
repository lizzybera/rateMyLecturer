import React from "react"
import styles from "./styles.module.css"
import {FaGraduationCap} from 'react-icons/fa'
import { IconContext } from "react-icons";

const DropDown = () => {
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
                <input placeholder="Your School"/>
            </div>
        </div>
    )
}

export default DropDown;