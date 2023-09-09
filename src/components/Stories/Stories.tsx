import Story from "./Story";
import React from "react";

const Stories = () => {
  const stories = [
    { id: 1, userName: "element_eleeeh", category: "Music" },
    { id: 2, userName: "k.mbappe", category: "Football" },
    { id: 3, userName: "paulkagame", category: "Politics" },
    { id: 4, userName: "rocky_kimomo", category: "Cinema" },
    { id: 5, userName: "leo_messi", category: "World Cup" },
    { id: 6, userName: "cristiano", category: "Champions League" },
    { id: 7, userName: "neymarjr", category: "Player" },
    { id: 8, userName: "_rl9", category: "Soccer" },
    { id: 9, userName: "therock", category: "Action" },
    { id: 10, userName: "kallehallden", category: "Programmer" },
  ];
  return (
    <div className="flex h-32 w-full items-center overflow-scroll px-2 outline-none scrollbar-hide min-[630px]:w-[40rem]">
      {stories.map((item) => (
        <Story
          id={item.id}
          key={item.id}
          userName={item.userName}
          category={item.category}
        />
      ))}
    </div>
  );
};
export default Stories;
