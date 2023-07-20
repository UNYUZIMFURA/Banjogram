import "./styles/story.css";

const Story = (props) => {
  const randomString = Math.random();
  return (
    <div
      className={`h-full w-[4rem] ${
        props.id === 1 ? "ml-0" : "ml-4"
      } flex flex-col items-center justify-center gap-2`}
    >
      <div className="story flex h-[4rem] min-w-[4rem] cursor-pointer p-[1.1px]">
        <img
          src={`${process.env.REACT_APP_IMAGES_ENDPOINT}?random=${randomString}`}
          alt="..."
          className="rounded-full"
          loading="lazy"
        />
      </div>
      <span className="max-w-16 overflow-hidden text-xs text-white">
        {props.userName}
      </span>
    </div>
  );
};

export default Story;
