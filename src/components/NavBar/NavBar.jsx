import { AiFillHome } from "react-icons/ai";
import { FaRegCompass } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { CgAddR } from "react-icons/cg";
import { TbSend } from "react-icons/tb";

const NavBar = () => {
  return (
    <div className="fixed bottom-0 flex h-[3rem] w-full items-center justify-around bg-black">
      <AiFillHome size={27} fill="white" />
      <FaRegCompass size={26} fill="white" />
      <BiMoviePlay size={28} fill="white" />
      <CgAddR size={27} color="white" />
      <TbSend size={27} color="white" />
      <div className="h-7 w-7 rounded-full bg-slate-500"></div>
    </div>
  );
};

export default NavBar;
