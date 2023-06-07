const ProfileDetails = () => {
  const randomString = Math.random();
  return (
    <div className="cursor-pointer flex h-16 w-full items-center justify-between px-1">
      <div className="flex gap-4">
        <div className="h-12 w-12 rounded-full">
          <img
            src={`${process.env.REACT_APP_IMAGES_ENDPOINT}?random=${randomString}`}
            alt="..."
            className="rounded-full object-cover"
            loading="lazy" 
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">joykevinrobin</span>
          <span className="tracking-tight text-[rgb(168,168,168)] text-sm">JOY KEVIN ROBIN</span>
        </div>
      </div>
      <span className="text-xs font-bold text-[rgb(0,149,246)]">Switch</span>
    </div>
  );
};

export default ProfileDetails;
