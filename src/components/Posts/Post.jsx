import PostInfo from "../Stories/PostInfo";
import { BsThreeDots } from "react-icons/bs";

const Post = () => {
  return (
    <div className="bg-red-300 mt-4 flex min-h-[65vh] w-screen flex-col">
      <div className="bg-[blue] flex justify-between h-[4rem] items-center px-1">
        <PostInfo />
        <BsThreeDots fill="white" size={18} cursor="pointer" />
      </div>
    </div>
  );
};

export default Post;
