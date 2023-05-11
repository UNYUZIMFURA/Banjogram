import "./styles/story.css";

const Story = (props) => {
  const randomString = Math.random();
  return (
    <div
      className={`h-full w-16 ${
        props.id === 1 ? "ml-0" : "ml-4"
      } flex flex-col items-center justify-center gap-2`}
    >
      <div className="story flex h-16 min-w-16 cursor-pointer">
        <img
          src={`${process.env.REACT_APP_IMAGES_ENDPOINT}?random=${randomString}`}
          alt="..."
          className="mx-auto my-auto h-[92%] rounded-full"
        />
      </div>
      <span className="max-w-16 overflow-hidden text-[0.73rem] text-white">
        {props.userName}
      </span>
    </div>
  );
};

export default Story;
