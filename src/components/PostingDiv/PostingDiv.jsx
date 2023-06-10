import { useDispatch } from "react-redux";
import { hideDiv } from "../../redux/actions";
import SvgElement from "./SvgElement";



const PostingDiv = () => {
  const dispatch = useDispatch()
  const closeDiv = () => {
    dispatch(hideDiv())
  }

  return (
    <div className="z-[1] top-0 fixed  h-screen w-screen flex items-center justify-center bg-[#00000098]" onClick={()=> closeDiv()}>
    <div className="flex h-[47vh] w-full flex-col justify-between bg-[#272727] min-[350px]:w-[21.7rem] rounded-xl min-[720px]:w-[50vw]" >
      <div className="flex h-[2.8rem] w-full items-center justify-center border-b border-[#3E4042] font-semibold text-white">
        <span className="text-md">Create new post</span>
      </div>
      <div className="text-white flex flex-grow flex-col items-center justify-center gap-4 ">
           <SvgElement />
        <span className="text-lg">Drag photos and videos here</span>
        <button className="bg-[rgb(0,149,246)] font-semibold text-sm px-2 py-2 rounded-lg outline-none">Select from computer</button>
      </div>
    </div>
    </div>
  );
};


export default PostingDiv;
