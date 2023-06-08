import { FiImage } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { hideDiv } from "../../redux/actions";

const PostingDiv = () => {
  const dispatch = useDispatch()
  const closeDiv = () => {
    dispatch(hideDiv())
  }

  return (
    <div className="fixed h-screen w-screen flex items-center justify-center bg-[#00000098]" onClick={()=> closeDiv()}>
    <div className="fixed top-1/4 flex h-[50vh] w-full flex-col justify-between bg-[#272727]">
      <div className="flex h-[2.8rem] w-full items-center justify-center border-b border-[#3E404] font-semibold text-white">
        <span>Create new post</span>
      </div>
      <div className="text-white flex flex-grow flex-col items-center justify-center gap-3 ">
        <FiImage size={60} />
        <span>Drag photos and videos here</span>
        <button className="bg-[rgb(0,149,246)] font-medium text-sm px-2 py-2 rounded-lg outline-none">Select from computer</button>
      </div>
    </div>
    </div>
  );
};

export default PostingDiv;
