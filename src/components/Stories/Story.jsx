const { useEffect, useState } = require("react");

const Story = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    if (images.length != 0) {
      console.log(images[0].urls.small);
    }
  }, [images]);
  useEffect(() => {
    const fetchPics = async () => {
      const res = await fetch(
        "https://api.unsplash.com/photos/?client_id=1LL76bQsvQAoX-PbSVsga7ELNj8V6crx_DC2yFFljwU"
      );
      const data = await res.json();
      setImages(data);
    };
    fetchPics();
  }, []);
  return (
    <div className="h-[4rem] w-[4rem] rounded-full border">
      <img className="h-full w-full rounded-full" src="" alt="" />
    </div>
  );
};

export default Story;
