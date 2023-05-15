import Post from "./Post";

const Posts = () => {
  const posts = [
    { id: 1, userName: "element_eleeeh" },
    { id: 2, userName: "k.mbappe" },
    { id: 3, userName: "paulkagame" },
    { id: 4, userName: "kallehallden" },
  ];
  return (
    <div className="flex w-full overflow-scroll flex-col items-center gap-[3rem] scrollbar-hid bg-[red] h-[70vh]">
      {/* {posts.map((post) => (
        <Post id={post.id} key={post.id} />
      ))} */}
    </div>
  );
};

export default Posts;
