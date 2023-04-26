import "./styles/story.css";

const Story = (props) => {
  const randomString = Math.random();
  return (
    <div className={`h-[10rem] w-[10rem] ${
      props.id == 1 ? "ml-0" : "ml-4"
    } flex flex-col items-center justify-center bg-red-100`}>
      <div
        className={`story  flex h-[4rem] min-w-[4rem] cursor-pointer bg-red-100`}
      >
        <img
          src={`https://picsum.photos/400/400?random=${randomString}`}
          alt="..."
          className="mx-auto my-auto h-[92%] rounded-full"
        />
      </div>
      <span></span>
    </div>
  );
};

export default Story;
