import Story from "./Story"

const Stories = () => {
  const storyNum = [1,2,3,4,5,6,7,8,9,0];
  return (
    <div className="flex h-[7rem] items-center overflow-scroll scrollbar-hide">
      {
        storyNum.map(item => <Story id={item} key={item}/>)
      }
    </div>
  );
};
export default Stories;
