import pics from "../../assets/rmp 2.svg";
import pics2 from "../../assets/apple logo.svg";
import pics3 from "../../assets/dropdown main.svg";
import pics4 from "../../assets/apple black.png";
import { RiGraduationCapFill } from "react-icons/ri";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleState, toggleState2 } from "../../global/GlobalState";
import Register from "../../pages/auth/Register";
import SignIn from "../../pages/auth/SignIn";
import { useNavigate } from "react-router";

interface HeaderProps {
  inputValue?: any;
 setInputValue?: any;
}


const Header: React.FC<HeaderProps > = ({inputValue, setInputValue}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggle = useSelector((state: any) => state.toggle);
  const toggle2 = useSelector((state: any) => state.toggle2);

  const [show, setShow] = useState<boolean>(false);
  const [show2, setShow2] = useState<boolean>(false);
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

  return (
    <>
      {toggle && <Register />}
      {toggle2 && <SignIn />}
      <div className="w-full h-[65px] bg-black text-white justify-center items-center flex fixed">
        {/* main */}
        <div className="w-[95%] flex items-center justify-between">
          <div className=" text-[20px] headerLarge:flex hidden">
            <AiOutlineMenu />{" "}
          </div>

          {/* logo / search */}
          <div className="flex items-center h-full">
            {/* logo */}
            <img className="mr-12" src={pics} alt="logo" onClick={() => navigate("/")}/>

            <div className="flex ml-7 headerLarge:hidden">
              {show2 ? (
                //  search1
                <div className="flex items-center justify-center h-full">
                  <div className="flex items-center cursor-pointer">
                    <div
                      className="flex items-center"
                      onClick={() => {
                        onDropDown();
                        onShow();
                      }}
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
                      <input
                        type="text"
                        placeholder="professor name"
                        className="w-[350px] h-[40px] rounded-full px-5 outline-none desktop:ml-1 smallLaptop:ml-1"
                      />

                      <input
                        type="text"
                        placeholder="professor name"
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
                      onClick={() => {
                        onDropDown2();
                        onShow();
                      }}
                    >
                      {/* <img src={pics2} alt="logo" />  */}
                      <div className="text-[20px] smallLaptop:hidden">
                        <RiGraduationCapFill />
                      </div>

                      <span className="text-[19px] ml-1 mt-1">School</span>

                      {!show ? (
                        <img src={pics3} alt="dropdown" className="ml-3 " />
                      ) : (
                        <img
                          src={pics3}
                          alt="dropdown"
                          className="ml-3 rotate-180"
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
                  onClick={() => {
                    onDropDown();
                    onShow2();
                  }}
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
                  onClick={() => {
                    onShow2();
                    onDropDown2();
                  }}
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

          <div className="hidden headerLarge:flex">
            <AiOutlineSearch />
          </div>

          {/* <div>jjjj</div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
