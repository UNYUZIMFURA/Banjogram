import Post from "./Post";

const Posts = () => {
  const posts = [
    { id: 1, userName: "element_eleeeh" },
    { id: 2, userName: "k.mbappe" },
    { id: 3, userName: "paulkagame" },
    { id: 4, userName: "kallehallden" },
  ];
  return (
    <div className="flex h-[70vh] w-full md:h-[78vh] flex-col items-center gap-12 overflow-scroll scrollbar-hide">
      {posts.map((post) => (
        <Post id={post.id} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
