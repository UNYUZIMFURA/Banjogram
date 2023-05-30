const SuggestedAccount = (props) => {
  const randomString = Math.random();
  return (
    <div className="cursor-pointer flex h-16 w-full items-center justify-between px-1">
      <div className="flex gap-4">
        <div className="h-10 w-10 rounded-full cursor-pointer">
        <img
          src={`${process.env.REACT_APP_IMAGES_ENDPOINT}?random=${randomString}`}
          alt="..."
          className="object-cover rounded-full"
        />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold">{props.username}</span>
          <span className="tracking-tight text-xs text-[rgb(168,168,168)]">Followed by {props.followedBy}</span>
        </div>
      </div>
      <span className="text-xs font-bold text-[rgb(0,149,246)] cursor-pointer">Follow</span>
    </div>
  );
};

export default SuggestedAccount;
