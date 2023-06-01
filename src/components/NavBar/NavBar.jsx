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
    <div className="fixed bottom-0 h-12 w-full border-t border-[#303030] md:left-0 md:top-0 md:flex md:h-screen md:w-[4.5rem] md:flex-col md:items-center md:gap-64 md:border-r min-[1264px]:static min-[1264px]:w-[17rem]">
      <div className="bg-slate-20 flex h-full w-full items-center md:h-fit md:flex-col md:gap-12 md:py-8 min-[1264px]:items-start">
        <BsInstagram
          size={23}
          fill="white"
          cursor="pointer"
          className="hidden md:flex min-[1264px]:hidden"
        />
        <span className="hidden cursor-pointer font-satisfy text-2xl text-white min-[1264px]:ml-8 min-[1264px]:flex">
          Banjogram
        </span>
        <div className="flex h-full w-full items-center justify-around md:h-fit md:flex-col md:justify-center md:gap-10 min-[1264px]:items-start">
          <div className="min-[1264px] flex gap-4 bg-red-100 min-[1264px]:w-full min-[1264px]:p-2 min-[1264px]:pl-8">
            <AiFillHome size={25} fill="white" cursor="pointer" />
            <span className="hidden text-white min-[1264px]:flex">Home</span>
          </div>
          <div className="hidden gap-4 pl-8 min-[1264px]:flex">
            <FiSearch size={20} color="white" cursor="pointer" />
            <span className="hidden text-white min-[1264px]:flex">Search</span>
          </div>
          <div className="flex gap-4 min-[1264px]:pl-8">
            <FaRegCompass size={24} fill="white" cursor="pointer" />
            <span className="hidden text-white min-[1264px]:flex">Explore</span>
          </div>
          <div className="flex gap-4 min-[1264px]:pl-8">
            <BiMoviePlay size={26} fill="white" cursor="pointer" />
            <span className="hidden text-white min-[1264px]:flex">Reels</span>
          </div>
          <div className="flex gap-4 min-[1264px]:pl-8">
            <CgAddR size={25} color="white" cursor="pointer" />
            <span className="hidden text-white min-[1264px]:flex">Create</span>
          </div>
          <div className="flex gap-4 min-[1264px]:pl-8">
            <TbSend size={25} color="white" cursor="pointer" />
            <span className="hidden text-white min-[1264px]:flex">
              Messages
            </span>
          </div>
          <div className="flex gap-4 min-[1264px]:pl-8">
            <div className="h-[1.7rem] w-[1.7rem] rounded-full bg-slate-200">
              <img
                src={`${process.env.REACT_APP_IMAGES_ENDPOINT}?random=${randomString}`}
                alt=""
                className="h-full w-full cursor-pointer rounded-full"
              />
            </div>
            <span className="hidden text-white min-[1264px]:flex">Profile</span>
          </div>
        </div>
      </div>
      <RiMenuFill
        fill="white"
        size={25}
        className="hidden cursor-pointer md:flex"
      />
    </div>
  );
};

export default NavBar;
