import { AiFillHome } from "react-icons/ai";
import { FaRegCompass } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { CgAddR } from "react-icons/cg";
import { TbSend } from "react-icons/tb";
import { BsInstagram } from "react-icons/bs";
import { RiMenuFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";

const NavBar = () => {
  const randomString = Math.random();
  return (
    <div className="fixed bottom-0 h-12 w-full border-t border-[#303030] md:left-0 md:top-0 md:flex md:h-screen md:w-[4.5rem] md:flex-col md:items-center md:gap-44 md:border-r min-[1264px]:w-[17.5rem]">
      <div className="flex h-full w-full items-center md:h-fit md:flex-col md:gap-12 md:py-8 min-[1264px]:items-start">
        <BsInstagram
          size={23}
          fill="white"
          cursor="pointer"
          className="hidden md:flex min-[1264px]:hidden"
        />
        <span className="hidden cursor-pointer font-satisfy text-2xl text-white min-[1264px]:ml-12 min-[1264px]:flex">
          Banjogram
        </span>
        <div className="b200 flex h-full w-full items-center justify-around md:h-fit md:flex-col md:justify-center md:gap-10 min-[1264px]:items-center min-[1264px]:gap-4">
          <div className="min-[1264px] flex cursor-pointer gap-4 rounded-lg min-[1264px]:w-[90%] min-[1264px]:p-3 min-[1264px]:pl-8 min-[1264px]:hover:bg-[rgba(255,255,255,.1)]">
            <AiFillHome size={25} fill="white" />
            <span className="hidden text-white min-[1264px]:flex ">Home</span>
          </div>
          <div className="hidden cursor-pointer gap-4 rounded-lg md:flex min-[1264px]:w-[90%] min-[1264px]:p-3 min-[1264px]:pl-8 min-[1264px]:hover:bg-[rgba(255,255,255,.1)]">
            <FiSearch size={20} color="white" />
            <span className="hidden text-white min-[1264px]:flex ">Search</span>
          </div>
          <div className="min-[1264px] flex cursor-pointer gap-4 rounded-lg min-[1264px]:w-[90%] min-[1264px]:p-3 min-[1264px]:pl-8 min-[1264px]:hover:bg-[rgba(255,255,255,.1)]">
            <FaRegCompass size={24} fill="white" />
            <span className="hidden text-white min-[1264px]:flex ">
              Explore
            </span>
          </div>
          <div className="min-[1264px] flex cursor-pointer gap-4 rounded-lg min-[1264px]:w-[90%] min-[1264px]:p-3 min-[1264px]:pl-8 min-[1264px]:hover:bg-[rgba(255,255,255,.1)]">
            <BiMoviePlay size={26} fill="white" />
            <span className="hidden text-white min-[1264px]:flex">Reels</span>
          </div>
          <div className="min-[1264px] flex cursor-pointer gap-4 rounded-lg  min-[1264px]:w-[90%] min-[1264px]:p-3 min-[1264px]:pl-8 min-[1264px]:hover:bg-[rgba(255,255,255,.1)]">
            <CgAddR size={25} color="white" />
            <span className="hidden text-white min-[1264px]:flex">Create</span>
          </div>
          <div className="min-[1264px] flex cursor-pointer gap-4 rounded-lg min-[1264px]:w-[90%] min-[1264px]:p-3 min-[1264px]:pl-8 min-[1264px]:hover:bg-[rgba(255,255,255,.1)]">
            <TbSend size={25} color="white" />
            <span className="hidden text-white min-[1264px]:flex ">
              Messages
            </span>
          </div>
          <div className="min-[1264px] flex cursor-pointer gap-5 rounded-lg min-[1264px]:w-[90%] min-[1264px]:p-3 min-[1264px]:pl-8 min-[1264px]:hover:bg-[rgba(255,255,255,.1)]">
            <div className="h-[1.7rem] w-[1.7rem] rounded-full bg-slate-200">
              <img
                src={`${process.env.REACT_APP_IMAGES_ENDPOINT}?random=${randomString}`}
                alt=""
                className="h-full w-full rounded-full"
              />
            </div>
            <span className="hidden text-white min-[1264px]:flex">Profile</span>
          </div>
        </div>
      </div>
      <div className="min-[1264px] flex cursor-pointer gap-5 rounded-lg min-[1264px]:w-[90%] min-[1264px]:p-3 min-[1264px]:pl-8 min-[1264px]:hover:bg-[rgba(255,255,255,.1)]">
        <RiMenuFill
          fill="white"
          size={25}
          className="hidden cursor-pointer md:flex"
        />
        <span className="hidden text-white min-[1264px]:flex ">More</span>
      </div>
    </div>
  );
};

export default NavBar;
