import Header from "../components/Header";
import Stories from "../components/Stories/Stories";
import Posts from "../components/Posts/Posts";
import NavBar from "../components/NavBar/NavBar";
import Suggested from "../components/Suggested/Suggested";

const Homepage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center bg-black md:items-center md:justify-center">
      <div className="flex w-full flex-col items-center md:w-[85%] min-[1160px]:flex">
        <div>
          <Header />
          <Stories />
          <Posts />
        </div>
        {/* <Suggested /> */}
      </div>
      <NavBar />
    </div>
  );
};

export default Homepage;
