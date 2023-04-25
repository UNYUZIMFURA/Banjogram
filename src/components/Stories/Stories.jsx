import Story from "./Story";
const { useEffect, useState } = require("react");

const Stories = () => {
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
    <div className="flex h-[7rem] items-center border border-[#3E4042]">
      {images.length != 0 ? images.map((img) => <Story />) : null}
    </div>
  );
};
export default Stories;
