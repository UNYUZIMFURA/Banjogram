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
      <div className="flex h-full w-full items-center md:h-fit md:flex-col md:gap-12 md:py-8 min-[1264px]:items-start min-[1264px]:px-6">
        <BsInstagram
          size={23}
          fill="white"
          cursor="pointer"
          className="hidden md:flex min-[1264px]:hidden"
        />
        <span className="hidden cursor-pointer font-satisfy text-2xl text-white min-[1264px]:flex">
          Banjogram
        </span>
        <div className="flex h-full w-full items-center justify-around md:h-fit md:flex-col md:justify-center md:gap-10 min-[1264px]:items-start">
          <div className="flex gap-4 bg-red-200 w-full">
            <AiFillHome size={25} fill="white" cursor="pointer" />
            <span className="hidden text-white min-[1264px]:flex">Home</span>
          </div>
          <div className="hidden gap-4 min-[1264px]:flex">
            <FiSearch size={20} color="white" cursor="pointer" />
            <span className="hidden text-white min-[1264px]:flex">Search</span>
          </div>
          <div className="flex gap-4">
            <FaRegCompass size={24} fill="white" cursor="pointer" />
            <span className="hidden text-white min-[1264px]:flex">Explore</span>
          </div>
          <div className="flex gap-4">
            <BiMoviePlay size={26} fill="white" cursor="pointer" />
            <span className="hidden text-white min-[1264px]:flex">Reels</span>
          </div>
          <div className="flex gap-4">
            <CgAddR size={25} color="white" cursor="pointer" />
            <span className="hidden text-white min-[1264px]:flex">Create</span>
          </div>
          <div className="flex gap-4">
            <TbSend size={25} color="white" cursor="pointer" />
            <span className="hidden text-white min-[1264px]:flex">
              Messages
            </span>
          </div>
          <div className="h-6 w-6 gap-4 rounded-full min-[1264px]:flex">
            <img
              src={`${process.env.REACT_APP_IMAGES_ENDPOINT}?random=${randomString}`}
              alt=""
              className="cursor-pointer rounded-full"
            />
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
