const { useEffect, useState } = require("react");

const Story = (props) => {
  return (
    <div className="h-[4rem] w-[4rem] rounded-full border">
      <img className="h-full w-full rounded-full" src={`${props}.url`} alt="" />
    </div>
  );
};

export default Story;
