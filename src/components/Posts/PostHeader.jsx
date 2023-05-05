import PostInfo from "../Stories/PostInfo";
import { BsThreeDots } from "react-icons/bs";

const PostHeader = () => {
  return (
    <div className="flex h-[4rem] items-center justify-between border-b border-[gray] px-1">
      <PostInfo />
      <BsThreeDots fill="white" size={18} cursor="pointer" />
    </div>
  );
};

export default PostHeader;
