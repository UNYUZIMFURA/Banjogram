import { AiFillHome } from "react-icons/ai";
import { FaRegCompass } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { CgAddR } from "react-icons/cg";
import { TbSend } from "react-icons/tb";
import { BsInstagram } from "react-icons/bs";
import {RiMenuFill} from "react-icons/ri"

const NavBar = () => {
  const randomString = Math.random();
  return (
    <div className="fixed bottom-0 h-[3rem] border-t border-[#303030] md:left-0 md:top-0 md:h-screen md:w-[4.5rem] md:border-r md:flex md:flex-col md:items-center md:gap-8">
      <div className="flex items-center h-full w-full md:flex-col bg-green-300 md:justify-around md:h-[60%]">
        <BsInstagram size={25} fill="white" cursor="pointer" className="hidden md:flex"/>
        <div className="flex h-full w-full items-center justify-around bg-red-200 md:flex-col md:justify-center md:gap-8 md:h-fit">
          <AiFillHome size={25} fill="white" cursor="pointer" />
          <FaRegCompass size={24} fill="white" cursor="pointer" />
          <BiMoviePlay size={26} fill="white" cursor="pointer" />
          <CgAddR size={25} color="white" cursor="pointer" />
          <TbSend size={25} color="white" cursor="pointer" />
          <div className="h-6 w-6 rounded-full ">
            <img
              src={`${process.env.REACT_APP_IMAGES_ENDPOINT}?random=${randomString}`}
              alt=""
              className="cursor-pointer rounded-full"
            />
          </div>
        </div>
      </div>
      <RiMenuFill fill="white" size={25} cursor="pointer hidden md:flex"/>
    </div>
  );
};

export default NavBar;
