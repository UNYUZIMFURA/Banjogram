import React from "react";

import { IoLogoFacebook } from "react-icons/io";

const Login = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center min-[876px]:justify-around">
      <div className="hidden min-[876px]:flex h-[80vh] w-1/2 bg-[red] "></div>
      <div className="flex h-[80vh] bg-[green] w-[95%] flex-col items-center gap-2  min-[370px]:w-[22rem]">
        <div className="flex w-full flex-col items-center pt-5 gap-4 border border-black">
          <span className="cursor-pointer font-bold font-satisfy text-[2.3rem] text-black">
            Banjogram
          </span>
          <div className="flex flex-col py-5">
            <div className="flex flex-col gap-2 pb-2">
              <input
                placeholder="Phone number,username,or email"
                className="border bg-[rgb(250,250,250)]  text-ellipsis p-2 outline-none placeholder:text-xs"
              />
              <input
                placeholder="Password"
                className="border bg-[rgb(250,250,250)] text-ellipsis p-2 outline-none placeholder:text-xs"
              />
            </div>
            <div className="bg-[green flex flex-col items-center gap-4 py-2">
              <button className="w-full cursor-pointer rounded-lg bg-[rgb(0,149,246)] py-[0.4rem] font-semibold text-white text-sm ">
                Log in
              </button>
              <div className="flex items-center gap-6">
                <div className="h-[1px] w-[5.7rem] bg-[rgb(219,219,219)]"></div>
                <span className="text-xs text-[gray] font-semibold">OR</span>
                <div className="h-[1px] w-[5.7rem] bg-[rgb(219,219,219)]"></div>
              </div>
            </div>
            <div className="py-3 flex w-full flex-col items-center justify-center gap-4">
              <span className="flex items-center gap-2">
                <IoLogoFacebook fill="#385185" size={20} />
                <span className="text-sm font-semibold text-[#385185] cursor-pointer">
                  Log in with Facebook
                </span>
              </span>
              <span className="text-xs text-[rgb(0,55,107)] cursor-pointer">
                Forgot password?
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 border py-5 px-4 text-sm">
          <span>Don't have an account?</span>
          <span className="cursor-pointer text-[rgb(0,149,246)] font-semibold">Sign up</span>
        </div>
        <div className="flex items-center gap-4 py-2 w-full flex-col text-sm">
          <span>Get the app.</span>
          <div className="max-w-[18rem] flex justify-around">
          <img src="/apple_store.png" alt="" className="h-auto w-[47%] cursor-pointer" />
          <img src="/play_store.png" alt="" className="h-auto w-[47%] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
