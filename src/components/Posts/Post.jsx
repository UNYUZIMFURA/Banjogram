import PostHeader from "./PostHeader";

const Post = () => {
  const randomString = Math.random();
  console.log(process.env.REACT_APP_IMAGES_ENDPOINT)
  return (
    <div className="mt-4 flex h-[80vh] w-screen flex-col">
      <PostHeader />
      <div className="flex h-[62%] w-full rounded-[0.2rem]">
        <img src={`https://picsum.photos/400/400?random=${randomString}`} alt="" className="h-full w-full object-cover"/>
      </div>
    </div>
  );
};   

export default Post;
