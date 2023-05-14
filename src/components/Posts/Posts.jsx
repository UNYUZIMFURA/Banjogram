import Post from "./Post";

const Posts = () => {
  const posts = [
    { id: 1, userName: "element_eleeeh" },
    { id: 2, userName: "k.mbappe" },
    // { id: 3, userName: "paulkagame" },
    // { id: 4, userName: "kallehallden" },
  ];
  return (
    <div className="flex flex-col items-center w-full gap-[3rem] scrollbar-hide bg-gray-700 overflow-scroll">
      {posts.map((post) => (
        <Post id={post.id} key={post.id}/>
      ))}
    </div>
  );
};

export default Posts;
