import Header from "../components/Header";
import Stories from "../components/Stories/Stories";
import Posts from "../components/Posts/Posts";
import NavBar from "../components/NavBar/NavBar";

const Homepage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center bg-black md:items-end md:justify-center">
      <div className="w-full md:w-[85%]">
        <Header />
        <Stories />
        <Posts />
      </div>
      <NavBar />
    </div>
  );
};

export default Homepage;
