import PostHeader from "./PostHeader";

const Post = () => {
  const random = Math.random();
  return (
    <div className="mt-4 flex h-[80vh] w-screen flex-col bg-[red]">
      <PostHeader />
      <div className="h-[62%] w-full rounded-[0.2rem]">
        <img src={`https://picsum.com/400/400?random=${random}`} alt="" />
      </div>
    </div>
  );
};   

export default Post;
