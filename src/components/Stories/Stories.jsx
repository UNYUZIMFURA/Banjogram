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
    <div className="flex h-32 bg-red-200 items-center overflow-scroll px-2 scrollbar-hide min-[630px]:w-[40rem]">
      {stories.map((item) => (
        <Story id={item.id} key={item.id} userName={item.userName} />
      ))}
    </div>
  );
};
export default Stories;
