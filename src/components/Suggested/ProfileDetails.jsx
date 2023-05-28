const ProfileDetails = () => {
  return (
    <div className="flex h-16 w-full items-center bg-red-200 justify-between px-1">
      <div className="flex gap-4">
        <div className="h-12 w-12 rounded-full bg-green-200"></div>
        <div className="flex flex-col bg-red-400">
          <span className="">joykevinrobin</span>
          <span className="tracking-tight">JOY KEVIN ROBIN</span>
        </div>
      </div>
      <span className="text-sm text-[#0095F6] font-medium">Switch</span>
    </div>
  );
};

export default ProfileDetails;
