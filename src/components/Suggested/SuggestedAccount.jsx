import "index.css";

const SuggestedAccount = (props) => {
  const randomString = Math.random();
  return (
    <div className="flex h-16 w-full cursor-pointer items-center justify-between px-1">
      <div className="flex gap-4">
        <div className="loading h-10 w-10 cursor-pointer rounded-full">
          <img
            src={`${process.env.REACT_APP_IMAGES_ENDPOINT}?random=${randomString}`}
            alt="..."
            className="rounded-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold">{props.username}</span>
          <span className="text-xs font-medium tracking-tight text-[rgb(168,168,168)]">
            Followed by {props.followedBy}
          </span>
        </div>
      </div>
      <span className="cursor-pointer text-xs font-bold text-[rgb(0,149,246)]">
        Follow
      </span>
    </div>
  );
};

export default SuggestedAccount;
