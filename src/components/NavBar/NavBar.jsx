import "index.css"
import { HomeSvg, SearchSvg, ExploreSvg, ReelsSvg, MessageSvg, HeartSvg, CreateSvg } from "../../SVGs/SvgElements";
import { BsInstagram } from "react-icons/bs";
import { RiMenuFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { showDiv } from "../../redux/actions";

const NavBar = () => {
  const dispatch = useDispatch();

  const displayDiv = () => {
    dispatch(showDiv());
  };

  const randomString = Math.random();
  return (
    <div className="bg-black fixed bottom-0 h-12 w-full border-t border-[#303030] md:left-0 md:top-0 md:flex md:h-screen md:w-[4.5rem] md:flex-col md:items-center md:justify-between md:border-r md:pb-20 min-[1264px]:static min-[1264px]:w-[17.5rem] 2xl:w-[20rem]">
      <div className="flex h-full w-full items-center md:h-fit md:flex-col md:gap-8 md:py-8 min-[1264px]:items-start">
        <BsInstagram
          size={23}
          fill="white"
          cursor="pointer"
          className="hidden md:flex min-[1264px]:hidden"
        />
        <span className="hidden cursor-pointer font-igfont font-light text-[1.8rem] text-white min-[1264px]:ml-8 min-[1264px]:flex">
          Banjogram
        </span>
        <div className="flex h-full w-full items-center justify-around md:h-fit md:flex-col md:justify-center md:gap-10 min-[1264px]:items-center min-[1264px]:gap-4">
          <div className="min-[1264px] flex cursor-pointer gap-4 rounded-lg min-[1264px]:w-[90%] min-[1264px]:p-3 min-[1264px]:pl-4 min-[1264px]:hover:bg-[rgba(255,255,255,.1)] ">
            <HomeSvg />
            <span className="hidden text-white min-[1264px]:flex ">Home</span>
          </div>
          <div className="hidden cursor-pointer gap-4 rounded-lg md:flex min-[1264px]:w-[90%] min-[1264px]:p-3 min-[1264px]:pl-4 min-[1264px]:hover:bg-[rgba(255,255,255,.1)] ">
            <SearchSvg />
            <span className="hidden text-white min-[1264px]:flex ">Search</span>
          </div>
          <div className="min-[1264px] flex cursor-pointer gap-4 rounded-lg min-[1264px]:w-[90%] min-[1264px]:p-3 min-[1264px]:pl-4 min-[1264px]:hover:bg-[rgba(255,255,255,.1)] ">
            <ExploreSvg />
            <span className="hidden text-white min-[1264px]:flex ">
              Explore
            </span>
          </div>
          <div className="min-[1264px] flex cursor-pointer gap-4 rounded-lg min-[1264px]:w-[90%] min-[1264px]:p-3 min-[1264px]:pl-4 min-[1264px]:hover:bg-[rgba(255,255,255,.1)] ">
            <ReelsSvg />
            <span className="hidden text-white min-[1264px]:flex">Reels</span>
          </div>
          <div className="min-[1264px] flex cursor-pointer gap-4 rounded-lg min-[1264px]:w-[90%] min-[1264px]:p-3 min-[1264px]:pl-4 min-[1264px]:hover:bg-[rgba(255,255,255,.1)] ">
            <MessageSvg />
            <span className="hidden text-white min-[1264px]:flex ">
              Messages
            </span>
          </div>
          <div className="hidden cursor-pointer gap-4 rounded-lg md:flex min-[1264px]:w-[90%] min-[1264px]:p-3 min-[1264px]:pl-4 min-[1264px]:hover:bg-[rgba(255,255,255,.1)] ">
            <HeartSvg />
            <span className="hidden text-white min-[1264px]:flex ">
              Notifications
            </span>
          </div>
          <div
            className="min-[1264px] flex cursor-pointer gap-4 rounded-lg  min-[1264px]:w-[90%] min-[1264px]:p-3 min-[1264px]:pl-4 min-[1264px]:hover:bg-[rgba(255,255,255,.1)] "
            onClick={() => displayDiv()}
          >
            <CreateSvg />
            <span className="hidden text-white min-[1264px]:flex">Create</span>
          </div>
          <div className="min-[1264px] flex cursor-pointer gap-5 rounded-lg min-[1264px]:w-[90%] min-[1264px]:p-3 min-[1264px]:pl-4 min-[1264px]:hover:bg-[rgba(255,255,255,.1)] ">
            <div className="loading h-[1.7rem] w-[1.7rem] rounded-full bg-black">
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
      <div className="flex cursor-pointer gap-5 rounded-lg min-[1264px]:w-[90%] min-[1264px]:p-3 min-[1264px]:pl-4 min-[1264px]:hover:bg-[rgba(255,255,255,.1)] ">
        <RiMenuFill
          fill="white"
          size={25}
          className="hidden cursor-pointer md:flex"
        />
        <span className="hidden text-white min-[1264px]:flex">More</span>
      </div>
    </div>
  );
};

export default NavBar;
