import Header from "../components/Header";
import Stories from "../components/Stories/Stories";
import Posts from "../components/Posts/Posts";
import NavBar from "../components/NavBar/NavBar";

const Homepage = () => {
  return (
    <div className="fixed h-screen w-full bg-black">
      <Header />
      <Stories />
      <Posts />
      <NavBar />
    </div>
  );
};

export default Homepage;
