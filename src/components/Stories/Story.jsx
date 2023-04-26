import "./styles/story.css";

const Story = (props) => {
  const randomString = Math.random();
  return (
    <div
      className={`story ${
        props.id == 1 ? "ml-0" : "ml-4"
      } flex h-[4rem] min-w-[4rem]  cursor-pointer`}
    >
      <img
        src={`https://picsum.photos/400/400?random=${randomString}`}
        alt="..."
        className="mx-auto my-auto h-[92%] rounded-full"
      />
    </div>
  );
};

export default Story;
