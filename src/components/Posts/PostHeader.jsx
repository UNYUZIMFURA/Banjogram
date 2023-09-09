import PostInfo from "../Stories/PostInfo";
import { BsThreeDots } from "react-icons/bs";

const PostHeader = (props) => {
  return (
    <div className="flex items-center justify-between px-1 py-2">
      <PostInfo username={props.username} />
      <BsThreeDots fill="white" size={18} cursor="pointer" />
    </div>
  );
};

export default PostHeader;
