// import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { useSelector } from "react-redux";
import pics from "./../../assets/rateProf.gif"


const SavedProfessors = () => {
  const user = useSelector((state : any) => state.user)

//   const [name, setName] = useState<boolean>(false);
//   const [firstName, setFirstName] = useState<boolean>(false);
//   const [show, setShow] = useState<boolean>(false);

//   const onName = () => {    
//     setName(!name);
//   };
//   const onShow = () => {    
//     setShow(!show);
//   };

//   const onName2 = () => {
//     if(name === true){
//       setName(false)
//     }
//   };
//   const onFirstName = () => {    
//     setFirstName(!firstName);
//   };

//   const onFirstName2 = () => {
//     if(firstName === true){
//       setFirstName(false)
//     }
//   };
 


  return (
    <>
    <Header />

    <div className="flex w-full h-[100vh] justify-center  pt-[130px] pb-[350px]"
    // onClick={()=>{
    //   onName2()
    //   onFirstName2()
    // }}
    >
     <div className="w-[60%] min-h-[400px] justify-center items-center headerMedium:w-full headerMedium:px-8">
        <div className="font-[800] text-[30px] mb-16">Hey, {user?.name}</div>

{/* Header */}
        <div className="flex">
          <Link to="/profile">
          <div className="mr-14 text-[16px]  headerMedium:text-[15px] cursor-pointer">
            Profile
          {/* <div className="w-full bg-black h-[2px] mt-1 "/> */}
          </div>
          </Link>

          <Link to="/acct-settings">
          <div className="mr-14 text-[16px] hover:font-[600]  headerMedium:text-[15px] cursor-pointer">
          Account Settings
          {/* <div className="w-full bg-black h-[2px] mt-1 "/> */}
          </div>
          </Link>

          <Link to="/ratings">
          <div className="mr-14  text-[16px] hover:font-[600] headerMedium:text-[15px] cursor-pointer ">
          Ratings
          {/* <div className="w-full bg-black h-[2px] mt-1 "/> */}
          </div>
          </Link>

          <div className="mr-14 hover:font-[600] headerMedium:text-[15px] text-[18px] font-[700] cursor-pointer">  Saved Professors
          <div className="w-full bg-black h-[2px] mt-1 "/>
          </div>
        </div>

{/* line */}
        <div className="w-full headerMedium:w-full h-[1px] bg-slate-400 mb-5"/>

        <div className=" w-full flex items-center flex-col">
            <img src={pics} className="h-[200px] mt-16" />
        <div className="font-[700]  text-[20px]">You don’t have any saved professors yet</div>
      </div>

</div>


      </div>

      <Footer />
    </>
  )
}

export default SavedProfessors

