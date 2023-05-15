import { AiFillHome } from "react-icons/ai";
import { FaRegCompass } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { CgAddR } from "react-icons/cg";
import { TbSend } from "react-icons/tb";

const NavBar = () => {
  const randomString = Math.random();
  return (
    <div className="fixed bottom-0 flex h-[3rem] w-full items-center justify-around border-t border-[#303030] bg-[green]">
      <AiFillHome size={25} fill="white" cursor="pointer" />
      <FaRegCompass size={24} fill="white" cursor="pointer" />
      <BiMoviePlay size={26} fill="white" cursor="pointer" />
      <CgAddR size={25} color="white" cursor="pointer" />
      <TbSend size={25} color="white" cursor="pointer" />
      <div className="h-6 w-6 rounded-full bg-slate-500">
        <img
          src={`${process.env.REACT_APP_IMAGES_ENDPOINT}?random=${randomString}`}
          alt=""
          className="cursor-pointer rounded-full"
        />
      </div>
    </div>
  );
};

export default NavBar;
