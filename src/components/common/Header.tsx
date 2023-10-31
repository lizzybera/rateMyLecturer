import pics from "../../assets/rmp 2.svg";
import pics2 from "../../assets/apple logo.svg";
import pics3 from "../../assets/dropdown main.svg";
import pics4 from "../../assets/apple black.png";
import { RiGraduationCapFill } from "react-icons/ri";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut, toggleState, toggleState2, toggleState3 } from "../../global/GlobalState";
import Register from "../../pages/auth/Register";
import SignIn from "../../pages/auth/SignIn";
import { Link, useNavigate } from "react-router-dom";
import LandingDropDown from "./LandingDropDown";
import { LiaAppleAltSolid } from "react-icons/lia";
import axios from "axios";
import styles from './style.module.css'
import { IconContext } from "react-icons";


interface HeaderProps {
  inputValue?: any;
 setInputValue?: any;
}


const Header : React.FC<HeaderProps> = ({inputValue, setInputValue}) => {
  const navigate = useNavigate()
  const user = useSelector((state : any) => state.user)
  const dispatch = useDispatch();

  const toggle = useSelector((state: any) => state.toggle);
  const toggle2 = useSelector((state: any) => state.toggle2);
  const toggle3 = useSelector((state: any) => state.toggle3);

  const [search, setSearch] = useState<boolean>(false)

  const onSearch = () => {
    setSearch(!search)
  }

  const [drop, setDrop] = useState<boolean>(false)
  const [show, setShow] = useState<boolean>(false);
  const [show2, setShow2] = useState<boolean>(true);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [dropdown2, setDropdown2] = useState<boolean>(false);

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      // Execute your function here
 
      navigate("/profs/all")
    }
  };

  const onDropDown = () => {
    setDropdown(!dropdown);
  };

  const onDropDown2 = () => {
    setDropdown2(!dropdown2);
  };

  const onShow2 = () => {
    setShow2(!show2);
  };
  const onShow = () => {
    setShow(!show);
  };

const onDrop = () =>{
    setDrop(!drop)
  }

  const [showed, setShowed] = useState<boolean>(false)

  const onShowed = ()=>{
    setShowed(!showed)
  }

  const [profileInput, setProfileInput] = useState("")

    const [loading, setLoading] = useState(true)

    const [allProfessors, setAllProfessors] = useState([])


    useEffect(() => {
      setLoading(true)
      axios.get(
          `https://lecturer-rating.onrender.com/api/prof`
      )
          .then((response) => {
              setLoading(false)
              console.log(response)
              const filteredProfessors = response.data.data.filter((person : any) => person.Name.toLowerCase().includes(profileInput.toLowerCase()));
              setAllProfessors(filteredProfessors)
          })
          .catch((err) => {
              console.log(err)
              setLoading(false)
          })
  }, [profileInput])


    // const setFunnabActiveFunction = () => {
    //     setFunnabActive(true);
    //     setOtherSchoolActive(false);
    // }
console.log(profileInput);

  return (
    <>
      {toggle && <Register />}
      {toggle2 && <SignIn />}
      {toggle3 && <LandingDropDown />}

          <div className="w-full h-[65px] bg-black text-white justify-center items-center flex fixed">
        {/* main */}
        <div className="w-[95%] flex items-center justify-between">
          {
            !search ? (
              <div className=" text-[20px] headerLarge:flex hidden"
          onClick={()=>{
            dispatch(toggleState3())
          }}
          >
            <AiOutlineMenu />{" "}
          </div>
            ) : null
          }

          {/* logo / search */}
          <div className="flex items-center h-full">
            {/* logo */}
{
  !search ? (
    <img className="mr-12" src={pics} alt="logo" onClick={() => navigate("/")}/>
  ) : null
}
         

            <div className="flex ml-7 headerLarge:hidden">
              {!show2 ? (
                //  search1
                <div className="flex items-center justify-center h-full">
                  <div className="flex items-center cursor-pointer">
                    <div
                      className="flex items-center"
                      // onClick={() => {
                      //   onDropDown();
                      //   onShow();
                      // }}
                    >
                      <img src={pics2} alt="logo" className="" />

                      <span className="text-[19px] ml-1 mt-1">Professors</span>

                      {show ? (
                        <img src={pics3} alt="dropdown" className="ml-3" />
                      ) : (
                        <img
                          src={pics3}
                          alt="dropdown"
                          className="ml-3 rotate-180"
                        />
                      )}
                    </div>

                    {/* search bar  */}

                    
                    <div className="flex ml-10 text-black smallLaptop:ml-5 tablet:ml-4">
                   
                      
                          <div>
                           <>
                           <input
                        type="text"
                        placeholder="professor name"
                        value={profileInput} onChange={(e) => setProfileInput(e.target.value)}
                        className="w-[350px] h-[40px] rounded-full px-5 outline-none desktop:ml-1 smallLaptop:ml-1"
                         />
                           </>

                        {profileInput.length > 0 && (
                          <div className={styles.newDropDown} id="style-1">
                              <div>
                              <input
                        type="text"
                        placeholder="professor name"
                        value={profileInput} onChange={(e) => setProfileInput(e.target.value)}
                        className="w-[350px] h-[40px] rounded-full px-5 outline-none desktop:ml-1 smallLaptop:ml-1"
                        onClick={()=>{
                          onShowed()
                        }} />

                              </div>

                             <div>
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
  
                          </div>
                      )}
                        
                          </div>

                     
                      <input
                        type="text"
                        placeholder="professor school"
                        className="w-[350px] h-[40px] rounded-full px-5 ml-5 desktop:ml-1 outline-none smallLaptop:ml-1"
                      />
                    </div>
                  </div>

                  {/* <div>search</div> */}
                </div>
              ) : (
                <div className="flex items-center justify-center h-full tablet:hidden">
                  <div className="flex items-center cursor-pointer">
                    <div
                      className="flex items-center"
                      // onClick={() => {
                      //   onDropDown2();
                      //   onShow();
                      // }}
                    >
                      {/* <img src={pics2} alt="logo" />  */}
                      <div className="text-[20px] smallLaptop:hidden">
                        <RiGraduationCapFill />
                      </div>

                      <span className="text-[19px] ml-1 mt-1">School</span>

                      {!show ? (
                        <img src={pics3} alt="dropdown" className="ml-3 mr-8" />
                      ) : (
                        <img
                          src={pics3}
                          alt="dropdown"
                          className="ml-3 mr-8 rotate-180"
                        />
                      )}
                    </div>

                    {/* search bar  */}

                    <div className="flex ml-5 text-black desktop:ml-2">
                      <input
                        type="text"
                        value={inputValue}
                        onKeyPress={handleKeyPress}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Enter your Professor name"
                        className="w-[750px] h-[40px] rounded-full px-5 outline-none smallLaptop:w-[740px]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* dropdown for school */}
              {dropdown ? (
                <div
                  className="w-[180px] h-[65px] bg-white absolute left-[150px] smallLaptop:left-[100px] hover:bg-[blue]  shadow-lg top-[55px] flex items-center px-4 rounded-md cursor-pointer  text-black hover:text-white font-[500]"
                  // onClick={() => {
                  //   onDropDown();
                  //   onShow2();
                  // }}
                >
                  <div className="flex items-center">
                    {/* <img src={pics2} alt="logo" className="bg-black"/> */}
                    <div className="text-[20px] ">
                      <RiGraduationCapFill />
                    </div>

                    <span className="text-[18px] ml-3">Schools</span>
                  </div>
                </div>
              ) : null}

              {/* dropdown for professor */}
              {dropdown2 ? (
                <div
                  className="w-[180px] h-[65px] bg-white absolute left-[150px] hover:bg-[blue] smallLaptop:left-[100px] shadow-lg top-[55px] flex items-center px-4 rounded-md cursor-pointer  text-black hover:text-white font-[500]"
                  // onClick={() => {
                  //   onShow2();
                  //   onDropDown2();
                  // }}
                >
                  <div className="flex items-center">
                    <div className="text-[20px] ">
                      <img src={pics4} alt="" />
                    </div>

                    <span className="text-[18px] ml-3">Professors</span>
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          {/* buttons */}
            <div>
          
              {
                user? (
                  // name of user if signed in
                   <div className=" w-[500px] h-[40px]  flex justify-center items-center text-[17px] rounded-full text-white headerLarge:hidden cursor-pointer"
                   onClick={()=>{
                    onDrop()
                  }}
                  >
                              <div className="py-2 font-[700] px-5 rounded-full hover:bg-slate-800 bg-black">Hey, {user?.name}</div>
                            </div>
                ) : (
                  <div className="flex headerLarge:hidden">
              {/* login */}
            <div
              className="text-[15px] font-[500] rounded-full h-[30px] px-3 cursor-pointer hover:bg-gray-900 flex justify-center items-center"
              onClick={() => {
                dispatch(toggleState2());
                console.log("clicked");
              }}
            >
              Log in
            </div>

            {/* Sign in */}
            <div className="text-[15px] font-[500] rounded-full h-[35px] w-[85px] cursor-pointer hover:bg-gray-900 flex justify-center items-center border border-white hover:border-0 "
            onClick={() => {
                dispatch(toggleState());
                console.log("clicked");
              }}
            >
              Sign in
            </div>
            </div>
                )
              }
           
           {
                  user? (
                    <>
                      {
                  drop ? (
                    <>
                      <div className="w-[180px] rounded-md bg-white shadow-2xl absolute right-[50px] top-[55px] z-[100] text-[13px] font-[700] headerMedium:hidden flex flex-col text-black">
                 <Link to="/profile">
                 <div className="w-full h-[40px] hover:text-white  hover:bg-blue-700 cursor-pointer flex items-center px-3 rounded-t-md">Profile</div>
                 </Link>

                 <Link to="/acct-settings">
                 <div className="w-full h-[40px] hover:text-white  hover:bg-blue-700 cursor-pointer flex items-center px-3">Account Settings</div>
                 </Link>

                 <Link to="/ratings" >
                 <div className="w-full h-[40px] hover:text-white  hover:bg-blue-700 cursor-pointer flex items-center px-3">Your Ratings</div>
                 </Link>

                <Link to="/saved-prof">
                <div className="w-full h-[40px] hover:text-white  hover:bg-blue-700 cursor-pointer flex items-center px-3">Saved Professors</div>
                </Link>

                 <div className="w-full h-[40px] hover:text-white  hover:bg-blue-700 cursor-pointer flex items-center px-3"
                 onClick={()=>{
                  dispatch(logOut())
                 }}
                 >Logout</div>
                </div>
                    </>
                  ) : null
                }
                    </>
                  ) : null
                }

          </div>

          <div className="hidden headerLarge:flex"
          onClick={()=>{
            onSearch()
          }}
          >
            <AiOutlineSearch />
          </div>

        
{/* when searched */}
          {
            search ? (
              <div className="w-full h-[65px] bg-black text-white items-center fixed justify-between hidden headerLarge:flex">
          <div className="flex">
          <img src={pics2} alt="logo" className="ml-10" />
           <img src={pics3} alt="dropdown" className="ml-3 mr-4" />
     
           <div>
                                <>
                                <input
                             type="text"
                             placeholder="professor name"
                             value={profileInput} onChange={(e) => setProfileInput(e.target.value)}
                             className="w-[90%] text-black h-[40px] rounded-full px-5 outline-none desktop:ml-1 smallLaptop:ml-1 placeholder:text-[15px]"
                              />
                                </>
     
                             {profileInput.length > 0 && (
                               <div className={styles.newDropDown} id="style-1">
                                   <div>
                                   <input
                             type="text"
                             placeholder="professor name"
                             value={profileInput} onChange={(e) => setProfileInput(e.target.value)}
                             className="w-[90%] text-black h-[40px] rounded-full px-5 outline-none desktop:ml-1 smallLaptop:ml-1"
                             onClick={()=>{
                               onShowed()
                             }} />
     
                                   </div>
     
                                  <div>
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
       
                               </div>
                           )}
                             
                               </div>
     
          </div>
     
          <div className="mr-10"
          onClick={()=>{
           onSearch()
          }}
          >cancel</div>
           </div>
            ) : null
          }


        </div>
      </div>
          
      
    </>
  );
};

export default Header;
