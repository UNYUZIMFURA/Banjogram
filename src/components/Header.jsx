import { FiHeart } from "react-icons/fi";

const Header = () => {
  return (
    <div className="flex items-center gap-4 h-[7.5vh] border-b px-4">
      <form className="flex items-center w-full justify-around">
        <input className="h-[2rem] outline-none indent-8" />
        <FiHeart color="white" size={25}/>
      </form>
    </div>
  );
};

export default Header;
