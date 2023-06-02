import Header from "../components/Header";
import Stories from "../components/Stories/Stories";
import Posts from "../components/Posts/Posts";
import NavBar from "../components/NavBar/NavBar";
import Suggested from "../components/Suggested/Suggested";

const Homepage = () => {
  return (
    <div className="bg-blue-300 flex h-screen w-full flex-col items-center bg-black md:pt-8 md:items-center md:justify-start min-[1160px]:items-end min-[1264px]:flex-row min-[1264px]:items-start min-[1264px]:p-0">
      <NavBar />
      <div className="bg-green-300 flex w-full flex-col items-center md:h-full md:w-[85%] min-[1160px]:flex-row min-[1160px]:w-[90%] min-[1160px]:justify-around min-[1160px]:items-start min-[1264px]:h-full">
        <div className="bg-slate-300 md:h-full w-full flex flex-col items-center min-[1160px]:w-fit">
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
