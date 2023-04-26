import Story from "./Story";

const Stories = () => {
  const stories = [
    { id: 1, userName: "element_eleeeh" },
    { id: 2, userName: "k.mbappe" },
    { id: 3, userName: "paulkagame" },
    { id: 4, userName: "kallehallden" },
    { id: 5, userName: "psg" },
    { id: 6, userName: "kevin_banjo" },
    { id: 7, userName: "neymarjr" },
    { id: 8, userName: "_rl9" },
    { id: 9, userName: "therock" },
    { id: 0, userName: "rocky_kimomo" },
  ];
  return (
    <div className="flex h-[7rem] items-center overflow-scroll border px-2 scrollbar-hide">
      {stories.map((item) => (
        <Story id={item} key={item.id} storyUser={item.userName} />
      ))}
    </div>
  );
};
export default Stories;
