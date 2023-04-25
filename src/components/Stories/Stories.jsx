import Story from "./Story"

const Stories = () => {
  const items = [{ id: 1 }, { id: 2 }];
  return (
    <div className="flex h-[7rem] items-center border border-[#3E4042]">
      {
        items.map(item => <Story key={item.id}/>)
      }
    </div>
  );
};
export default Stories;
