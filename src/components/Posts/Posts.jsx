import Post from "./Post";

const Posts = () => {
  const posts = [
    { id: 1, username: "leomessi", category: "football" },
    { id: 2, username: "rocky_kimomo", caption: "Agasobanuye gashya, Hear Me! Gera kuri website www.agasobanuyefilms.com, Weekend niho bibera!", category: "movie" },
    { id: 3, username: "iva1nqueur", caption: "An unforgettable summer in Seoul.", category: "travel"},
    { id: 4, username: "element_eleeeh", caption: "GIANTS OF AFRICA live in BK Arena!", category: "music"},
    { id: 5, username: "k.mbappe", caption: "Chilling and enjoying the vibes in Miami in the best Hotels.", category: "vacation" },
    { id: 6, username: "_keliaruzindana_", caption: "<<Rejoice in the Lord, Always!>>", category: "pray"},
    { id: 7, username: "meddyonly", caption: "BLESSED, Dropping Anytime from now!", category: "clock" },
    { id: 8, username: "igiheofficial", caption: "Zigama, hamwe na Cogebanque.", category: "bank"},
    { id: 9, username: "madebeats_official", caption: "Bald is the new black.", category: "bald" },
    { id: 10, username: "bkarenarw", caption: "Heads Up!!! Nigerian Superstar davido will be performing this Saturday!", category: "live performance" },
  ];
  return (
    <div className="flex h-[70vh] w-full flex-col items-center gap-12 md:h-[78vh]">
      {posts.map((post) => (
        <Post id={post.id} key={post.id} username={post.username} caption={post.caption} category={post.category}/>
      ))}
    </div>
  );
};

export default Posts;
