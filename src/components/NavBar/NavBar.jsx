import { AiFillHome } from "react-icons/ai";
import { FaRegCompass } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { CgAddR } from "react-icons/cg";
import { TbSend } from "react-icons/tb";

const NavBar = () => {
  return (
    <div className="fixed bottom-0 flex h-[3rem] w-full items-center gap-3 bg-blue-200">
      <AiFillHome size={30} />
      <FaRegCompass size={30} />
      <BiMoviePlay size={30} />
      <CgAddR size={30} />
      <TbSend size={30} />
      <div className="h-8 w-8 rounded-full bg-slate-500"></div>
    </div>
  );
};

export default NavBar;
