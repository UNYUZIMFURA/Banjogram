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
      <div className="flex w-full flex-col p-[0.5rem]">
        <div className="flex items-center justify-between gap-[0.5rem] py-[0.5rem]">
          <div className="flex gap-4">
            <FiHeart size={25} color="white" cursor="pointer" />
            <FaRegComment size={25} color="white" cursor="pointer" />
            <TbSend size={25} color="white" cursor="pointer" />
          </div>
          <FaRegBookmark size={20} color="white" cursor="pointer" />
        </div>
        <span className="text-[0.9rem] font-semibold text-white">
          19,705 likes
        </span>
      </div>
      <div className="bg-[green] flex p-2 items-center overflow-scroll scrollbar-hide px-[0.5rem]">
        <p className="text-[0.9rem] text-white">
          433_football @vinijr has the same amount of CL goals for Real Madridas
          @ronaldo. News came straight from @banjo
        </p>
      </div>
      <div className="border-b border-[cyan] flex p-5 flex-col gap-2 px-[0.5rem] text-white">
        <span className="cursor-pointer text-[1rem]">View all 10 comments</span>
        <span className="text-[0.9rem]">iam_chrispin USA is still #1</span>
      </div>
    </div>
  );
};

export default Post;
