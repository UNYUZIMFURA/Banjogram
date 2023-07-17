import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideDiv } from "../../redux/actions";
import SvgElement from "./SvgElement";
import { FiArrowLeft } from "react-icons/fi";

const PostingDiv = () => {
  const [mobileView, setMobileView] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const [nextClicked, setNextClicked] = useState(false);
  const [image, setImage] = useState("");
  const randomString = Math.random();
  const [emojiArr] = useState([
    "✌",
    "😂",
    "😝",
    "😁",
    "😱",
    "👉",
    "🙌",
    "🍻",
    "🔥",
    "🌈",
    "☀",
    "🎈",
    "🌹",
    "💄",
    "🎀",
    "⚽",
    "🎾",
    "🏁",
    "😡",
    "👿",
    "🐻",
    "🐶",
    "🐬",
    "🐟",
    "🍀",
    "👀",
    "🚗",
    "🍎",
    "💝",
    "💙",
    "👌",
    "❤",
    "😍",
    "😉",
    "😓",
    "😳",
    "💪",
    "💩",
    "🍸",
    "🔑",
    "💖",
    "🌟",
    "🎉",
    "🌺",
    "🎶",
    "👠",
    "🏈",
    "⚾",
    "🏆",
    "👽",
    "💀",
    "🐵",
    "🐮",
    "🐩",
    "🐎",
    "💣",
    "👃",
    "👂",
    "🍓",
    "💘",
    "💜",
    "👊",
    "💋",
    "😘",
    "😜",
    "😵",
    "🙏",
    "👋",
    "🚽",
    "💃",
    "💎",
    "🚀",
    "🌙",
    "🎁",
    "⛄",
    "🌊",
    "⛵",
    "🏀",
    "🎱",
    "💰",
    "👶",
    "👸",
    "🐰",
    "🐷",
    "🐍",
    "🐫",
    "🔫",
    "👄",
    "🚲",
    "🍉",
    "💛",
    "💚",
  ]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    const debounceHandleResize = debounce(handleResize, 300);

    window.addEventListener("resize", debounceHandleResize);

    return () => {
      window.removeEventListener("resize", debounceHandleResize);
    };
  }, []);

  const debounce = (fn, delay) => {
    let timerId;
    return () => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        fn();
      }, delay);
    };
  };

  useEffect(() => {
    const addPostDetails = () => {
      if (window.innerWidth < 768 || width < 768) {
        const postingDiv = document.getElementById("posting-div");
        const imgDiv = document.getElementById("img-div");
        const addPostDetails = document.getElementById("add-post-details");
        const userImage = document.getElementById("user-image")

        /* Removing Previously Made DOM Manipulations of ->
           Enabling User to Add Caption in Desktop Version and Larger Breakpoints
           This will be removed once the user resizes back to Mobile Version and Smaller Breakpoints
        */

        if (window.innerWidth >= 350) {
          postingDiv.style.width = "21.7rem";
        } else if (window.innerWidth >= 768) {
          postingDiv.style.width = "50%";
        }

        imgDiv.style.width = "100%";
        imgDiv.style.borderRadius = "0"
        userImage.style.borderRadius = "0"
        addPostDetails.style.display = "none";
        setMobileView(true);
      } else {
        setMobileView(false);
        if (nextClicked) {
          const postingDiv = document.getElementById("posting-div");
          const imgDiv = document.getElementById("img-div");
          const childOne = document.getElementById("child-1");
          const addPostDetails = document.getElementById("add-post-details");
          const userImage = document.getElementById("user-image")

          postingDiv.style.width = window.innerWidth >= 1125 ? "68rem" : "95%";
          postingDiv.style.borderRadius = "0.5rem"
          imgDiv.style.width = window.innerWidth > 770 ? "60%" : "50%";
          imgDiv.style.borderBottomLeftRadius = "0.5rem"
          userImage.style.borderBottomLeftRadius = "0.5rem"
          childOne.style.flexDirection = "row";
          addPostDetails.style.display = "flex";
          addPostDetails.style.borderBottomRightRadius = "0.5rem"
        }
      }
    };
    addPostDetails();
  }, [width, nextClicked, mobileView]);

  const closeDiv = () => {
    dispatch(hideDiv());
  };

  const closeUploadDiv = (e) => {
    if (e.target.id === "uploadDivHolder") {
      closeDiv();
    }
  };

  const closeCaptionDiv = (e) => {
    if (e.target.id !== "mobile-caption-div") return;
    const mobileCaptionDiv = document.getElementById("mobile-caption-div");
    mobileCaptionDiv.style.display = "none";
    setNextClicked(false);
    setMobileView(false);
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    const type = file.type.slice(0, 5);
    if (type === "image") {
      setImage(e.target.files[0]);
      displayImage();
    }
  };

  const displayImage = () => {
    const arrowLeft = document.getElementById("arrow-left");
    const nextTxt = document.getElementById("next-txt");
    const childTwo = document.getElementById("child-2");
    const imageDiv = document.getElementById("img-div");

    imageDiv.style.borderRadius = "0.75rem";
    arrowLeft.style.display = "inline";
    nextTxt.style.display = "inline";
    childTwo.style.display = "none";
    imageDiv.style.display = "flex";
  };

  return (
    <div
      className="fixed top-0 z-[1] flex h-screen w-screen items-center justify-center bg-[#00000098]"
      onClick={(e) => closeUploadDiv(e)}
      id="uploadDivHolder"
    >
      <form
        className="flex h-[48vh] w-full flex-col justify-between rounded-xl bg-[#272727] min-[350px]:w-[21.7rem] min-[720px]:h-[55vw] min-[720px]:w-[50%] min-[970px]:h-[40rem] min-[970px]:w-[37rem] min-[1905px]:h-[48rem] min-[1905px]:w-[45rem]"
        id="posting-div"
      >
        {mobileView && nextClicked ? (
          <div
            className="fixed left-0 top-0 z-[1] flex h-screen w-screen items-center justify-center bg-[#00000077]"
            id="mobile-caption-div"
            onClick={(e) => closeCaptionDiv(e)}
          >
            <textarea
              id=""
              placeholder="Write a caption..."
              className="h-[20vh] w-[20rem] rounded-lg bg-[#272727] px-4 py-4 text-white outline-none"
            />
          </div>
        ) : null}
        <div className="flex h-[2.8rem] w-full items-center justify-between border-b border-[#3E4042] px-4 font-semibold text-white">
          <FiArrowLeft size={25} id="arrow-left" className="hidden" />
          <span className="text-md mx-auto">Create new post</span>
          <span
            className="hidden cursor-pointer text-[rgb(0,149,246)]"
            id="next-txt"
            onClick={() => setNextClicked(true)}
          >
            Next
          </span>
        </div>

        <div
          className="flex h-[90%] flex-col items-center justify-center text-white min-[868px]:h-[92%] min-[970px]:h-[93%] min-[1905px]:h-[94.2%]"
          id="child-1"
        >
          <div
            className="flex flex-col items-center justify-center gap-4"
            id="child-2"
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
          <div className="hidden h-full w-full" id="img-div">
            {image ? (
              <img
                id="user-image"
                src={URL.createObjectURL(image)}
                alt=""
                className="h-full w-full object-cover"
              />
            ) : null}
          </div>
          <form
            id="add-post-details"
            className="hidden h-full w-1/2 flex-col items-start gap-4 bg-[#272727] p-4 min-[770px]:w-[40%]"
          >
            <div className="flex items-center gap-2 p-1">
              <div className="h-8 w-8 cursor-pointer rounded-full">
                <img
                  src={`${process.env.REACT_APP_IMAGES_ENDPOINT}?random=${randomString}`}
                  alt="..."
                  className="rounded-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="text-sm font-bold">joykevinrobin</span>
            </div>
            <textarea
              className="h-[10rem] w-full bg-[#272727]  text-white outline-none"
              placeholder="Write a caption..."
            />
            <div className="flex h-[7rem] w-[90%] flex-wrap  gap-4 overflow-scroll bg-[#272727] scrollbar-hide">
              {emojiArr.map((el) => (
                <span className="cursor-pointer">{el}</span>
              ))}
            </div>
          </form>
        </div>
      </form>
    </div>
  );
};

export default PostingDiv;
