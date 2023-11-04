
import Home from '../Home';
import styles from "./style.module.css"
import editPencil from "../../assets/edit-pencil.svg"
import editFlower from "../../assets/edit-flower.svg"
import editLike from "../../assets/edit-like.svg"
import LandingHeader from '../../components/common/LandingHeader';
import Footer from '../../components/common/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { toggleState} from "../../global/GlobalState";



const FrontPage = () => {
    const user = useSelector((state : any) => state.user)
    const dispatch = useDispatch();
  
    return (
        <div>
            <LandingHeader />
            <Home />
              <div className={styles.rpmParentContainer}>
            <h1>Join the RML Family</h1>
                <h3>Love RML? Let's make it official.</h3>

            <div className={styles.rmpContainer}>
             
                <div className={styles.rmpSubContainer}>
                    <img src={editPencil} alt="edit-pencil" />
                    <h2>Manage and edit your ratings</h2>
                </div>
                <div className={styles.rmpSubContainer}>
                    <img src={editFlower} alt="edit-flower" />
                    <h2>Your ratings are always anonymous</h2>
                </div>
                <div className={styles.rmpSubContainer}>
                    <img src={editLike} alt="edit-like" />
                    <h2>Like or dislike ratings</h2>
                </div>
            </div>
            {user ? (
                   <button className={styles.signUpButton}  
              >{`Hey ${user.name}`}</button>
            ) : (
                <button
                 className={styles.signUpButton}
                 onClick={()=>{
                    dispatch(toggleState())
                }}
                 >Sign up now!</button>
            )}
         
            </div>
            <Footer />
        </div>
    )
}

export default FrontPage;