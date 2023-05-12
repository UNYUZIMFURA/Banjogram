import { AiFillHome } from "react-icons/ai";
import { FaRegCompass } from "react-icons/fa";
import {BiMoviePlay} from "react-icons/bi"
import {CgAddR} from "react-icons/cg"

const NavBar = () => {
  return (
    <div className="fixed bottom-0 flex h-[3rem] w-full items-center gap-3 bg-blue-200">
      <AiFillHome />
      <FaRegCompass />
      <BiMoviePlay />
      <CgAddR />
    </div>
  );
};

export default NavBar;
