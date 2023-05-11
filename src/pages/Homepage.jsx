import Header from "../components/Header";
import Stories from "../components/Stories/Stories";
import Posts from "../components/Posts/Posts";
import NavBar from "../components/NavBar/NavBar";

const Homepage = () => {
  return (
    <div className="h-screen bg-black">
      <Header />
      <Stories />
      <Posts />
      <NavBar />
    </div>
  );
};

export default Homepage;
