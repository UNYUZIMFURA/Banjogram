import "./styles/story.css";

const Story = (props) => {
  const randomString = Math.random();
  return (
    <div
      className={`h-[10rem] w-[4rem] ${
        props.id === 1 ? "ml-0" : "ml-4"
      } flex flex-col items-center justify-center gap-2`}
    >
      <div className={`story  flex h-[4rem] min-w-[4rem] cursor-pointer`}>
        <img
          src={`https://picsum.photos/400/400?random=${randomString}`}
          alt="..."
          className="mx-auto my-auto h-[92%] rounded-full"
        />
      </div>
      <span className="max-w-[4rem] overflow-hidden text-[0.73rem] text-white">
        {props.userName}
      </span>
    </div>
  );
};

export default Story;
