import React from "react";

const Login = () => {
  return (
    <div className="flex h-[80vh] w-full flex-col items-center justify-center">
      <div className="h-screen w-[95%] border border-gray-500">
        <div className="flex h-[30rem] w-full flex-col items-center justify-around border border-violet-400">
          <span className="cursor-pointer font-satisfy text-2xl text-black">
            Banjogram
          </span>
          <div className="flex flex-col">
            <div className="flex flex-col gap-3">
              <input
                placeholder="Phone number,username,or email"
                className="border border-green-400 p-2 outline-none"
              />
              <input
                placeholder="Password"
                className="border border-red-500 p-2 outline-none"
              />
            </div>
            <div className="flex flex-col items-center gap-4 p-2">
              <button className="cursor-pointer rounded-lg bg-[rgb(0,149,246)] px-8 py-2 font-semibold text-white">
                Login
              </button>
              <div className="flex items-center gap-4 ">
                <div className="h-[1px] w-[3rem] bg-black"></div>
                <span>OR</span>
                <div className="h-[1px] w-[3rem] bg-black"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span>Log in with Facebook</span>
            <span>Forgot password?</span>
          </div>
        </div>
        <div className="flex justify-center">
          <span>Don't have an account?</span>
          <span>Sign up</span>
        </div>
        <div className="flex w-full  bg-red-500 justify-center gap-1">
          <img src="/apple_store.png" alt="" className="h-9"/>
          <img src="/play_store.png" alt="" className="h-9"/>
        </div>
      </div>
    </div>
  );
};

export default Login;
