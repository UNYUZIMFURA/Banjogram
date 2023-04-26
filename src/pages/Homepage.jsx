import Header from "../components/Header";
import Stories from "../components/Stories/Stories"
import Posts from "../components/Posts/Posts";

const Homepage = () => {
  return (
    <div className="h-screen bg-black">
      <Header />
      <Stories />
      <Posts />
    </div>
  );
};

export default Homepage;
