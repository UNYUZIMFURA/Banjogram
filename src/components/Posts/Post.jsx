import PostHeader from "./PostHeader";
import { FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { FaRegBookmark } from "react-icons/fa";

const Post = () => {
  const randomString = Math.random();
  return (
    <div className="mt-4 flex h-[80vh] w-screen flex-col">
      <PostHeader />
      <div className="flex h-[62%] w-full rounded-[0.2rem]">
        <img
          src={`${process.env.REACT_APP_IMAGES_ENDPOINT}?random=${randomString}`}
          alt=""
          className=""
        />
      </div>
      <div className="flex w-full flex-col bg-[blue] p-4 gap-2">
        <div className="flex items-center justify-between gap-2 py-2">
          <div className="flex gap-4">
            <FiHeart size={25} color="white" cursor="pointer" />
            <FaRegComment size={25} color="white" cursor="pointer" />
            <TbSend size={25} color="white" cursor="pointer" />
          </div>
          <FaRegBookmark size={20} color="white" cursor="pointer" />
        </div>
        <div className="flex">
          <div className="h-4"></div>
          <span className="text-[0.9rem] font-semibold text-white">
            Liked by @banjo and 109 others
          </span>
        </div>
      </div>
      <div className="flex items-center overflow-scroll bg-[green] py-10 px-2 scrollbar-hide">
        <p className="text-[0.9rem] text-white">
          433_football @vinijr has the same amount of CL goals for Real Madridas
          @ronaldo. News came straight from @banjo
        </p>
      </div>
      <div className="flex flex-col gap-2 border-b border-[cyan] p-5 px-2 text-white">
        <span className="cursor-pointer text-[1rem]">View all 10 comments</span>
        <p className="text-[0.9rem]">
          <span className="font-bold">ihirwe_olis</span> USA is still #1
        </p>
      </div>
    </div>
  );
};

export default Post;
