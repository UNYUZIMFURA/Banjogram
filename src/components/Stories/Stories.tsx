import Story from "./Story";
import React from "react";

const Stories = () => {
  const stories = [
    { id: 1, userName: "element_eleeeh" },
    { id: 2, userName: "k.mbappe" },
    { id: 3, userName: "paulkagame" },
    { id: 4, userName: "rocky_kimomo" },
    { id: 5, userName: "leo_messi" },
    { id: 6, userName: "cristiano" },
    { id: 7, userName: "neymarjr" },
    { id: 8, userName: "_rl9" },
    { id: 9, userName: "therock" },
    { id: 10, userName: "kallehallden" },
  ];
  return (
    <div className="flex h-32 w-full items-center overflow-scroll px-2 scrollbar-hide min-[630px]:w-[40rem] outline-none">
      {stories.map((item) => (
        <Story id={item.id} key={item.id} userName={item.userName} />
      ))}
    </div>
  );
};
export default Stories;
