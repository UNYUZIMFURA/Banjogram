import { useDispatch } from "react-redux";
import { hideDiv } from "../../redux/actions";
import SvgElement from "./SvgElement";
import { useState } from "react";

const PostingDiv = () => {
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const displayImage = () => {
    const childOne = document.getElementById("child-1");
    const imageDiv = document.getElementById("img-div");
    childOne.style.display = "none";
    imageDiv.style.display = "flex";
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    const type = file.type.slice(0, 5);
    if (type === "image") {
      setImage(e.target.files[0]);
      displayImage();
    }
  };

  const closeDiv = () => {
    dispatch(hideDiv());
  };

  const closeUploadDiv = (e) => {
    if (e.target.id === "uploadDivHolder") {
      closeDiv();
    }
  };

  return (
    <div
      className="fixed top-0 z-[1]  flex h-screen w-screen items-center justify-center bg-[#00000098]"
      onClick={(e) => closeUploadDiv(e)}
      id="uploadDivHolder"
    >
      <form className="flex h-[48vh] w-full flex-col justify-between rounded-xl bg-[#272727] min-[350px]:w-[21.7rem] min-[720px]:h-[55vw] min-[720px]:w-[50%] min-[970px]:h-[40rem] min-[970px]:w-[37rem] min-[1905px]:h-[48rem] min-[1905px]:w-[45rem]">
        <div className="flex h-[2.8rem] w-full items-center justify-center border-b border-[#3E4042] font-semibold text-white">
          <span className="text-md">Create new post</span>
        </div>

        <div className="flex h-[90%] flex-col items-center justify-center text-white min-[868px]:h-[92%] min-[970px]:h-[93%] min-[1905px]:h-[94.2%]">
          <div
            className="flex flex-col items-center justify-center gap-4"
            id="child-1"
          >
            <SvgElement />
            <span className="text-lg">Drag photos and videos here</span>
            <input
              type="file"
              id="imgUploader"
              className="hidden"
              onChange={handleImage}
            />
            <label
              className="cursor-pointer rounded-lg bg-[rgb(0,149,246)] px-2 py-2 text-sm font-semibold outline-none"
              htmlFor="imgUploader"
            >
              Select from computer
            </label>
          </div>
          <div className="hidden max-h-full" id="img-div">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt=""
                className="h-full w-full object-cover"
              />
            ) : null}
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostingDiv;
