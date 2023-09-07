import Post from "./Post";

const Posts = () => {
  const posts = [
    { id: 1, username: "leomessi" },
    { id: 2, username: "rocky_kimomo" },
    { id: 3, username: "iva1nqueur" },
    { id: 4, username: "element_eleeeh" },
    { id: 5, username: "k.mbappe" },
    { id: 6, username: "_keliaruzindana_" },
    { id: 7, username: "meddyonly" },
    { id: 8, username: "igiheofficial" },
    { id: 9, username: "madebeats_official" },
    { id: 10, username: "bkarenarw" },
  ];
  return (
    <div className="flex h-[70vh] w-full flex-col items-center gap-12 md:h-[78vh]">
      {posts.map((post) => (
        <Post id={post.id} key={post.id} username={post.username}/>
      ))}
    </div>
  );
};

export default Posts;
