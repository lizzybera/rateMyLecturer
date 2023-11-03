import { BallTriangle } from "react-loader-spinner";

const LoadableScreen = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center fixed z-50"
    style={{
        background: "rgba( 231, 130, 130, 0.1 )",
// boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
backdropFilter: "blur( 2.5px )",
zIndex: "100"
// -webkit-backdrop-filter: "blur( 2.5px )",
// borderRadius: "10px",
// border: "1px solid rgba( 255, 255, 255, 0.18 )"
    }}
    >
     <div className="z-50">
     <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#292725"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/>
     </div>
    </div>
  );
};

export default LoadableScreen;
