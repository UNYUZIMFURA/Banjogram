import PostHeader from "./PostHeader";
import { FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { FaRegBookmark } from "react-icons/fa";

const Post = () => {
  const randomString = Math.random();
  console.log(process.env.REACT_APP_IMAGES_ENDPOINT);
  return (
    <div className="mt-4 flex h-[80vh] w-screen flex-col">
      <PostHeader />
      <div className="flex h-[62%] w-full rounded-[0.2rem]">
        <img
          src={`${process.env.REACT_APP_IMAGES_ENDPOINT}?random=${randomString}`}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex h-[5rem] w-full flex-col p-[0.5rem]">
        <div className="flex items-center justify-between gap-[0.5rem] py-[0.5rem]">
          <div className="flex gap-4">
            <FiHeart size={25} color="white" cursor="pointer" />
            <FaRegComment size={25} color="white" cursor="pointer" />
            <TbSend size={25} color="white" cursor="pointer" />
          </div>
          <FaRegBookmark size={20} color="white" cursor="pointer" />
        </div>
        <span className="text-white font-semibold text-[0.9rem]">19,705 likes</span>
      </div>
      <div className="px-[0.5rem] h-[4rem] bg-[green] overflow-scroll">
        <p className="text-[0.8rem] ">433_football @vinijr has the same amount of CL goals for Real Madridas @ronaldo. News came straight from @banjo</p>
      </div>
      <div className="h-[4rem] bg-[gray]">
        <span>View 5 comments</span>
      </div>
    </div>
  );
};

export default Post;
