const SuggestedAccount = () => {
  return (
    <div className="flex h-16 w-full items-center justify-between bg-red-200 px-1">
      <div className="flex gap-4">
        <div className="h-12 w-12 rounded-full bg-green-200"></div>
        <div className="flex flex-col bg-red-400">
          <span className="">__i.divin__</span>
          <span className="tracking-tight text-sm">Followed by sugirayvan +5 more</span>
        </div>
      </div>
      <span className="text-sm font-medium text-[#0095F6]">Follow</span>
    </div>
  );
};

export default SuggestedAccount;
