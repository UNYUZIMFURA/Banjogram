import Post from "./Post";

const Posts = () => {
  const posts = [
    { id: 1, username: "leomessi", category: "World Cup", comments: "20.5K" },
    {
      id: 2,
      username: "rocky_kimomo",
      caption:
        "Agasobanuye gashya, Hear Me! Gera kuri website www.agasobanuyefilms.com, Weekend niho bibera!",
      category: "Movie",
      likes: "9,460",
      comments: "1,480",
    },
    {
      id: 3,
      username: "iva1nqueur",
      caption: "An unforgettable summer in Seoul.",
      category: "South Korea",
      likes: "77",
      comments: "30",
    },
    {
      id: 4,
      username: "element_eleeeh",
      caption: "GIANTS OF AFRICA, live in BK Arena!",
      category: "Pianist",
      likes: "15.1K",
      comments: "2,400",
    },
    {
      id: 5,
      username: "k.mbappe",
      caption: "Chilling and enjoying the vibes on Miami beaches!",
      category: "Miami Beach",
      likes: "3.3M",
      comments: "20K",
    },
    {
      id: 6,
      username: "_keliaruzindana_",
      caption: "<<Rejoice in the Lord, Always!>>",
      category: "Pray",
      likes: "10K",
      comments: "3,400",
    },
    {
      id: 7,
      username: "meddyonly",
      caption: "BLESSED, Dropping Anytime from now!",
      category: "Clock",
      likes: "20K",
      comments: "8,050",
    },
    {
      id: 8,
      username: "igiheofficial",
      caption: "Zigama, hamwe na Cogebanque!",
      category: "Savings",
      likes: "3,800",
      comments: "1,200",
    },
    {
      id: 9,
      username: "madebeats_official",
      caption: "Bald is the new black.",
      category: "Bald",
      likes: "1,500",
      comments: "505",
    },
    {
      id: 10,
      username: "bkarenarw",
      caption:
        "Heads Up!!! Nigerian Superstar davido will be performing this Saturday!",
      category: "Performance",
      likes: "9.2K",
      comments: "5,500",
    },
  ];
  return (
    <div className="flex h-[70vh] w-full flex-col items-center gap-12 md:h-[78vh] px-1">
      {posts.map((post) => (
        <Post
          id={post.id}
          key={post.id}
          username={post.username}
          caption={post.caption}
          category={post.category}
          likes={post.likes}
          comments={post.comments}
        />
      ))}
    </div>
  );
};

export default Posts;
