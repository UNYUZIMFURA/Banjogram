const Story = () => {
  const randomString = Math.random();
  return (
    <div className="ml-1 h-[4rem] w-[4rem] rounded-full border">
      <img
        src={`https://picsum.photos/400/400?random=${randomString}`}
        alt="Loading..."
        className="rounded-full"
      />
    </div>
  );
};

export default Story;
