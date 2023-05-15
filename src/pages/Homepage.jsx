import Header from "../components/Header";
import Stories from "../components/Stories/Stories";
import Posts from "../components/Posts/Posts";
import NavBar from "../components/NavBar/NavBar";

const Homepage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center bg-black md:justify-around">
      <div className="w-full min-[767px]:w-[85%] bg-red-200">
        <Header />
        <Stories />
        <Posts />
      </div>
      <NavBar />
    </div>
  );
};

export default Homepage;
