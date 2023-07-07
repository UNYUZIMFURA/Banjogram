import { useState } from "react";
import { useDispatch } from "react-redux";
import { hideDiv } from "../../redux/actions";
import SvgElement from "./SvgElement";
import { FiArrowLeft } from "react-icons/fi";

const PostingDiv = () => {
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const postingDiv = document.getElementById("postingDiv");

  const displayImage = () => {
    const arrowLeft = document.getElementById("arrow-left");
    const nextTxt = document.getElementById("next-txt");
    const childOne = document.getElementById("child-1");
    const imageDiv = document.getElementById("img-div");
    arrowLeft.style.display = "inline";
    nextTxt.style.display = "inline";
    childOne.style.display = "none";
    imageDiv.style.display = "flex";
  };

  const addPostDetails = () => {
    postingDiv.style.backgroundColor = "red"
    postingDiv.style.width = "";
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
      className="fixed top-0 z-[1]  flex h-screen w-screen items-center justify-center bg-[#00000098] overflow-scroll"
      onClick={(e) => closeUploadDiv(e)}
      id="uploadDivHolder"
    >
      <form
        className="flex h-[48vh] w-full flex-col justify-between rounded-xl bg-[#272727] min-[350px]:w-[21.7rem] min-[720px]:h-[55vw] min-[720px]:w-[50%] min-[970px]:h-[40rem] min-[970px]:w-[37rem] min-[1905px]:h-[48rem] min-[1905px]:w-[45rem]"
        id="postingDiv"
      >
        <div className="flex h-[2.8rem] w-full items-center justify-between border-b border-[#3E4042] px-4 font-semibold text-white">
          <FiArrowLeft size={25} id="arrow-left" className="hidden" />
          <span className="text-md mx-auto">Create new post</span>
          <span
            className="hidden cursor-pointer text-[rgb(0,149,246)]"
            id="next-txt"
            onClick={addPostDetails}
          >
            Next
          </span>
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
