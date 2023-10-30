// import styles from "./styles.module.css"
import styles from "../../components/DropDown/styles.module.css"
import {FaGraduationCap} from 'react-icons/fa'
import { IconContext } from "react-icons";

interface Props2 {
    profileInput: string;
    setProfileInput: any;
  }

const DropDown2 = ({profileInput, setProfileInput} : Props2) => {
   
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
                placeholder="Search for a Professor" 
                value={profileInput} 
                onChange={(e) => setProfileInput(e.target.value)}
                />
            </div>
            
        </div>
    )
}

export default DropDown2;