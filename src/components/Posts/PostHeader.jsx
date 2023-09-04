import PostInfo from "../Stories/PostInfo";
import { BsThreeDots } from "react-icons/bs";

const PostHeader = (props) => {
  return (
    <div className="flex py-2 items-center justify-between px-1">
      <PostInfo username={props.username}/>
      <BsThreeDots fill="white" size={18} cursor="pointer" />
    </div>
  );
};

export default PostHeader;
