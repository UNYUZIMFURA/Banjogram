import "./styles/story.css";
import { BsDot } from "react-icons/bs";
import { v4 } from "uuid";

const PostInfo = (props) => {
  return (
    <div className="flex h-full items-center justify-center gap-2">
      <div className="story flex h-[3rem] w-[3rem] cursor-pointer">
        <img
          src={`https://picsum.photos/600/600?random=${v4()}`}
          alt="..."
          className="rounded-full object-cover"
          loading="lazy"
        />
      </div>
      <span className="cursor-pointer text-sm font-semibold text-white">
        {props.username}
      </span>
      <div className="flex items-center justify-between">
        <BsDot fill="gray" size={20} />
        <span className="text-sm text-[gray]">51m</span>
      </div>
    </div>
  );
};

export default PostInfo;
