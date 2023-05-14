import PostInfo from "../Stories/PostInfo";
import { BsThreeDots } from "react-icons/bs";

const PostHeader = () => {
  return (
    <div className="flex py-2 items-center justify-between px-1">
      <PostInfo />
      <BsThreeDots fill="white" size={18} cursor="pointer" />
    </div>
  );
};

export default PostHeader;
