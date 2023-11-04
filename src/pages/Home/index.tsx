//@ts-nocheck
import { useState, useEffect } from 'react'
import styles from './style.module.css'
import rateLogo from "../../assets/rate-logo.svg"
import { FaUniversity } from "react-icons/fa"
import { BiSolidSchool } from "react-icons/bi"
import { AiOutlineSearch } from "react-icons/ai"
import { IconContext } from "react-icons";
import DropDown from '../../components/DropDown'
import { LiaAppleAltSolid } from "react-icons/lia"
import Footer from '../../components/common/Footer'
import { useNavigate } from 'react-router-dom'
import LoadingScreen from '../../components/LoadingScreen'
import axios from 'axios'


const Home = () => {
    const navigate = useNavigate()
    const [profileInput, setProfileInput] = useState("")
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
    const [funnabActive, setFunnabActive] = useState(false)

    const [otherSchoolActive, setOtherSchoolActive] = useState(false)

    const [loading, setLoading] = useState(true)

    const [allProfessors, setAllProfessors] = useState([])


    useEffect(() => {
        setLoading(true)
        axios.get(
            `https://lecturer-rating.onrender.com/api/prof`
        )
            .then((response) => {
                setLoading(false)
                console.log(response.data.data, "my data");
                const filteredBasedOnFunnab =  response.data.data.filter(person => person.school.toLowerCase().includes("FUNAAB".toLowerCase()))
                const filteredProfessors =  filteredBasedOnFunnab.filter(person => person.Name.toLowerCase().includes(profileInput.toLowerCase()));
                setAllProfessors(filteredProfessors)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }, [profileInput])

    const setFunnabActiveFunction = () => {
        setFunnabActive(true);
        setOtherSchoolActive(false);
    }

    const setOtherSchoolActiveFunction = () => {
        setFunnabActive(false);
        setOtherSchoolActive(true);
        navigate("/prof/signup")
    }
    console.log(profileInput)
    return (
        <>
            {/* {loading && (
                <span className={styles.loader}></span>
            )} */}
            {/* {loading && (<LoadingScreen />)} */}
            <div style={{ position: 'relative' }}>
                <div className={styles.newDropDownContainer}>
                    <header>
                        <section className={styles.heroHeader}>
                            {/* <div className={styles.ratingCover}>
                                <img src={rateLogo} alt='rate-logo' />
                            </div> */}
                            <h1 style={{fontSize: "1.7rem", fontWeight: "800"}}>Rate My Lecturer</h1>
                            <h1>Please Select Your School</h1>
                            <div className={styles.pointerFlex}>
                                <div
                                    className={`${styles.container} ${funnabActive && styles.active}`}
                                    onClick={setFunnabActiveFunction}
                                >
                                    <IconContext.Provider
                                        value={{ color: 'white', size: '50px' }}
                                    >
                                        <FaUniversity />
                                    </IconContext.Provider>
                                    <p>FUNAAB</p>
                                </div>
                                <div
                                    className={`${styles.container} ${otherSchoolActive && styles.active}`}
                                    onClick={setOtherSchoolActiveFunction}
                                >
                                    <IconContext.Provider
                                        value={{ color: 'white', size: '50px' }}
                                    >
                                        <BiSolidSchool />
                                    </IconContext.Provider>
                                    <p>OTHERS</p>
                                </div>
                            </div>
                        </section>
                        {funnabActive && (
                            <>
                                {profileInput.length < 1 && (
                                    <DropDown profileInput={profileInput} setProfileInput={setProfileInput} />
                                )}
                            </>
                        )}
                    </header>
                    {profileInput.length > 0 && (
                        <div className={styles.newDropDown} id="style-1">
                            <div className={styles.newInputContainer}>
                                <IconContext.Provider
                                    value={{ color: 'black', size: '20px' }}
                                >
                                    <AiOutlineSearch />
                                </IconContext.Provider>
                                <input placeholder='Enter Professor Name' value={profileInput} onChange={(e) => setProfileInput(e.target.value)} />
                            </div>
                            {loading ? (
                                <div className={styles.loaderContainer}>
                                    <span className={styles.loader}></span>
                                </div>
                            ) : (
                                <div>
                                    {allProfessors.length > 0 ? (
                                        <>
                                            {allProfessors?.map((list: any) => {
                                                return (
                                                    <div
                                                        className={styles.parentListContainer}
                                                        onClick={() => navigate(`/professor-details/${list.userId}`)}
                                                    >
                                                        <div className={styles.firstContainer}>

                                                            <span className="changeColor">
                                                                <IconContext.Provider
                                                                    value={{ size: '30px' }}
                                                                >
                                                                    <LiaAppleAltSolid
                                                                        onMouseOver={({ target }) => target.style.color = "white"}
                                                                        onMouseOut={({ target }) => target.style.color = "black"} />
                                                                </IconContext.Provider>
                                                            </span>
                                                        </div>
                                                        <div className={styles.secondContainer}>
                                                            <h1>{list.Name}</h1>
                                                            <div className={styles.secondContainerHolder}>
                                                                <p className={styles.listDepartment}>{list.Professional_Department}</p>
                                                                <p className={styles.dotCover}>.</p>
                                                                <p className={styles.listCollege}>{list.school}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </>
                                    ) : (
                                        <div className={styles.noProfessor}>
                                            <p>Professor not found</p>
                                        </div>
                                    )}

                                </div>
                            )}

                        </div>
                    )}
                </div>


                {/* <Footer /> */}
            </div>
        </>

    )
}

export default Home;