import { AiFillHome } from "react-icons/ai";
import { FaRegCompass } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { CgAddR } from "react-icons/cg";
import { TbSend } from "react-icons/tb";

const NavBar = () => {
  const randomString = Math.random();
  return (
    <div className="fixed bottom-0 flex h-[3rem] w-full items-center justify-around bg-black">
      <AiFillHome size={27} fill="white" cursor="pointer"/>
      <FaRegCompass size={26} fill="white" cursor="pointer"/>
      <BiMoviePlay size={28} fill="white" cursor="pointer"/>
      <CgAddR size={27} color="white" cursor="pointer"/>
      <TbSend size={27} color="white" cursor="pointer"/>
      <div className="h-7 w-7 rounded-full bg-slate-500">
        <img
          src={`${process.env.REACT_APP_IMAGES_ENDPOINT}?random=${randomString}`}
          alt=""
          className="rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default NavBar;
