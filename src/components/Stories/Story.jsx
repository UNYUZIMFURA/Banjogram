import "./styles/story.css";

const Story = () => {
  const randomString = Math.random();
  return (
    <div className="story ml-4 flex h-[4rem] min-w-[4rem]  cursor-pointer">
      <img
        src={`https://picsum.photos/400/400?random=${randomString}`}
        alt="..."
        className="h-[95%] rounded-full mx-auto my-auto"
      />
    </div>
  );
};

export default Story;
