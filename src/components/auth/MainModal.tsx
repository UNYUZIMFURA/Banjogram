import React, { useEffect, useState } from "react";
import { IoLogoFacebook } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface Props {
  pageSource: string;
  displayUsernameInput: boolean;
}

const MainModal = (props: Props) => {
  const [imageIndex, setImageIndex] = useState<number>(1);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      imageIndex !== 4
        ? setImageIndex((prevIndex) => prevIndex + 1)
        : setImageIndex(1);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [imageIndex]);

  return (
    <div className="flex h-screen w-screen justify-center pt-[12vh] min-[876px]:mx-auto min-[876px]:w-[55rem]">
      <div className="hidden h-[40rem] w-1/2 bg-[url('../public/phone.png')] bg-cover bg-no-repeat min-[876px]:relative min-[876px]:flex">
        <img
          className="animate-out fade-out absolute right-[1.8rem] top-[1.5rem] h-[86%]"
          src={`slider_img_${imageIndex}.png`}
          alt=""
        />
      </div>
      <div className="flex h-[35rem] w-[95%] flex-col items-center gap-2 min-[370px]:w-[22rem]">
        <div className="flex w-full flex-col items-center gap-4 border pt-5">
          <span className="fade-in-5 cursor-pointer font-igfont text-[2.3rem] font-bold text-black duration-300">
            Banjogram
          </span>
          <div className="flex flex-col py-5">
            <div className="flex flex-col gap-2 pb-2">
              <input
                placeholder="Phone number,username,or email"
                className="text-ellipsis border  bg-[rgb(250,250,250)] p-2 outline-none placeholder:text-xs"
              />
              {props.displayUsernameInput && (
                <input
                  placeholder="Username"
                  className="text-ellipsis border  bg-[rgb(250,250,250)] p-2 outline-none placeholder:text-xs"
                />
              )}
              <input
                placeholder="Password"
                className="text-ellipsis border bg-[rgb(250,250,250)] p-2 outline-none placeholder:text-xs"
              />
            </div>
            <div className="bg-[green flex flex-col items-center gap-4 py-2">
              <button className="w-full cursor-pointer rounded-lg bg-[rgb(0,149,246)] py-[0.4rem] text-sm font-semibold text-white ">
                Log in
              </button>
              <div className="flex items-center gap-6">
                <div className="h-[1px] w-[5.7rem] bg-[rgb(219,219,219)]"></div>
                <span className="text-xs font-semibold text-[gray]">OR</span>
                <div className="h-[1px] w-[5.7rem] bg-[rgb(219,219,219)]"></div>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-4 py-3">
              <span className="flex items-center gap-2">
                <IoLogoFacebook fill="#385185" size={20} />
                <span className="cursor-pointer text-sm font-semibold text-[#385185]">
                  Log in with Facebook
                </span>
              </span>
              <span className="cursor-pointer text-xs text-[rgb(0,55,107)]">
                Forgot password?
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 border px-4 py-5 text-sm">
          <span>
            {props.pageSource === "login"
              ? `Don't have an account?`
              : `Have an account?`}
          </span>
          <span
            className="cursor-pointer font-semibold text-[rgb(0,149,246)]"
            onClick={() => {
              props.pageSource === "login"
                ? navigate("/signup")
                : navigate("/login");
            }}
          >
            {props.pageSource === "login" ? `Sign up` : `Log in`}
          </span>
        </div>
        <div className="flex w-full flex-col items-center gap-4 py-2 text-sm">
          <span>Get the app.</span>
          <div className="flex max-w-[18rem] justify-around">
            <img
              src="/apple_store.png"
              alt=""
              className="h-auto w-[47%] cursor-pointer"
            />
            <img
              src="/play_store.png"
              alt=""
              className="h-auto w-[47%] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainModal;
