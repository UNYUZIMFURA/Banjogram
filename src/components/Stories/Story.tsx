import "index.css";
import React from "react";
import "./styles/story.css";

type StoryProps = {
  id: number;
  userName: string;
};

const Story = (props: StoryProps) => {
  const randomString = Math.random();
  return (
    <div
      className={`h-full w-[4rem] ${
        props.id === 1 ? "ml-0" : "ml-4"
      } flex flex-col items-center justify-center gap-2`}
    >
      <div className="story grid h-[4rem] min-w-[4rem] cursor-pointer place-items-center">
        <img
          src={`${process.env.REACT_APP_SECONDARY_IMAGES_ENDPOINT}?random=${randomString}`}
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
