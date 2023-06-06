import Header from "../components/Header/Header";
import Stories from "../components/Stories/Stories";
import Posts from "../components/Posts/Posts";
import NavBar from "../components/NavBar/NavBar";
import Suggested from "../components/Suggested/Suggested";
import PostingDiv from "../components/PostingDiv/PostingDiv"

const Homepage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center bg-black md:pt-8 md:items-center md:justify-start min-[1160px]:items-end min-[1264px]:flex-row min-[1264px]:items-start min-[1264px]:justify-around min-[1264px]:p-0 2xl:justify-between 2xl:pr-7">
      <PostingDiv />
      <NavBar />
      <div className="flex w-full flex-col items-center md:w-[85%] min-[1160px]:flex-row min-[1160px]:w-[90%] xl:w-[80%] min-[1160px]:justify-around min-[1160px]:items-start min-[1264px]:h-full min-[1264px]:pt-8 min-[1500px]:justify-center min-[1500px]:gap-[5rem]">
        <div className="w-full flex flex-col items-center min-[1160px]:w-fit">
          <Header />
          <Stories />
          <Posts />
        </div>
        <Suggested />
      </div>
    </div>
  );
};

export default Homepage;