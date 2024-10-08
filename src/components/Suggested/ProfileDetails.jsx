import "index.css";
import { v4 } from "uuid";

const ProfileDetails = () => {
  return (
    <div className="flex h-16 w-full cursor-pointer items-center justify-between px-1">
      <div className="flex gap-4">
        <div className="load h-12 w-12 rounded-full">
          <img
            src={`https://picsum.photos/600/600?random=${v4()}`}
            alt=""
            className="rounded-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">joykevinrobin</span>
          <span className="text-sm tracking-tight text-[rgb(168,168,168)]">
            JOY KEVIN ROBIN
          </span>
        </div>
      </div>
      <span className="text-xs font-bold text-[rgb(0,149,246)]">Switch</span>
    </div>
  );
};

export default ProfileDetails;
