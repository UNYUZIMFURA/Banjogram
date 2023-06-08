import PostHeader from "./PostHeader";
import { FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { FaRegBookmark } from "react-icons/fa";

const Post = () => {
  const randomString = Math.random();
  return (
    <div className="mt-4 flex min-h-[80vh] w-screen flex-col min-[470px]:w-[29.5rem]">
      <PostHeader />
      <div className="flex h-[62%] w-full cursor-pointer rounded-[0.2rem]">
        <img
          src={`${process.env.REACT_APP_IMAGES_ENDPOINT}?random=${randomString}`}
          alt=""
          className="w-full rounded-t-[0.2rem] object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex w-full flex-col gap-2 p-3">
        <div className="flex items-center justify-between gap-2 py-2">
          <div className="flex gap-4">
            <FiHeart size={25} color="white" cursor="pointer" />
            <FaRegComment size={25} color="white" cursor="pointer" />
            <TbSend size={25} color="white" cursor="pointer" />
          </div>
          <FaRegBookmark size={20} color="white" cursor="pointer" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 cursor-pointer rounded-full border">
            <img
              src={`${process.env.REACT_APP_IMAGES_ENDPOINT}?random=${randomString}`}
              alt=""
              className="rounded-full"
              loading="lazy"
            />
          </div>
          <p className="text-sm font-medium text-white">
            Liked by <span className="font-bold cursor-pointer">cristiano</span> and{" "}
            <span className="font-bold cursor-pointer">109 others</span>
          </p>
        </div>
      </div>
      <div className="flex items-center px-2 py-1 scrollbar-hide">
        <p className="text-sm text-white">
          <span className="font-bold cursor-pointer">433_football</span> <span className="text-[#bed1e9] cursor-pointer">@leo_messi</span> has moved to Inter Miami just as<span className="text-[#bed1e9] cursor-pointer"> @cristiano</span> moved to Al Nassr, news straight from <span className="text-[#bed1e9] cursor-pointer"> #banjo</span>
        </p>
      </div>
      <div className="flex flex-col gap-2 border-b border-[#303030] bg-black px-2 pb-9 pt-2 text-white">
        <span className="cursor-pointer text-sm text-[#9b9b9b]">
          View all 10 comments
        </span>
        <p className="flex items-center justify-between text-sm">
          <span>
            <span className="font-bold">ihirwe_olis</span> USA is still #1
          </span>
          <FiHeart cursor="pointer" className="mr-1" />
        </p>
      </div>
    </div>
  );
};

export default Post;
