import { FiImage } from "react-icons/fi";

const PostingDiv = () => {
  return (
    <div className="fixed top-1/4 flex h-[50vh] w-full flex-col justify-between bg-red-200">
      <div className="flex h-[2.8rem] w-full items-center justify-center border-b border-[#3E4042] bg-green-600 font-semibold text-white">
        <span>Create new post</span>
      </div>
      <div className="flex flex-grow flex-col items-center justify-center gap-3 bg-green-300">
        <FiImage size={60} />
        <span>Drag photos and videos here</span>
        <button className="bg-[rgb(0,149,246)] text-white font-medium text-sm px-3 py-3 rounded-lg">Select from computer</button>
      </div>
    </div>
  );
};

export default PostingDiv;
