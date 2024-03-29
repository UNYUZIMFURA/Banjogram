import { useSelector } from "react-redux";
import Search from "../components/Search/Search";
import Stories from "../components/Stories/Stories";
import Posts from "../components/Posts/Posts";
import NavBar from "../components/NavBar/NavBar";
import Suggested from "../components/Suggested/Suggested";
import PostingDiv from "../components/PostingDiv/PostingDiv";

const Homepage = () => {
  const currentStates = useSelector((state) => state);

  return (
    <div className="flex h-screen w-full flex-col items-center bg-black md:items-center md:justify-start md:pt-8 min-[1160px]:items-end min-[1264px]:flex-row min-[1264px]:items-start min-[1264px]:justify-around min-[1264px]:p-0 2xl:justify-between 2xl:pr-7">
      {currentStates.toggleVisibility && <PostingDiv />}
      <NavBar />
      <div className="flex w-full flex-col items-center overflow-auto md:w-[85%] min-[1160px]:w-[90%] min-[1160px]:flex-row min-[1160px]:items-start min-[1160px]:justify-around min-[1264px]:h-full min-[1264px]:pt-8 xl:w-[80%] min-[1500px]:justify-center min-[1500px]:gap-[5rem]">
        <div className="flex w-full flex-col items-center min-[1160px]:w-fit">
          <Search />
          <Stories />
          <Posts />
        </div>
        <Suggested />
      </div>
    </div>
  );
};

export default Homepage;
